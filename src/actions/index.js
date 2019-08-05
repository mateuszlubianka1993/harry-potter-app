import harryPAPI from '../apis/harryPAPI';
import hp_api from '../apis/hp-api';

const api_key = '$2a$10$Qkw7sVZaDU8vi0MG3NjK6upi.nIKVJrJ8UcQQtk8GG3WolbshN.M6';

export const getHouses = () => async dispatch => {
    const response = await harryPAPI.get('/houses', {
        params: {key: api_key}
    });
    const result = response.data;
    dispatch({type: 'GET_HOUSES', payload: result})
};
