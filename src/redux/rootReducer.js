import { combineReducers } from "redux";
import contactsReducer from './contacts/reducer';

export const rootReducer = combineReducers({
    contacts: contactsReducer
})