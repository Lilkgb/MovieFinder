import {combineReducers} from 'redux';
import testReducer from './testReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    testState: testReducer,
    searchState: searchReducer
});

export default rootReducer;
