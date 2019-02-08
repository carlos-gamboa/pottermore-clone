import SpellData from '../assets/data/spells.json';

class SpellService {
  
  /**
   * Gets all of the spells
   *
   * @returns Array of spells
   */
  getSpells() {
    return SpellData.spells;
  }
  
}

export default SpellService;