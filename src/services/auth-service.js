import FirebaseService from './firebase-service';

class AuthService {
  
  register(email, password) {
    return FirebaseService.auth()
      .createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return FirebaseService.auth()
      .signInWithEmailAndPassword(email, password);
  }

}

export default AuthService;