import { combineReducers } from 'redux';
import counterReducer from './countReducer'
export default combineReducers({
    count: counterReducer
})

// export default로 갖고오는 친구는 받아오는곳에서 이름을 임의로 지정할 수 있다.