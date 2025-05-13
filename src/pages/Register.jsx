import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../services/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <>
      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="User email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
    </>
  );
};

export default Register;
