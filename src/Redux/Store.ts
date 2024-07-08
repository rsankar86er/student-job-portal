import { configureStore } from '@reduxjs/toolkit'
import createInstitute from './CreateInstitute';
export const store =  configureStore({ 
    reducer: {
        createInstitute: createInstitute,
    }
});