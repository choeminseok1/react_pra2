function call(a) {
    return async (dispatch)=> {
        let url = `https://jsonplaceholder.typicode.com/users/${a}`

        let res = await fetch(url)
        let data = await res.json()
        // console.log(data)
        dispatch({
            type:"USER_LIST",
            payload: data
        })

    }
    // async , await < 검색해볼것
}

export const userAction = {
    call
}
