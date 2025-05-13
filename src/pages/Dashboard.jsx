import { useSelector } from 'react-redux';
import { auth } from '../services/firebaseConfig';
import { signOut } from 'firebase/auth';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Se cerró la sesión');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {user ? (
        <>
          Hola soy el dashboard
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
          <button onClick={handleLogout}>Cerrar sesión</button>
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
