let initialState = {
    list : []
}

const userReducer = (state = initialState,action)=> {
    let {type,payload} = action

    switch(type) {
        case "USER_LIST":
            // console.log(payload)
            return {
                ...state,
                list: payload
                
            }
            default : return {...state}
    }
}

export default userReducer