import {combineReducers} from 'redux';
import testReducer from './testReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    testState: testReducer,
    searchResults: searchReducer
});

export default rootReducer;
