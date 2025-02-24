import { useState } from 'react';

export default function EventHandlersDemo() {
	const [count, setCount] = useState(0);
	const [inputValue, setInputValue] = useState('');

	const handleClick = () => {
		setCount(count + 1);
	};

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Submitted value: ${inputValue}`);
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
			<div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center', width: '300px' }}>
				<p style={{ fontSize: '18px', fontWeight: 'bold' }}>Button Click Counter</p>
				<p style={{ fontSize: '20px', margin: '10px 0' }}>Count: {count}</p>
				<button onClick={handleClick} style={{ padding: '10px 20px', cursor: 'pointer' }}>
					Click Me
				</button>
			</div>

			<div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center', width: '300px' }}>
				<p style={{ fontSize: '18px', fontWeight: 'bold' }}>Input Change Handler</p>
				<input
					type='text'
					placeholder='Type something...'
					value={inputValue}
					onChange={handleInputChange}
					style={{ marginTop: '10px', padding: '5px', width: '100%' }}
				/>
				<p style={{ marginTop: '10px' }}>Current Input: {inputValue}</p>
			</div>

			<div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center', width: '300px' }}>
				<p style={{ fontSize: '18px', fontWeight: 'bold' }}>Form Submission</p>
				<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
					<input
						type='text'
						placeholder='Enter something'
						value={inputValue}
						onChange={handleInputChange}
						style={{ padding: '5px', width: '100%' }}
					/>
					<button type='submit' style={{ padding: '10px 20px', cursor: 'pointer' }}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
