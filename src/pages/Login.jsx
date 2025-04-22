import { login } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/auth/AuthSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    login();
    dispatch(
      setUser({
        name: 'Juan',
        email: 'pepito@gmail.com'
      })
    );
    navigate('/dashboard');
  };

  return (
    <>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </>
  );
};

export default Login;
