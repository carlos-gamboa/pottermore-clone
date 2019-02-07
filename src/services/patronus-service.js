import PatronusData from '../assets/data/patronus.json';
import PatronusQuestions from '../assets/data/patronus-questions.json';

class PatronusService {
  
  getPatronusQuestions() {
    return PatronusQuestions.questions;
  }

  getPatronus(points) {
    const patronusIndex = points % PatronusData.patronus.length;
    return PatronusData.patronus[patronusIndex];
  }
  
}

export default PatronusService;