import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { auth } from '../services/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="User email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
