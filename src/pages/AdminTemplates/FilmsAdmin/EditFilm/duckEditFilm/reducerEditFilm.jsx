import {EDIT_FILM_ADMIN_FAIL,EDIT_FILM_ADMIN_REQUSET,EDIT_FILM_ADMIN_SUCCESS} from './_constantsEditFilm';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const editFilmAdminReducer = (state = initialState, action) => {
    switch (action.type) {

        case EDIT_FILM_ADMIN_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;

            return { ...state }
        }
        case EDIT_FILM_ADMIN_SUCCESS: {

            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case EDIT_FILM_ADMIN_REQUSET: {
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state }
        }
        
        default:
            return state
    }
}
export default editFilmAdminReducer;