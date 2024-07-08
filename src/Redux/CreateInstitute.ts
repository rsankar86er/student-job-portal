import { createSlice } from '@reduxjs/toolkit';
import { CREATE_INSTITUTE } from '../Constants/Constants';

export const createInstitute = createSlice({ 
    name: 'createinsitute', 
    initialState: {
        institute: CREATE_INSTITUTE,
        alert:false,
        alertmessage:'',
        alerttype:'',
    },
    reducers: {
        setInstitute: (state:any, action) => {
            state.institute = action.payload;
        },
        setAlert: (state:any, action) => {
            state.alert = action.payload;
        },
        setAlertmeesage: (state:any, action) => {
            state.alertmessage = action.payload;
        },
        setAlerttype: (state:any, action) => {
            state.alerttype = action.payload;
        },
    }
});

export const { setInstitute, setAlert, setAlertmeesage, setAlerttype } = createInstitute.actions;
export default createInstitute.reducer; 