import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {

  apiKey: "AIzaSyDECPrsr9TCwS1m146D6dSg83TbK0VClnA",
  authDomain: "otpverification-822a5.firebaseapp.com",
  projectId: "otpverification-822a5",
  storageBucket: "otpverification-822a5.appspot.com",
  messagingSenderId: "949277113771",
  appId: "1:949277113771:web:ad0197e1719277941966ee",
  measurementId: "G-RJNZG7BWCC"

};

//if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
//}