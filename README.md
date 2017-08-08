# kickstart-graphql

This is a boilerplate for scalable graphql API microservices

## Quick Start

To run locally:

```
git clone https://github.com/kickstart-cli/kickstart-graphql
cd kickstart-graphql
yarn
yarn start
```

If you go to http://localhost:9999/graphiql in your browser, you should be able to play with the data.

## architecture

This was built using the following architecture decisions:
- server in zeit/micro, a low-friction express-based server lib
- grapqhl schema built using [Aeros](https://github.com/therebelrobot/aeros)
- environment-based structured logs using winston
- request logging, with status codes
- long-query warnings
- unique id's for all requests (ksuid, `X-Request-ID` response header)
- a healthcheck endpoint for starting up
- eslint, with a superset of feross/standard (`npm run lint`)
- unit testing using ava and mock-require (`npm test`)
- test coverage reporting using nyc (`npm run test:coverage`)
- precommit hooks for running tests automatically
- a development environment server (`npm run dev`)
- a generic dockerfile for deployment
- sane environment defaults (`/settings.js`)
