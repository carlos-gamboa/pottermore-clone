import FirebaseService from './firebase-service';

class AuthService {
  
  /**
   * Registers an user based on their email and password
   *
   * @param {string} email
   * @param {string} password
   * @returns Promise with the request
   */
  register(email, password) {
    return FirebaseService.auth()
      .createUserWithEmailAndPassword(email, password);
  }

  /**
   * Logs in an user based on their email and password
   *
   * @param {string} email
   * @param {string} password
   * @returns Promise with the request
   */
  login(email, password) {
    return FirebaseService.auth()
      .signInWithEmailAndPassword(email, password);
  }

}

export default AuthService;