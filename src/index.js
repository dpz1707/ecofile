import React from "react";
import { render } from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/link-ws";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlanetSearch from "./components/PlanetSearch";
import Planet from "./components/Planet";
import Logo from "./components/shared/Logo";
import "./index.css";


//const GRAPHQL_ENDPOINT = "novel-hyena-29.hasura.app/v1/graphql";
const GRAPHQL_ENDPOINT = "novel-hyena-29.hasura.app/v1/graphql";

const httpLink = new HttpLink({
  headers: { 'x-hasura-admin-secret': 'ICfgxaUgD4rh0yYZyS0VWsGzVaJ7mLrrmnJWxuWpfAYdoZDSfwOM1T1gUDvBEJ6r'},
  uri: `https://${GRAPHQL_ENDPOINT}`,
});

const wsLink = new WebSocketLink({
    uri: `ws://${GRAPHQL_ENDPOINT}`,
    options: {
    reconnect: true,
    connectionParams: {
            headers: { 'x-hasura-admin-secret': 'ICfgxaUgD4rh0yYZyS0VWsGzVaJ7mLrrmnJWxuWpfAYdoZDSfwOM1T1gUDvBEJ6r' },
        },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,


});

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Logo />
        <Switch>

            <Route path="/planet/:id" component={Planet} />
            <Route path="/" component={PlanetSearch} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
