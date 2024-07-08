import { API_URL } from '../Constants/Constants';
import axios from 'axios';
import { setAlert, setAlertmeesage, setAlerttype } from '../Redux/CreateInstitute';
import { store } from '../Redux/Store';

export const CreateInstitute = async (formdata:any) => {
    try {
        const response = await axios.post(`${API_URL}institute`,formdata);
        if(response.statusText === 'Created'){
            store.dispatch(setAlert(true));
            store.dispatch(setAlertmeesage('Institute has been successfully created please login to continue'));
            store.dispatch(setAlerttype('success'));
        }
    } catch(error) {
        console.log(error);
    }
}