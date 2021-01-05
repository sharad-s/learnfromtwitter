import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";

// GQL-Request
import { GraphQLClient } from 'graphql-request'

// import { WebSocketLink } from "@apollo/link-ws";
// import { getMainDefinition } from "@apollo/client/utilities";

const GRAPHQL_ENDPOINT = 'learnfromtwit-demo.hasura.app/v1/graphql'

const httpLink = new HttpLink({
    uri: `https://${GRAPHQL_ENDPOINT}`,
});

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    ssrMode: true,
});


const graphql = new GraphQLClient(`https://${GRAPHQL_ENDPOINT}`, {
    // headers: {
    //   'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET
    // }
})

export const makeGqlRequest = async (query, vars) => {
    try {
        return await graphql.request(query, { ...vars })
    } catch (err) {
        console.error('makeGqlRequest', { err })
        throw err
    }
}

export default apolloClient