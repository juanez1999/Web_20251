# **Handling Events in React (Event Handlers)**

In React, **Event Handlers** are functions that respond to user events, such as clicks, mouse movements, or keyboard presses. React uses a synthetic event system called **SyntheticEvent**, which wraps native browser events to enhance cross-browser compatibility.

## **Differences from Native DOM**

1. In React, event names are written in **camelCase** (`onClick` instead of `onclick`).
2. In React, a **function reference** is passed instead of a string:

```jsx
// In plain HTML
<button onclick="handleClick()">Click me</button>

// In React
<button onClick={handleClick}>Click me</button>
```

---

## **Basic Example: Handling a Click Event**

```jsx
import { useState } from 'react';

function ClickExample() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>You have clicked {count} times.</p>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
}

export default ClickExample;
```

**Explanation**:

- `useState` is used to manage the counter state.
- `handleClick` increments the state when the button is clicked.

---

## **Passing Parameters to an Event Handler**

If you need to pass arguments to the event handler, you can use an arrow function:

```jsx
function Greeting({ name }) {
	const handleClick = (greeting) => {
		alert(`${greeting}, ${name}!`);
	};

	return <button onClick={() => handleClick('Hello')}>Greet</button>;
}

export default Greeting;
```

**Note**: Do not use `onClick={handleClick("Hello")}` because that would execute the function immediately instead of waiting for the event.

---

## **Keyboard and Mouse Events**

React provides synthetic events to handle different interactions:

```jsx
function KeyPressExample() {
	const handleKeyPress = (event) => {
		alert(`Key pressed: ${event.key}`);
	};

	return <input type='text' onKeyDown={handleKeyPress} placeholder='Type something' />;
}

export default KeyPressExample;
```

Here, the `onKeyDown` event captures the pressed key and displays it in an alert.

For mouse events:

```jsx
function MouseTracker() {
	const handleMouseOver = () => {
		console.log('Mouse is over the element');
	};

	return (
		<div onMouseOver={handleMouseOver} style={{ padding: 20, background: 'lightblue' }}>
			Hover over me
		</div>
	);
}

export default MouseTracker;
```

---

## **Prevent Default Behavior**

You can use `event.preventDefault()` to prevent default actions, such as submitting a form without reloading the page:

```jsx
function FormExample() {
	const handleSubmit = (event) => {
		event.preventDefault();
		alert('Form submitted without page reload.');
	};

	return (
		<form onSubmit={handleSubmit}>
			<button type='submit'>Submit</button>
		</form>
	);
}

export default FormExample;
```

---

## **Conclusion**

- React handles events using a synthetic system (`SyntheticEvent`).
- Event names are written in **camelCase** (`onClick` instead of `onclick`).
- A **function reference** is passed instead of a string.
- Parameters can be passed using arrow functions.
- Default behavior can be prevented using `preventDefault()`.

# **States in React with `useState`**

## **Introduction**

In React, **state** is a way to store and manage dynamic data within a component. The `useState` hook is the most common way to handle state in functional components. **State changes trigger re-renders**, making it essential for interactive UIs.

## **Why Not Use Variables for State Management?**

In traditional JavaScript with HTML, we can store values in variables and modify them directly. However, in React, this approach does not work effectively for UI updates because React does not track changes in regular variables. Simply updating a variable and expecting React to re-render will not work. Instead, React requires us to use **state** because:

1. **State triggers re-renders:** When a state value changes, React automatically updates the UI, whereas modifying a regular variable does not.
2. **Virtual DOM efficiency:** React batches state updates and minimizes direct manipulations of the DOM, improving performance.
3. **Component lifecycle integration:** Using `useState` ensures that state changes integrate properly with React's rendering process.

For example, the following approach **does not** work in React:

```jsx
let count = 0;

function handleClick() {
	count += 1;
	console.log(count); // Updates in console, but UI does not re-render
}

function Counter() {
	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={handleClick}>Increment</button>
		</div>
	);
}
```

Here, clicking the button updates `count`, but the UI does not re-render because React does not track the variable. Instead, we use `useState`:

```jsx
import { useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>Current Count: {count}</p>
			<button onClick={increment}>Increment</button>
		</div>
	);
}

export default Counter;
```

This ensures React properly tracks and updates the UI when the state changes.

## **Using `useState` to Manage State**

To use state in a component, follow these steps:

1. Import `useState` from React.
2. Call `useState(initialValue)` to create state and a setter function.
3. Update state using the setter function (never modify state directly).

### **Basic Example: Counter**

```jsx
import { useState } from 'react';

function Counter() {
	// Declare state variable and setter function
	const [count, setCount] = useState(0);

	// Event handler to update state
	const increment = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>Current Count: {count}</p>
			<button onClick={increment}>Increment</button>
		</div>
	);
}

export default Counter;
```

### **Explanation:**

- `useState(0)`: Initializes the `count` state to `0`.
- `setCount(count + 1)`: Updates the state, triggering a re-render.
- `onClick={increment}`: Calls `increment` when the button is clicked.

---

