import { BANNER_REQUEST, BANNER_SUCCESS, BANNER_FAIL } from "./constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BANNER_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state };

        case BANNER_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state };

        case BANNER_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;

            return { ...state };
        default:
            return { ...state };
    }
};

export default bannerReducer;