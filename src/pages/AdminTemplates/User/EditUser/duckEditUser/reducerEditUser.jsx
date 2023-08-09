import {PUT_EDIT_USER_FAIL,PUT_EDIT_USER_REQUEST,PUT_EDIT_USER_SUCCESS} from './_constantsEditUser';
const initialState = {
    loading: false,
    data: null,
    error: null,
};

const editUserReducer =  (state = initialState, action) => {
    switch (action.type) {
        case PUT_EDIT_USER_REQUEST:
            {
                state.loading = true;
                state.data = null;
                state.error = null;
                return { ...state }
            }
        case PUT_EDIT_USER_SUCCESS:

            {   
                state.loading = false;
                state.data = action.payload;
                state.error = null;
                return { ...state }
            }
        case PUT_EDIT_USER_FAIL:
            {
                state.loading = false;
                state.data = null;
                state.error = action.payload;
                return { ...state }
            }

        default:
            return state
    }
}

export default editUserReducer;
