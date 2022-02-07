import firebase from 'firebase/compat/app'
import 'firebase/compat/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyDs0j5uU-APgv9Au2-tqGeOVV-x2VLux4Y",
    authDomain: "portfolio-78887.firebaseapp.com",
    projectId: "portfolio-78887",
    storageBucket: "portfolio-78887.appspot.com",
    messagingSenderId: "104883571267",
    appId: "1:104883571267:web:90289e1df3adc4c774e2f6",
    measurementId: "G-4Q965GBD12"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics()

export default firebase