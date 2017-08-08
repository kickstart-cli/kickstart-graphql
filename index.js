const { serviceName, port, isDev, logLevel, nodeEnv } = require('./settings')

const micro = require('micro')
const { router, get, post } = require('microrouter')
const { microGraphiql, microGraphql } = require('graphql-server-micro')
const reqLogger = require('@therebel/req-log')({ serviceName, logLevel, nodeEnv })

const logger = require('./lib/logger')

const healthCheck = require('./api/healthcheck')

const schema = require('./graphql/schema')
const graphqlHandler = microGraphql({ schema })
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' })

const app = micro(
  router(
    get('/internal/health', reqLogger(healthCheck)),
    get('/graphql', graphqlHandler),
    post('/graphql', graphqlHandler),
    get('/graphiql', graphiqlHandler)
  )
)

app.listen(port, function () {
  if (isDev) {
    logger.debug("LOG_LEVEL is set to include 'debug'. You'll be receiving more console output than usual")
    logger.info("LOG_LEVEL is set to include 'info'. You'll be receiving standard info output")
    logger.warning("LOG_LEVEL is set to include 'warning'. You'll be receiving warning output")
    logger.error("LOG_LEVEL is set to include 'error'. You'll be receiving error output")
  }
  logger.info(`> ${serviceName} ready on port ${port}`)
})
