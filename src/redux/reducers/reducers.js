import Actions from '../actions/actions';

const INITIAL_STATE = {
  house: 'Slytherin',
  patronus: '',
  wand: null,
  spells: [],
  characters: [],
  houseData: {}
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

  case Actions.SET_CHARACTERS:
    return Object.assign(
      {},
      state,
      {
        ...state,
        characters: action.characters
      }
    );

  case Actions.SET_HOUSES:
    return Object.assign(
      {},
      state,
      {
        ...state,
        houses: action.houses
      }
    );

  case Actions.SET_HOUSE_DATA: {
    return Object.assign(
      {},
      state,
      {
        ...state,
        houseData: action.houseData
      }
    );
  }

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