import {ADD_FILM_ADMIN_FAIL,ADD_FILM_ADMIN_REQUSET,ADD_FILM_ADMIN_SUCCESS} from './_constantsAddFilm';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const addFilmAdminReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FILM_ADMIN_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;

            return { ...state }
        }
        case ADD_FILM_ADMIN_SUCCESS: {

            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case ADD_FILM_ADMIN_REQUSET: {
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state }
        }
        
        default:
            return state
    }
}
export default addFilmAdminReducer;