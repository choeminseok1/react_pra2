function shopItem() {
    return async (dispatch)=> {
        let shopUrl = 'https://my-json-server.typicode.com/hongyungeun/react-router-practice/products'
        
        let response = await fetch(shopUrl)
        let data = await response.json()
        console.log(data)

        dispatch({
            type:"SHOP_ITEM",
            payload: data
        })
    }
}

export const shopAction = {
    shopItem
}