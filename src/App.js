import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
    

    componentWillMount() {
        console.disableYellowBox = true;
        firebase.initializeApp({
            apiKey: "AIzaSyAG2AnIazrFO7__CX8thNfC54WTK5LhnvY",
    authDomain: "paredezap-af8b4.firebaseapp.com",
    databaseURL: "https://paredezap-af8b4.firebaseio.com",
    projectId: "paredezap-af8b4",
    storageBucket: "",
    messagingSenderId: "425842474727",
    appId: "1:425842474727:web:5b92225d25cd380a"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
