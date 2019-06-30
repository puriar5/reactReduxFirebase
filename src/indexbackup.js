import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import { reactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

// Create store with reducers and initial state
const initialState = {}

const store = createStore(
    rootReducer,
    initialState, 
    compose(
            applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
            // reactReduxFirebase(fbConfig), // redux binding for firebase
            // reduxFirestore(fbConfig) // redux bindings for firestore
        )
    );

const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance: createFirestoreInstance
}

ReactDOM.render(<Provider store={store}>
    <reactReduxFirebaseProvider {...rrfProps}>
    <App />
    </reactReduxFirebaseProvider>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
