import {UPDATE_FILM_ADMIN_FAIL,UPDATE_FILM_ADMIN_REQUSET,UPDATE_FILM_ADMIN_SUCCESS} from './_constantsUpdateFilm';
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const updateFilmAdminReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_FILM_ADMIN_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;

            return { ...state }
        }
        case UPDATE_FILM_ADMIN_SUCCESS: {

            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case UPDATE_FILM_ADMIN_REQUSET: {
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state }
        }
        
        default:
            return state
    }
}
export default updateFilmAdminReducer;