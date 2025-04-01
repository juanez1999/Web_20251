# React Router and Navigation in React

## 📖 Introduction

React Router is a library that enables efficient navigation management in React applications, simulating the behavior of a traditional multi-page application (MPA) but without reloading the page.

## 🔄 Installation

To use React Router in your project, first install it with:

```sh
npm install react-router-dom
```

Or if you use Yarn:

```sh
yarn add react-router-dom
```

## 🌐 Key Concepts

### 1. **BrowserRouter**

This component wraps the entire application and enables the use of routes in a React app based on browser history.

```jsx
import { BrowserRouter } from 'react-router-dom';

function App() {
	return <BrowserRouter>{/* Other components here */}</BrowserRouter>;
}
```

### 2. **Routes and Route**

The `<Routes>` component contains multiple routes defined with `<Route>`. Each `<Route>` defines a path and the component that will be rendered when the user accesses that path.

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}
```

### 3. **Link and NavLink**

Instead of using `<a href="">`, React Router provides `<Link>` and `<NavLink>` for navigation without page reloads.

```jsx
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<NavLink to='/about' activeClassName='active'>
						About
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
```

### 4. **useNavigate**

A hook that allows programmatic navigation.

```jsx
import { useNavigate } from 'react-router-dom';

function Home() {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Home</h1>
			<button onClick={() => navigate('/about')}>Go to About</button>
		</div>
	);
}
```

### 5. **useParams**

Allows capturing dynamic parameters from the URL.

```jsx
import { useParams } from 'react-router-dom';

function Profile() {
	const { userId } = useParams();

	return <h1>User Profile {userId}</h1>;
}
```

Defining the route:

```jsx
<Route path='/profile/:userId' element={<Profile />} />
```

### 6. **useLocation**

Provides access to the current location information.

```jsx
import { useLocation } from 'react-router-dom';

function CurrentPage() {
	const location = useLocation();

	return <p>You are on: {location.pathname}</p>;
}
```

## 🔧 Complete Example

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
	return <h1>Home Page</h1>;
}

function About() {
	return <h1>About Us</h1>;
}

function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
			</nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
```

## Conclusion

React Router simplifies the creation of SPAs with dynamic routes and smooth navigation. With the right hooks and components, navigation can be managed intuitively and efficiently.

Official Documentation: https://reactrouter.com/
