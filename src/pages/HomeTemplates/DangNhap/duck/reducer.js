import { DANG_NHAP_REQUEST, DANG_NHAP_SUCCESS, DANG_NHAP_FAIL } from "./constants";

const initialState = {
    loading: false,
    data: null,
    error: null
}

const dangNhapReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_NHAP_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state };

        case DANG_NHAP_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state };

        case DANG_NHAP_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;

            return { ...state };
       
        default:
            return { ...state };
    }
};

export default dangNhapReducer;