import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../redux/auth/AuthSlice';
import { useEffect } from 'react';
import { db } from '../services/firebaseConfig';
import { setDoc, doc } from 'firebase/firestore/lite';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    logout();
    dispatch(removeUser());
    navigate('/login');
  };

  // useEffect(() => {
  //   const addDoc = async () => {
  //     await setDoc(doc(db, 'cities', 'HOLA'), {
  //       name: 'Los Angeles',
  //       state: 'CA',
  //       country: 'USA'
  //     });
  //   };

  //   addDoc();
  // }, []);

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
