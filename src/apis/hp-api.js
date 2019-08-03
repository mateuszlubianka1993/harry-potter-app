import axios from 'axios';

// https://hp-api.herokuapp.com/
export default axios.create({
    baseURL: 'http://hp-api.herokuapp.com/api'
});
