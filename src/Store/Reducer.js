const initialState ={
    message : 'Would you like to join our team at Ironhack?'
}

const reducer =(state = initialState, action) => {
    const newState ={...state}
    if(action.type === "message_change"){
        newState.message = 'Thanks for joining us!'
    }
    return newState
}

export default reducer