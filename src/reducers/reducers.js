import {combineReducers} from 'redux';
import housesReducer from './housesReducer';
import spellsReducer from './spellsReducer';

export default combineReducers({
    houses: housesReducer,
    spells: spellsReducer
});
