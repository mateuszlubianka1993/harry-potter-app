import axios from 'axios';

// https://www.potterapi.com/
export default axios.create({
    baseURL: 'https://www.potterapi.com/v1'
});
