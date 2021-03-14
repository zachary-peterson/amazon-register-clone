import {
    SET_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_CPASSWORD
} from '../actions';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NAME: 
            return {
                ...state,
                name: action.payload
            };
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case SET_CPASSWORD:
            return{
                ...state,
                confirmPassword: action.payload
            };
        default:
            return state;
    };
};