import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { ApolloProvider } from "react-apollo";
// import { ApolloClient } from "apollo-client";
// import { createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { WebSocketLink } from 'apollo-link-ws';
// import { split } from 'apollo-boost';
// import { getMainDefinition } from "apollo-utilities";

// const httpLink=createHttpLink({uri: 'http://localhost:80/query-or-mutation'});

// const wsLink=new WebSocketLink({
//     uri: `ws://localhost:80/messages-subscriptions?access_token=${localStorage.getItem('oneTimeToken')}`,
//     options: {reconnect: true}
// });

// const splitLink=split(
//     ({query})=>{
//         const {kind, operation}=getMainDefinition(query);
//         return kind==='OperationDefinition' && operation==='subscription';
//     },
//     wsLink,
//     httpLink
// );

// const client=new ApolloClient({
//     link: splitLink,
//     cache: new InMemoryCache()
// });

ReactDOM.render(
    // <ApolloProvider client={client}>
        <App/>,
    // </ApolloProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
