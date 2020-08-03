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
    ).then(({data}) => {
        return data;
    }).then(callback);
};

export function getProjectsByUserID(id, callback) {
    fetch(`http://192.168.1.111:8000/project/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `${getItem('tkn')}`
        }
    }).then(response => {
        return response.json();
    }).then(callback)
}
