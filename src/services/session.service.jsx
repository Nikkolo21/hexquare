import Axios from "axios";
import { getItem } from "../utils/localstorage";

export function login(email, password, callback) {
    fetch('http://192.168.1.111:8000/session/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then((response) => {
        return response.json();
    }).then(callback)
};

export function signup(name, last_name, email, password, callback) {
    fetch('http://192.168.1.111:8000/session/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name, last_name, email, password})
    }).then((response) => {
        return response.json();
    }).then(callback)
};

export function verifySession(body={}, callback) {
    Axios.post(
        'http://192.168.1.111:8000/session/verify',
        body,
        {
            ContentType: 'application/json',
            Accept: 'application/json',
            headers: {
                Authorization: `Bearer ${getItem('tkn')}`
            }
        }
    ).then(({data = null}) => {
        return data;
    }).then(callback);
};
