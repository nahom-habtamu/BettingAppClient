export default (state=[], action) => {

    switch(action.type){
        case "GET_USERS" :
            if(action.payload){
                return [ 
                    ...state,
                    ...action.payload 
                ]
            }
            else {
                return state
            }
        case "ADD_USER" : 
            if(action.payload){
                return [ 
                    ...state,
                    action.payload 
                ]
            }
            else {
                return state
            }
        default : 
            return state;
    }

}