let initialState = {
    list: []
}

const shopReducer = (state = initialState,action)=> {
    let {type,payload} = action

    switch(type) {
        case "SHOP_ITEM":
            console.log(payload)
            return {
                ...state,
                list: payload
            }
            default : return {...state}
    }
}

export default shopReducer