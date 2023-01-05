function countUp (a){
    return (dispatch)=>{
        dispatch({
            type:'COUNT_PLUS',
            payload:a
        })
    }
}
function countDown (){
    return (dispatch)=>{
        dispatch({
            type:'COUNT_MINUS',
            payload:1
        })
    }
}

export const countAction = {
    countUp,
    countDown
}