import Actions from '../actions/actions';
import SpellData from '../../assets/data/spells.json';
import CharactersData from '../../assets/data/characters.json';

const INITIAL_STATE = {
  house: 'Ravenclaw',
  patronus: '',
  wand: '',
  spells: SpellData.spells,
  characters: CharactersData.characters
};


const PotterReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case Actions.SET_HOUSE:
    return Object.assign(
      {},
      state,
      {
        ...state,
        house: action.house
      }
    );

  case Actions.SET_PATRONUS:
    return Object.assign(
      {},
      state,
      {
        ...state,
        patronus: action.patronus
      }
    );

  case Actions.SET_WAND:
    return Object.assign(
      {},
      state,
      {
        ...state,
        wand: action.wand
      }
    );

  case Actions.SET_SPELLS:
    return Object.assign(
      {},
      state,
      {
        ...state,
        spells: action.spells
      }
    );

  default:
    return Object.assign(
      {},
      state,
      {
        ...state
      }
    );
  }
};

export default PotterReducer;