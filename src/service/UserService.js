import axios from "axios";

export default class UserService
{
    login(data){
        return axios.post('http://localhost:8080/addressBookUser/loginUser',data)
    }

    registration(data){
        return axios.post('http://localhost:8080/addressBookUser/addUser',data)
    }
}