
const initialState = {
    isUserLoggedIn:false,  
    user: {},
    currentUserData:[],
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isUserLoggedIn:true,  
                user:action.payload,
            }
            case 'SIGN_UP':
                return{
                    ...state,
                    isUserLoggedIn:true,
                    user:action.payload,
                }
                case 'LOGOUT':
                    return{
                    isUserLoggedIn:false,
                    user:null,  
                }
            case 'GET_USER_ON_AUTH_STATE_CHANGED':
                return{
                ...state,
                isUserLoggedIn:true,  
                user:action.payload,
            }
          
            case 'GET_CURRENT_USER_DATA':
                return{
                    ...state,
                    currentUserData:action.payload,
                }
               
        default:
            return state;
    }
}

export default AuthReducer;