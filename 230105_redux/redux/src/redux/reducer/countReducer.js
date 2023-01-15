let initialState = {
    count : 0
}
const counterReducer = (state = initialState,action)=>{
    let {type,payload} = action
    // 타입과 페이로드를 반복방지 하기위해 액션으로 통합
    switch (type) {
        case "COUNT_PLUS":
            return {
                ...state,
                count: state.count + payload
            }

        case "COUNT_MINUS":
            return{
                ...state,
                count: state.count - payload
            }

        default: return {...state}
            
    }
}
export default counterReducer