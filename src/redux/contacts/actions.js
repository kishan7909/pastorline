import { GetContactsAPI } from "../../apis/contacts";
import _uniqBy from 'lodash/uniqBy'

export const GET_CONTACTS = 'GET_CONTACTS'
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
export const GET_CONTACTS_ERROR = 'GET_CONTACTS_ERROR'
export const SET_CONTACTS_STATE = 'SET_CONTACTS_STATE'

export const GetContacts = (companyId, page, countryId = "", query = "") => async (dispatch) => {
    dispatch({ type: SET_CONTACTS_STATE, payload: { contactsLoading: true } });
    try {
        let urlParams = "";
        if (companyId) {
            urlParams += `companyId=${companyId}`
        }
        if (page) {
            urlParams += `&page=${page}`
        }
        if (countryId) {
            urlParams += `&countryId=${countryId}`
        }
        if (query) {
            urlParams += `&query=${query}`
        }

        console.info('----------------------------');
        console.info('urlParams =>', urlParams);
        console.info('----------------------------');

        const resp = await GetContactsAPI(urlParams);
        if (resp?.data) {

            let contactsList = resp?.data.contacts;
            let contactsDataList = resp?.data.contacts_ids.map(item => {
                if (contactsList[item]) {
                    return contactsList[item]
                }
            });

            dispatch({ type: SET_CONTACTS_STATE, payload: { contacts: contactsDataList, contacts_ids: resp?.data.contacts_ids, totalContacts: resp?.data.total, contactsLoading: false } });
        }
    } catch (err) {
        console.info('----------------------------');
        console.info('err =>', err);
        console.info('----------------------------');
        // const error = err?.response?.data;
        // toast.error(
        //     error?.message || "Something went wrong. Please try again later"
        // );
        // dispatch({ type: USER_ERROR, pyaload: { error } });
        // return { isSuccess: false, error: err, data: null };
    }
};
