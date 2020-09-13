import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:1337';

const client = new ApolloClient({
  uri: BACKEND_URL + "/graphql",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
