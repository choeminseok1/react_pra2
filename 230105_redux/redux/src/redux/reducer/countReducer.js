let initialState = {
    count : 0
}
const counterReducer = (state = initialState,action)=>{
    let {type,payload} = action
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