import { getItem } from "../utils/localstorage";
import Axios from "axios";

export function createProject(body, callback) {
    Axios.post(
        'http://192.168.1.111:8000/project',
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

export function getProject(id, callback) {
    Axios.get(
        `http://192.168.1.111:8000/${id}`,
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
}

export function getProjectsByUserID(id, callback) {
    Axios.get(
        `http://192.168.1.111:8000/project?user_id=${id}`,
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
}
