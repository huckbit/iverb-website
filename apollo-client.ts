import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://iverb-graphql.huckbit.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
