import Axios from "axios";
import { clear } from "../utils/localstorage";
Axios.interceptors.response.use(
    response => {
        if (response) {
            return response;
        }
    }, error => {
        if(error.response.status === 401) {
            window.location.replace('/login');
            clear();
        }
    }
)