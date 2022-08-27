import axios from 'axios';
const KEY = "AIzaSyB3jnWak1E24DHzzPlF7xRfQ6S4ydkeABg"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});