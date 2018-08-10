import axios from 'axios'

const GET_USERID = 'GET_USERID'
const GET_USERID_FULFILLED = 'GET_USERID_FULFILLED'
const GET_USERNAME = 'GET_USERNAME'
const GET_USERNAME_FULFILLED = 'GET_USERNAME_FULFILLED'
const GET_PROFILEPICTURE = 'GET_PROFILEPICTURE'
const GET_PROFILEPICTURE_FULFILLED = 'GET_PROFILEPICTURE_FULFILLED'

let initialState = {
    userName: '',
    id: '',
    profile_pic: '',

}

export default function reducer(state = initialState, action) {
    switch (action.type){
        case GET_USERID_FULFILLED:
        return { ...state, id: action.payload}
        case GET_USERNAME_FULFILLED:
        return { ...state, name: action.payload}
        case GET_PROFILEPICTURE_FULFILLED:
        return { ...state, profilePicture: action.payload}
        default: 
        return state;
    }
}
export function getUserId (){
    return{
        type: GET_USERID,
        payload: axios.get('/api/userId')
    }
}
export function getUserName (){
    return {
        type: GET_USERNAME,
        payload: axios.get('/api/userName')
    }
}
export function getProfilePicture (){
    return{
        type: GET_PROFILEPICTURE,
        payload: axios.get('/api/profilePicture')
    }
}