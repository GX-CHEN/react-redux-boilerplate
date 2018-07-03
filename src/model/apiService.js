import axios from 'axios';

/**
 * place all the service calls in this model folder.
 * If it's a small app (within 10 calls), it's OK to put them in a single file. If there are many calls, better to place in separate files
 */

const BASE_URL = 'https://api.giphy.com/v1/gifs/trending';
const API_KEY = 'f30RsH8N2igFVgyuE3KBH3t0RjzzkWne';

/**
 * search trending do not require any passed in argument, it simply get the lastest trending images from giphy
 * @returns {Array} - An array of giphy gif images json data will be returned from the API call
 */
export function searchImageService() {
  return axios.get(`${BASE_URL}?api_key=${API_KEY}&limit=10`).then(function(res) {
    if (res.status !== 200) throw new Error('bad response from server' + res.status);
    return res.data;
  });
}
