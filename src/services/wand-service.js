import WandData from '../assets/data/wand.json';
import WandQuestions from '../assets/data/wand-questions.json';

class WandService {
  
  getWandQuestions() {
    return WandQuestions.questions;
  }

  getWandCore(points) {
    const coreIndex = points % Object.keys(WandData.core).length;
    return Object.keys(WandData.core)[coreIndex];
  }

  getWandWood(points) {
    const woodIndex = points % Object.keys(WandData.core).length;
    return Object.keys(WandData.wood)[woodIndex];
  }

  getWandCoreInfo(core) {
    return WandData.core[core];
  }

  getWandWoodInfo(wood) {
    return WandData.wood[wood];
  }
  
}

export default WandService;