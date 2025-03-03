# useEffect and Its Use in Side Effects

## What is `useEffect`?

`useEffect` is a React Hook that allows you to perform side effects in function components. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

## Why Use `useEffect`?

Side effects in React components include:

- Fetching data from an API
- Subscribing to events or external services
- Manually updating the DOM
- Setting up and cleaning up timers or intervals

`useEffect` enables these operations while keeping components functional and declarative.

## Basic Syntax

```javascript
useEffect(() => {
	// Side effect logic here
});
```

By default, `useEffect` runs after every render. To control when it runs, we can pass a dependency array.

## Controlling `useEffect` Execution

### Run on Every Render (Default Behavior)

```javascript
useEffect(() => {
	console.log('This runs on every render');
});
```

### Run Only on Mount (Like `componentDidMount`)

```javascript
useEffect(() => {
	console.log('Component mounted');
}, []); // Empty dependency array
```

### Run When a Variable Changes (Like `componentDidUpdate`)

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
	console.log(`Count changed: ${count}`);
}, [count]); // Runs when `count` changes
```

### Cleanup Function (Like `componentWillUnmount`)

```javascript
useEffect(() => {
	const timer = setInterval(() => {
		console.log('Timer running...');
	}, 1000);

	return () => {
		clearInterval(timer); // Cleanup when component unmounts
		console.log('Timer cleared');
	};
}, []);
```

## Fetching Data with `useEffect`

One of the most common use cases for `useEffect` is fetching data from an API.

```javascript
import { useState, useEffect } from 'react';

function DataFetchingComponent() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []); // Fetch only once when the component mounts

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{data.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			)}
		</div>
	);
}
```

## Best Practices

- Always **use the dependency array** to avoid unnecessary re-renders.
- **Use cleanup functions** to prevent memory leaks.
- **Keep side effects separate** from rendering logic.

## Conclusion

`useEffect` is a powerful hook that simplifies handling side effects in React functional components. Understanding when and how to use it correctly ensures better performance and maintainability in your applications.

---

# The Lifecycle of Components with Hooks

## What is the Component Lifecycle?

In class components, the **lifecycle** consists of methods that control the mounting, updating, and unmounting phases. With hooks, we replicate these lifecycle behaviors using `useEffect`.

## Lifecycle Phases with `useEffect`

### 1️⃣ **Mounting Phase (`componentDidMount`)**

Runs once when the component is added to the DOM.

```javascript
useEffect(() => {
	console.log('Component mounted');
}, []); // Empty array means it runs once
```

### 2️⃣ **Updating Phase (`componentDidUpdate`)**

Runs when dependencies change.

```javascript
useEffect(() => {
	console.log('State or prop updated');
}, [someState]); // Runs when `someState` changes
```

### 3️⃣ **Unmounting Phase (`componentWillUnmount`)**

Runs cleanup logic before the component is removed.

```javascript
useEffect(() => {
	return () => {
		console.log('Component will unmount');
	};
}, []);
```

## Full Lifecycle Example

```javascript
import { useState, useEffect } from 'react';

function LifecycleComponent() {
	const [count, setCount] = useState(0);

	// Mounting
	useEffect(() => {
		console.log('Component mounted');
		return () => {
			console.log('Component unmounted');
		};
	}, []);

	// Updating
	useEffect(() => {
		console.log(`Count updated: ${count}`);
	}, [count]);

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increase</button>
		</div>
	);
}
```

## Summary

- **Mounting:** Use `useEffect(() => {...}, [])`
- **Updating:** Use `useEffect(() => {...}, [dependency])`
- **Unmounting:** Use `useEffect(() => { return () => {...} }, [])`

With hooks, component lifecycles become **more flexible and reusable**, improving maintainability and performance.

---

# Other Common Hooks in React

## `useState`

Manages state in functional components.

```javascript
const [count, setCount] = useState(0);
```

## `useContext`

Provides access to context values.

```javascript
const theme = useContext(ThemeContext);
```

## `useRef`

Persists values between renders without causing re-renders.

```javascript
const inputRef = useRef(null);
<input ref={inputRef} />;
```

## `useReducer`

Alternative to `useState` for complex state logic.

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

## `useMemo`

Optimizes performance by memoizing calculations.

```javascript
const expensiveValue = useMemo(() => computeExpensiveValue(data), [data]);
```

## `useCallback`

Memoizes functions to prevent unnecessary re-renders.

```javascript
const memoizedCallback = useCallback(() => handleEvent(), [dependency]);
```

---

# Fetching Data in React

Fetching data is often done with `useEffect`.

```javascript
import { useState, useEffect } from 'react';

function FetchExample() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/1')
			.then((res) => res.json())
			.then((user) => {
				setData(user);
				setLoading(false);
			});
	}, []);

	return <div>{loading ? 'Loading...' : `User: ${data.name}`}</div>;
}
```

This ensures data is fetched only once when the component mounts.
