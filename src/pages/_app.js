import '../styles/globals.css'

// GQL
import { ApolloProvider } from '@apollo/client';
import apolloClient from "utils/gql";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
