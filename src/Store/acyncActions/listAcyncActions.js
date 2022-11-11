import axios from "axios";
import {getList, load} from "../UsersSlice";
import {useDispatch} from "react-redux";


export const fetchUserList = () => {
    return function (dispatch){
        dispatch(load(true))
        axios.get("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
            .then(response => {
                dispatch(load(false))
                return dispatch(getList(response.data))
            })
            .catch(error => console.log(error))
    }
}

