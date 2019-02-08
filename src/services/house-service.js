import HouseData from '../assets/data/house.json';
import HouseQuestions from '../assets/data/house-questions.json';

class HouseService {
  
  /**
   * Gets all the questions for the sorting quiz.
   *
   * @returns Array of questions
   */
  getHouseQuestions() {
    return HouseQuestions.questions;
  }

  /**
   * Gets the information about an specific house.
   *
   * @param {string} house Name of the house. Valid values 'ravenclaw', 'slytherin', 'hufflepuff', 'gryffindor'
   * @returns Object with the house information.
   */
  getHouseData(house) {
    return HouseData[house];
  }
  
}

export default HouseService;