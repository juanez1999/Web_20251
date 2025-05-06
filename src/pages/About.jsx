import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIncrement } from '../redux/counter/CounterSlice';

const About = () => {
  const dispatch = useDispatch();

  return (
    <>
      Este es el About
      <button>
        <Link to="/">Ir al home</Link>
      </button>
      <button onClick={() => dispatch(setIncrement())}>Sumar counter</button>
    </>
  );
};

export default About;
