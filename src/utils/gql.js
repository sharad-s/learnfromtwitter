import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";

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

export default apolloClient