import firebase from 'firebase';
import Environment from '../env';

const FirebaseService = firebase.initializeApp(Environment.FIREBASE_CONFIG);

export default FirebaseService;