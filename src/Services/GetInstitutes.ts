import { API_URL } from '../Constants/Constants';
import axios from 'axios';

export const GetInstitutes = async () => {
    try {
        const response = await axios.get(`${API_URL}institute`);
        return response;
    } catch(error) {
        console.log(error);
    }
}