import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <>
      Este es el home
      <Link to="/about">Ir al about</Link>
      <h1>{count}</h1>
    </>
  );
};

export default Home;
