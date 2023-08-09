import {DASHBOARD_REQUSET,DASHBOARD_FAIL,DASHBOARD_SUCCESS, DELETE_FILM_DASHBOARD_FAIL,DELETE_FILM_DASHBOARD_REQUEST,DELETE_FILM_DASHBOARD_SUCCESS} from './_constantsDashboard';
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {

        case DASHBOARD_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;

            return { ...state }
        }
        case DASHBOARD_SUCCESS: {

            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case DASHBOARD_REQUSET: {
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state }
        }


        case DELETE_FILM_DASHBOARD_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = true;

            return { ...state }
        }
        case DELETE_FILM_DASHBOARD_SUCCESS: {

            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case DELETE_FILM_DASHBOARD_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state }
        }

        default:
            return state
    }
}
export default dashboardReducer;