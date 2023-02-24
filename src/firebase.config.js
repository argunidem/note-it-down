import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCYjx_hzH4nLi_CYGKQfTPJG5EOprH2g30',
  authDomain: 'note-it-down-f638b.firebaseapp.com',
  projectId: 'note-it-down-f638b',
  storageBucket: 'note-it-down-f638b.appspot.com',
  messagingSenderId: '841487226892',
  appId: '1:841487226892:web:d15b317626d353e3e9b629',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
