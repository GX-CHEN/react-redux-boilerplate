import axios from 'axios';

// place all the service calls in this model folder.
// If it's a small app (within 10 calls), it's OK to put them in a single file. If there are many calls, better to place in seprate files

export function searchImageService() {
  return axios
    .get(`https://en.wikipedia.org/w/api.php?action=query&titles=Albert Einstein&prop=images&format=json&origin=*`)
    .then(function(res) {
      if (res.status !== 200) throw new Error('bad response from server' + res.status);
      return res.data;
    });
}
