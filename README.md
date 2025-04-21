# Redux Toolkit + React

## What is Redux?

Redux is a predictable state management library for JavaScript applications, commonly used with React.  
It helps to centralize the entire application state in a single global object.

**Main characteristics of Redux:**
- Centralizes state in a single store.
- The state is read-only (only updated through dispatched actions).
- State changes are predictable (using pure reducers).
- It facilitates debugging and maintaining large applications.

## What problems does Redux solve?

- Avoids "prop drilling" (passing props deeply between components).
- Efficiently manages shared state across components.
- Ensures a clear and predictable data flow.

---

## What is Redux Toolkit?

Redux Toolkit (RTK) is the **official, recommended** way to write Redux logic today.

**Why use Redux Toolkit?**
- Simplifies store setup.
- Reduces boilerplate code.
- Provides utilities like `createSlice` to automatically generate reducers and actions.
- Improves best practices by default (e.g., uses Immer internally for immutable state updates).

With RTK, you no longer have to manually configure `combineReducers`, middlewares like `thunk`, or separately create action types and action creators.

---

## How does Redux Toolkit work in a React project?

The general flow when using Redux Toolkit is:

1. Create a **slice** that includes:
   - Initial state.
   - Reducers (functions that modify the state).
   - Auto-generated action creators.
2. Set up the **store** using `configureStore`.
3. Wrap your app with the `<Provider store={store}>` component.
4. Use hooks like `useSelector` to read state and `useDispatch` to dispatch actions.

---

## Quick Setup Guide

Here’s a summarized step-by-step to add Redux Toolkit to your React project:

### 1. Install dependencies, toolkit and react-redux
```bash
npm install @reduxjs/toolkit react-redux
```

### 2. Create a file, e.g., counterSlice.js.

Define initial state, reducers, and export actions and reducer.
```bash
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
````

### 3. Create and configure the store
```bash
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```
### 4. Add to main provider
```bash
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
```
### 5. UseDispatch and UseSelector
```bash
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Redux Toolkit Example</h1>
      <h2>Count: {count}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
```


