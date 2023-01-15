import { applyMiddleware, createStore } from "redux";
import rootReducer from './reducer'
// 위의 rootReducer는 임의로 정한 이름임. 원래이름 reducer의 index
import thunk from 'redux-thunk'
let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store