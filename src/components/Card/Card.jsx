const Card = ({ title, description }) => {
	return (
		<div style={styles.card}>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};

// Inline styles for simplicity
const styles = {
	card: {
		border: '1px solid #ccc',
		borderRadius: '8px',
		padding: '16px',
		maxWidth: '250px',
		boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
	},
};

export default Card;
