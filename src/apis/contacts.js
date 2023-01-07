import apiCall from "../utility/apiCall";


export const contactsApiRoutes = {
    GET_CONTACTS: "/contacts.json",
};

export const GetContactsAPI = async (payload) => {
    return await apiCall.get(`${contactsApiRoutes.GET_CONTACTS}?${payload}`);
};
