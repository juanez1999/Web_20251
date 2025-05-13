import { db } from './firebaseConfig';
import { addDoc, collection } from 'firebase/firestore/lite';

export const addNewProduct = async ({ uidUser, name, price }) => {
  const docRef = await addDoc(collection(db, 'products'), {
    uidUser,
    name,
    price
  });
  console.log('Document written with ID: ', docRef.id);
};
