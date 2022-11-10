import axios from "axios";
import {getList} from "../UsersSlice";


export const fetchUserList = () => {
    return function (dispatch){
        axios.get("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
            .then(response => {
                console.log(response.data)
                return dispatch(getList(response.data))
            })
            .catch(error => console.log(error))
    }
}

