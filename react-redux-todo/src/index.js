import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './todos/reducers/reducers.js'
import App from './todos/components/App';

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './todos/actions/actions.js'

let store = createStore(todoApp)
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// eslint-disable-next-line
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
store.dispatch(toggleTodo(2))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))

// Stop listening to state updates
// unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
