import './App.css';
import Card from './components/Card/Card';

function App() {
	return (
		<>
			<div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
				<Card title='React Basics' description='Learn the fundamentals of React.' />
				<Card title='Props in React' description='Understand how props work in React components.' />
				<Card title='Component Reusability' description='Build reusable UI components easily.' />
			</div>
		</>
	);
}

export default App;
