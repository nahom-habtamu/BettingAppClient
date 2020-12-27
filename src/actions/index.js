// Adduser
// removeUser
// logUser


export const getUsersInitiate = () => {
    return {
        type : "GET_USERS_INITIATE"
    }
}

export const getUsers = (data) => {
    return {
        type : "GET_USERS",
        payload : data
    }
}

export const addUserInitiate = (formValues) => {
    return {
        type : "ADD_USER_INITIATE",
        payload : formValues
    }
}

export const addUser = (formValues) => {
    return {
        type : "ADD_USER",
        payload : formValues
    }
}


// BET ACTIONS 

export const getBetsInitiate = () => {
    return {
        type : "GET_BETS_INITIATE"
    }
}

export const getBets = (data) => {
    return {
        type : "GET_BETS",
        payload : data
    }
}

export const addBetInitiate = (formValues) => {
    return {
        type : "ADD_BET_INITIATE",
        payload : formValues
    }
}

export const addBet = (formValues) => {
    return {
        type : "ADD_BET",
        payload : formValues
    }
}
