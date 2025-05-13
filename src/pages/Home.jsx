import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addNewProduct } from '../services/firebaseUtils.js';

const Home = () => {
  const userUid = useSelector((state) => state.auth.user);
  console.log('user', userUid);

  const createProduct = () => {
    addNewProduct({ uidUser: userUid, name: 'Camisa', price: '300' });
  };

  return (
    <>
      Este es el home
      <Link to="/about">Ir al about</Link>
      <button onClick={createProduct}>Crear producto</button>
    </>
  );
};

export default Home;
