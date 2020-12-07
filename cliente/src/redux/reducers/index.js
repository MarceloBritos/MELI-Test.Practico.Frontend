import {combineReducers} from 'redux';
import list from './listReducer';
import item from './itemReducer';

export default combineReducers({
    list,
    item,
});
