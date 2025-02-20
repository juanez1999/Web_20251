//Logica de Javascript
// import './Card.css';

const MyCard = ({title, description}) => {
    //Logica de Javascript
    
    return ( //Uso de HTML
        <div className="container" style={stylesCard}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

const stylesCard = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'beige'
}



export default MyCard;