import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';

export default combineReducers({
    countInStore: counterReducer,
    postInStore: counterReducer
})