## **Handling State with Input Fields**

State can be used to track user input dynamically.

### **Example: Controlled Input Field**

```jsx
function TextInput() {
	const [text, setText] = useState('');

	const handleChange = (event) => {
		setText(event.target.value);
	};

	return (
		<div>
			<input type='text' value={text} onChange={handleChange} placeholder='Type something...' />
			<p>You typed: {text}</p>
		</div>
	);
}

export default TextInput;
```

### **Explanation:**

- `useState("")`: Initializes the `text` state with an empty string.
- `onChange={handleChange}`: Calls `handleChange` whenever the user types.
- `setText(event.target.value)`: Updates state dynamically.

---

## **Updating State Based on Previous State**

When updating state based on the previous value, always use a function inside `setState`.

### **Example: Safe Counter Update**

```jsx
function SafeCounter() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={increment}>Increment</button>
		</div>
	);
}

export default SafeCounter;
```

### **Why Use `prevCount`?**

If multiple updates happen at once, React batches them. Using the **previous state ensures accuracy**.

---

## **Handling Form Submission with State**

### **Example: Simple Form**

```jsx
function SimpleForm() {
	const [name, setName] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Submitted Name: ${name}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
			<button type='submit'>Submit</button>
		</form>
	);
}

export default SimpleForm;
```

### **Explanation:**

- The form uses `useState` to track the `name`.
- `handleSubmit` prevents the default form submission behavior.
- The alert shows the submitted value.

---

## **Conclusion**

- `useState` helps manage **component state** in React.
- State updates trigger **re-renders**.
- Use the setter function (`setState`) to **update state** properly.
- **Events like clicks and input changes** modify state dynamically.

# **Conditional Rendering and Lists in React**

## **Introduction**

In React, we often need to **conditionally render components** based on certain conditions or **dynamically generate lists** from arrays of data. React provides simple and efficient ways to handle both scenarios.

---

## **Conditional Rendering in React**

React allows us to conditionally render elements using:

- **JavaScript logical operators (`&&`, `?:`)**
- **Ternary operators**
- **If statements**

### **Example 1: Conditional Rendering with `&&`**

If a condition is `true`, render the component; otherwise, render nothing.

```jsx
function WelcomeMessage({ isLoggedIn }) {
	return (
		<div>
			<h1>Welcome to React!</h1>
			{isLoggedIn && <p>You are logged in.</p>}
		</div>
	);
}
```

### **Explanation:**

- If `isLoggedIn` is `true`, the `<p>You are logged in.</p>` is displayed.
- If `isLoggedIn` is `false`, nothing is rendered.

---

### **Example 2: Using a Ternary Operator (`?:`)**

Ternary operators help render different content based on a condition.

```jsx
function UserStatus({ isLoggedIn }) {
	return <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>;
}
```

### **Explanation:**

- If `isLoggedIn` is `true`, it displays “Welcome back!”
- If `isLoggedIn` is `false`, it shows “Please log in.”

---

### **Example 3: Using an `if` Statement (Conditional Function Return)**

For more complex conditions, we can use `if` statements inside a function.

```jsx
function SubscriptionStatus({ isSubscribed }) {
	if (isSubscribed) {
		return <p>Thanks for subscribing!</p>;
	}
	return <p>Subscribe now for updates.</p>;
}
```

---

## **Rendering Lists in React**

When working with arrays, we can dynamically generate JSX elements using **`.map()`**.

### **Example 1: Rendering a List of Items**

```jsx
function TaskList({ tasks }) {
	return (
		<ul>
			{tasks.map((task, index) => (
				<li key={index}>{task}</li>
			))}
		</ul>
	);
}
```

### **Explanation:**

- `.map()` iterates over `tasks` and returns a `<li>` for each item.
- The `key` prop is essential for React’s efficient rendering.

---

### **Example 2: Rendering a List of Objects**

```jsx
function UserList({ users }) {
	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>
					<h3>{user.name}</h3>
					<p>Email: {user.email}</p>
				</div>
			))}
		</div>
	);
}
```

### **Why Use `key`?**

- **React uses `key` to track changes efficiently.**
- Each `key` should be **unique** within the list.
- Using `index` as a key should be avoided if list items may change.

---

## **Combining Conditional Rendering with Lists**

We can **conditionally render lists** based on data availability.

### **Example 1: Show List Only If It’s Not Empty**

```jsx
function ProductList({ products }) {
	return (
		<div>
			{products.length > 0 ? (
				<ul>
					{products.map((product) => (
						<li key={product.id}>{product.name}</li>
					))}
				</ul>
			) : (
				<p>No products available.</p>
			)}
		</div>
	);
}
```

### **Explanation:**

- If `products.length > 0`, it renders the list.
- Otherwise, it shows **“No products available.”**

---

## **Conclusion**

- **Conditional rendering** in React is handled using `&&`, ternary operators, or `if` statements.
- **Lists are dynamically generated** using `.map()`.
- **Keys are important** for React’s efficient rendering.
- We can **combine conditional rendering and lists** for flexible UI logic.
