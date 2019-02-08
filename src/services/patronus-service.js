import PatronusData from '../assets/data/patronus.json';
import PatronusQuestions from '../assets/data/patronus-questions.json';

class PatronusService {
  
  /**
   * Gets all the questions for the patronus quiz.
   *
   * @returns Array of questions.
   */
  getPatronusQuestions() {
    return PatronusQuestions.questions;
  }

  /**
   * Gets the patronnus based on the points obtained.
   *
   * @param {number} points
   * @returns Name of the patronus.
   */
  getPatronus(points) {
    const patronusIndex = points % PatronusData.patronus.length;
    return PatronusData.patronus[patronusIndex];
  }
  
}

export default PatronusService;