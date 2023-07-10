// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBN_oo5Z8fc8lQuLe5gZ9jUKJEERm4034",
  authDomain: "linkedin-clone-3-71350.firebaseapp.com",
  projectId: "linkedin-clone-3-71350",
  storageBucket: "linkedin-clone-3-71350.appspot.com",
  messagingSenderId: "183894776401",
  appId: "1:183894776401:web:0a1fdc276268204b737670",
  measurementId: "G-HZ98N8GZ0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, app, firestore };
export { getFirestore };

// // clr
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFireStore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDBN_oo5Z8fc8lQuLe5gZ9jUKJEERm4034",
//   authDomain: "linkedin-clone-3-71350.firebaseapp.com",
//   projectId: "linkedin-clone-3-71350",
//   storageBucket: "linkedin-clone-3-71350.appspot.com",
//   messagingSenderId: "183894776401",
//   appId: "1:183894776401:web:0a1fdc276268204b737670",
//   measurementId: "G-HZ98N8GZ0W"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const firestore = getFirestore(app);

// export { auth, app, firestore };
