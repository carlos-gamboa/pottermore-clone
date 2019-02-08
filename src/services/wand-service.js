import WandData from '../assets/data/wand.json';
import WandQuestions from '../assets/data/wand-questions.json';

class WandService {
  
  /**
   * Gets all the questions for the wand quiz.
   *
   * @returns Array of questions.
   */
  getWandQuestions() {
    return WandQuestions.questions;
  }

  /**
   * Gets the core of the wand based on the scored points.
   *
   * @param {number} points
   * @returns Name of the wand's core
   */
  getWandCore(points) {
    const coreIndex = points % Object.keys(WandData.core).length;
    return Object.keys(WandData.core)[coreIndex];
  }

  /**
   * Gets the wood of the wand based on the scored points.
   *
   * @param {number} points
   * @returns Name of the wand's wood.
   */
  getWandWood(points) {
    const woodIndex = points % Object.keys(WandData.core).length;
    return Object.keys(WandData.wood)[woodIndex];
  }

  /**
   * Gets the information about a specific wand core.
   *
   * @param {string} core Name of the wand's core.
   * @returns Object with the core's information
   */
  getWandCoreInfo(core) {
    return WandData.core[core];
  }

  /**
   * Gets the information about a specific wand wood.
   *
   * @param {string} wood Name of the wand's wood.
   * @returns Object with the wood's information
   */
  getWandWoodInfo(wood) {
    return WandData.wood[wood];
  }
  
}

export default WandService;