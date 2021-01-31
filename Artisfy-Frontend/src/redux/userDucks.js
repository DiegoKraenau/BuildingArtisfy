import axios from 'axios';
import swal from 'sweetalert2';



const initialData = {
    array: [],
    token: null,
    loged: false
}

const GET_USERS = "GET_USERS";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const VERIFY_USER = "VERIFY_USER";
const LOG_OUT = 'LOG_OUT'



export default function usersReducer(state = initialData, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                array: action.payload
            }
        case REGISTER_USER:
            return {
                ...state,
                array: state.array.concat(action.payload)
            }
        case LOGIN_USER:
            return {
                ...state,
                token: action.payload,
                loged: true
            }
        case VERIFY_USER:
            return {
                ...state,
                token: action.payload,
                loged: true
            }
        case LOG_OUT:
            return {
                ...state,
                token: null,
                loged: false
            }

        default:
            return state;
    }
}


export const getUsersAction = () => async (distpach, getState) => {
    console.log("GGGGGGGGGGGGGGGGGG")
    try {
        const res = await axios.get('http://localhost:5000/api/students')
        distpach({
            type: GET_USERS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const registerUserAction = (user) => async (distpach, getState) => {
    try {
        const res = await axios.post('http://localhost:5000/api/students', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            swal("Registration successfully", "User registered", "success")
        ).catch(err => console.log(err));
        distpach({
            type: REGISTER_USER,
            payload: res.data
        })
    } catch (error) {

    }
}

export const loginAction = (user) => async (distpach, getState) => {
    try {
        await axios.post('http://localhost:5000/api/students/login', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.data.token) {
                swal.fire("Login Successfully", "", "success")
                distpach({
                    type: LOGIN_USER,
                    payload: response.data.token
                })
                localStorage.setItem('jwtToken', response.data.token);
                //Test Jwt
                //console.log(jwt_decode(response.data.token))
                //var dateString = moment.unix(jwt_decode(response.data.token).expiredAt).format("DD/MM/YYYY hh:mm:ss");
                //var dateStringg = moment.unix(jwt_decode(response.data.token).createdAt).format("DD/MM/YYYY hh:mm:ss");
                //console.log(dateStringg)
                //console.log(dateString)

            } else {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'User incorrect!',
                })
            }
        }
        ).catch(err => console.log(err));



    } catch (error) {
        console.log(error)
    }

}

export const verifyUser = (user) => async (distpach, getState) => {
    try {
        await axios.post('http://localhost:5000/api/students/verifyUser', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            response => {
                if (response.data.token) {
                    swal.fire("Login Successfully", "", "success")
                    distpach({
                        type: VERIFY_USER,
                        payload: response.data.token
                    })
                    localStorage.setItem('jwtToken', response.data.token);

                } else {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'User incorrect!',
                    })
                }
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const logOut = () => (distpach, getState) => {
    localStorage.removeItem('jwtToken')
    distpach({
        type: LOG_OUT
    })
}