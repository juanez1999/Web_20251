import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../services/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { clearUser, setUser } from '../redux/auth/AuthSlice';

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.uid));
      } else {
        dispatch(clearUser());
      }
    });

    //Desmontar al terminarse de ejecutar
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
