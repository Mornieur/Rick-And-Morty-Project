import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import { SSRMultipartLink } from '@apollo/experimental-nextjs-app-support/ssr';

export async function getStandaloneApolloClient(uri: string) {
  const httpLink = new HttpLink({ uri });

  return new ApolloClient({
    link: ApolloLink.from([
      new SSRMultipartLink({
        stripDefer: true,
      }),
      httpLink,
    ]),
    cache: new InMemoryCache(),
  });
}
