import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import Planets from "./components/Planets";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "[YOUR HASURA GRAPHQL ENDPOINT]",
    }),
});

const App = () => (
    <ApolloProvider client={client}>
        <div>
            <h2>testing</h2>
        </div>
    </ApolloProvider>
);

render(<App />, document.getElementById("root"));