import { CHI_TIET_PHIM_REQUEST, CHI_TIET_PHIM_SUCCESS, CHI_TIET_PHIM_FAIL, LICH_CHIEU_PHIM_REQUEST, LICH_CHIEU_PHIM_SUCCESS, LICH_CHIEU_PHIM_FAIL } from "./constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
    dataLC: null,
}

const chiTietPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHI_TIET_PHIM_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state };

        case CHI_TIET_PHIM_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state };

        case CHI_TIET_PHIM_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;

            return { ...state };

        case LICH_CHIEU_PHIM_REQUEST:
            state.loading = true;
            state.dataLC = null;
            state.error = null;

            return { ...state };

        case LICH_CHIEU_PHIM_SUCCESS:
            state.loading = false;
            state.dataLC = action.payload;
            state.error = null;

            return { ...state };

        case LICH_CHIEU_PHIM_FAIL:
            state.loading = false;
            state.dataLC = null;
            state.error = action.payload;

            return { ...state };
        default:
            return { ...state };
    }
};

export default chiTietPhimReducer;