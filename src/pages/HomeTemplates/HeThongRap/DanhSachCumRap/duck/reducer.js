import { DANH_SACH_CUM_RAP_REQUEST, DANH_SACH_CUM_RAP_SUCCESS, DANH_SACH_CUM_RAP_FAIL } from "./constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const danhSachCumRapReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANH_SACH_CUM_RAP_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case DANH_SACH_CUM_RAP_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case DANH_SACH_CUM_RAP_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }
    
        default:
            return { ...state };
    }
}

export default danhSachCumRapReducer;