"use client"
import { PropsWithChildren } from "react";
import { HttpLink } from "@apollo/client";
import { ApolloNextAppProvider, ApolloClient, InMemoryCache } from "@apollo/experimental-nextjs-app-support";
import { setContext } from "@apollo/client/link/context";


const makeClient = () => {
    const httpLink = new HttpLink({
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
    })
}

export const Provider = ({ children }: PropsWithChildren) => {
    const initializeClientWithCookie = () => makeClient();
    return (
        <ApolloNextAppProvider makeClient={initializeClientWithCookie}>
            {children}
        </ApolloNextAppProvider>
    )
}