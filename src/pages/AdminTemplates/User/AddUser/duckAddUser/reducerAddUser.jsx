import { ADD_USER_ADMIN_FAIL,ADD_USER_ADMIN_REQUSET,ADD_USER_ADMIN_SUCCESS } from './_constantAddUser';
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const addUserReducer =  (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_ADMIN_REQUSET:
            {
                state.loading = true;
                state.data = null;
                state.error = null;
                return { ...state }
            }
        case ADD_USER_ADMIN_SUCCESS:

            {   
                state.loading = false;
                state.data = action.payload;
                state.error = null;
                return { ...state }
            }
        case ADD_USER_ADMIN_FAIL:
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

export default addUserReducer;
