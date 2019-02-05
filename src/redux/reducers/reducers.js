import Actions from '../actions/actions';

const INITIAL_STATE = {
  house: '',
  patronus: '',
  wand: ''
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