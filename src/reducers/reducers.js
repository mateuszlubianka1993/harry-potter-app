import {combineReducers} from 'redux';
import housesReducer from './housesReducer';
import spellsReducer from './spellsReducer';
import charactersReducer from './charactersReducer';

export default combineReducers({
    houses: housesReducer,
    spells: spellsReducer,
    characters: charactersReducer
});
