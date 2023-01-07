import { SET_CONTACTS_STATE } from "./actions";


const initialState = {
    contactsLoading: false,
    contacts: [],
    contacts_ids: [],
    totalContacts: 0,
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CONTACTS_STATE:
            return { ...state, ...payload };

        default:
            return state;
    }
};
