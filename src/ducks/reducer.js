// import axios from 'axios'
const GET_USERID = 'GET_USERID'
const GET_USERNAME = 'GET_USERNAME'
const GET_PROFILEPICTURE = 'GET_PROFILEPICTURE'

let initialState = {
    userName: '',
    id: '',
    profilePicture: '',

}

export default function reducer(state = initialState, action) {
    switch (action.type){
        case GET_USERID:
        default: 
        return state;
    }
}