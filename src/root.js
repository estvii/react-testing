import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxThunk from 'redux-thunk';
// import reduxPromise from 'redux-promise';



// const { children, initialState } = props
export default ( {children, initialState = {} }) => {
    const store = createStore(
        reducers, 
        initialState,
        applyMiddleware(reduxThunk)
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}