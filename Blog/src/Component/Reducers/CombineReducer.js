import { combineReducers } from 'redux';
import { GET_BLOGS } from '../Action/ActionType'

const lineReducer = (state, action) => {
    switch (action.type) {
        case GET_BLOGS:
            console.log("here");
            console.log(action);
            return action.payload;
        default:
            return null;
    }
}
export default combineReducers({
    blogs: lineReducer
});