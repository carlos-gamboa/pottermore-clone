import SpellData from '../assets/data/spells.json';

class SpellService {
  
  getSpells() {
    return SpellData.spells;
  }
  
}

export default SpellService;