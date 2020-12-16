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