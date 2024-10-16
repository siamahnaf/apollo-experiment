import { createHttpLink } from "@apollo/client";
import { registerApolloClient, ApolloClient, InMemoryCache } from "@apollo/experimental-nextjs-app-support";
import { cookies } from "next/headers";
import { setContext } from "@apollo/client/link/context";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
    const httpLink = createHttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
        fetchOptions: { cache: "no-store" }
    });
    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS}`,
            },
        };
    });
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(httpLink),
        defaultOptions: {
            watchQuery: {
                errorPolicy: "all",
            },
            query: {
                errorPolicy: "all"
            }
        }
    });
})