import { DANG_KY_REQUEST, DANG_KY_SUCCESS, DANG_KY_FAIL } from "./constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const dangKyReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_KY_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };

        case DANG_KY_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };

        case DANG_KY_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };

        default:
            return { ...state };
    }
};

export default dangKyReducer;