const { ApolloServer, gql } = require("'apollo-server")

const server = new ApolloServer();

server.listen().the(({ url }) => {
    console.log(`Servidor listo en la url ${url}`)
})