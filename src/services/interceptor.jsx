import Axios from "axios";
import { clear } from "../utils/localstorage";
Axios.interceptors.response.use(
    response => {
        if (response) {
            return response;
        }
    }, error => {
        if(error.response.status === 401 || error.response.status === 403) {
            window.location.replace('/o/login');
            clear();
        }
    }
)