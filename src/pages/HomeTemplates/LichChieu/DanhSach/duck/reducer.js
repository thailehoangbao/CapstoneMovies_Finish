import { DANH_SACH_REQUEST, DANH_SACH_SUCCESS, DANH_SACH_FAIL } from "./constants";

const initialState = {
    loading: false,
    data: [],
    error: null,
};

const danhSachReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANH_SACH_REQUEST: {
            state.loading = true;
            state.data = [];
            state.error = null;
            return { ...state };
        }

        case DANH_SACH_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }
        case DANH_SACH_FAIL: {
            state.loading = false;
            state.data = [];
            state.error = action.payload;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default danhSachReducer;