import { combineReducers } from 'redux';

const lineReducer = (state, action) => {
    switch (action.type) {
        case 'GET_BLOG':
            return null;
        default:
            return null;
    }
}
export default combineReducers({
    blogs: lineReducer
});