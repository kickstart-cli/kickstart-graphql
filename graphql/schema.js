const Aeros = require('aeros')

const query = {
  user: {
    type: 'User',
    params: {
      id: 'String'
    },
    resolver: (_, { id }, ctx) => {
      return { id, email: 'janedoe@example.com', name: 'Jane Doe' }
    }
  }
}

const types = {
  User: {
    id: 'String!',
    email: 'String',
    name: 'String',
    address: {
      type: 'String',
      resolver: (user, _, ctx) => {
        return '350 Awesome St. Exampleville, CA'
      }
    }
  }
}

module.exports = Aeros({ query, types }).schema
