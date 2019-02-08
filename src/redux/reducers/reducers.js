import Actions from '../actions/actions';

const INITIAL_STATE = {
  user: '',
  showHeader: true,
  house: '',
  patronus: '',
  wand: null,
  spells: [],
  characters: [],
  houseData: {}
};

const setLocalData = (user, property, data) => {
  const newUserData = JSON.parse(localStorage.getItem(user));
  newUserData[property] = data;
  localStorage.setItem(user, JSON.stringify(newUserData));
};

const PotterReducer = (state = INITIAL_STATE, action) => {

  let userData;
  switch (action.type) {

  case Actions.SET_HOUSE:
    setLocalData(state.user, 'house', action.house);
    return Object.assign(
      {},
      state,
      {
        ...state,
        house: action.house
      }
    );

  case Actions.SET_PATRONUS:
    setLocalData(state.user, 'patronus', action.patronus);
    return Object.assign(
      {},
      state,
      {
        ...state,
        patronus: action.patronus
      }
    );

  case Actions.SET_WAND:
    setLocalData(state.user, 'wand', action.wand);
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

  case Actions.SET_SHOW_HEADER: {
    return Object.assign(
      {},
      state,
      {
        ...state,
        showHeader: action.showHeader
      }
    );
  }

  case Actions.SET_USER: {
    sessionStorage.setItem('user', action.user);
    userData = JSON.parse(localStorage.getItem(action.user));
    return Object.assign(
      {},
      state,
      {
        ...state,
        user: action.user,
        house: userData.house,
        patronus: userData.patronus,
        wand: userData.wand
      }
    );
  }

  case Actions.LOGOUT: {
    sessionStorage.removeItem('user');
    return Object.assign(
      {},
      state,
      {
        ...state,
        user: ''
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