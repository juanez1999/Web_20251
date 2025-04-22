import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../redux/auth/AuthSlice';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    logout();
    dispatch(removeUser());
    navigate('/login');
  };

  return (
    <>
      {user ? (
        <>
          Hola soy el dashboard
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </>
      ) : (
        <>
          No hay usuario
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      )}
    </>
  );
};

export default Dashboard;
