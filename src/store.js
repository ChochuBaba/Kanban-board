import {configureStore} from '@reduxjs/toolkit';
import { FetchDataReducer } from './Reducers/FetchDataReducer';
import { SelectDataReducer } from './Reducers/SelectDataReducer';

//COMBINING ALL THE REDUCERS IN A SINGLE ONE WHICH HELPS US ACCESS A PART OF THE STATE ASSOCIATED WITH A REDUCER
const store = configureStore({
    reducer : {
        FetchDataReducer,SelectDataReducer
    }
})

export default store;   