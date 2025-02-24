import { useState } from 'react';

function TaskApp() {
	const [tasks, setTasks] = useState([
		{ id: 1, text: 'Learn React', completed: false },
		{ id: 2, text: 'Build a project', completed: true },
		{ id: 3, text: 'Review concepts', completed: false },
	]);

	const toggleTaskCompletion = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
		);
	};

	return (
		<div style={{ padding: '20px' }}>
			<h2>Task List</h2>
			{tasks.length > 0 ? (
				<ul>
					{tasks.map((task) => (
						<li key={task.id}>
							<span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
							<button onClick={() => toggleTaskCompletion(task.id)}>{task.completed ? 'Undo' : 'Complete'}</button>
						</li>
					))}
				</ul>
			) : (
				<p>No tasks available.</p>
			)}
		</div>
	);
}

export default TaskApp;
