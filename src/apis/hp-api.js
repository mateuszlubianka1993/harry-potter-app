import axios from 'axios';

// https://hp-api.herokuapp.com/
export default axios.create({
    baseURL: 'https://hp-api.herokuapp.com/api'
});
