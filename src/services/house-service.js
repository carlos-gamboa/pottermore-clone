import HouseData from '../assets/data/house.json';
import HouseQuestions from '../assets/data/house-questions.json';

class HouseService {
  
  getHouseQuestions() {
    return HouseQuestions.questions;
  }

  getHouseData(house) {
    return HouseData[house];
  }
  
}

export default HouseService;