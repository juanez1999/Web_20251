import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD-HYIh8x0onCBChk1wlSDlWIeSUdaFXNM',
  authDomain: 'dcatest-2ee5f.firebaseapp.com',
  projectId: 'dcatest-2ee5f',
  storageBucket: 'dcatest-2ee5f.appspot.com',
  messagingSenderId: '634779052994',
  appId: '1:634779052994:web:e23d3ec2eb58c9d2f6045b',
  measurementId: 'G-V8GF33RZ1M'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
  } else {
    // User is signed out
    // ...
  }
});
