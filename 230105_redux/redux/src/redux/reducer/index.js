import { combineReducers } from 'redux';
import counterReducer from './countReducer';
import userReducer from './userReducer';

export default combineReducers({
    count: counterReducer,
    user: userReducer
    //count = initialState
})

// export default로 갖고오는 친구는 받아오는곳에서 이름을 임의로 지정할 수 있다.