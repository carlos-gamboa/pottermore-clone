import Environment from '../env';

class DataService {
  apiUrl = 'https://www.potterapi.com/v1/';

  /**
   * Generates the headers for the requests
   *
   * @returns Headers
   */
  getCustomHeaders = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  /**
   * Call to the API to get all the spells.
   *
   * @returns Promise with the API response.
   */
  getAllSpells = () => {
    const config = { 
      method: 'GET',
      headers: this.getCustomHeaders(),
      mode: 'cors',
      cache: 'default'
    };

    return fetch(`${this.apiUrl}spells?key=${Environment.API_KEY}`, config);
  }

  /**
   * Call to the API to get all the characters.
   *
   * @param {string} house Hogwarts house of the characters
   * @returns Promise with the API response.
   */
  getCharactersByHouse = (house) => {
    const config = { 
      method: 'GET',
      headers: this.getCustomHeaders(),
      mode: 'cors',
      cache: 'default'
    };

    return fetch(`${this.apiUrl}characters?key=${Environment.API_KEY}&house=${house}`, config);
  }
}

export default DataService;