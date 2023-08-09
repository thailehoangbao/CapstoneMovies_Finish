import {GET_HE_THONG_RAP_FAIL,GET_HE_THONG_RAP_REQUEST,GET_HE_THONG_RAP_SUCCESS,POST_TAO_LICH_CHIEU_FAIL,POST_TAO_LICH_CHIEU_REQUEST,POST_TAO_LICH_CHIEU_SUCCESS} from './_constantsShowTime';
import {GET_CUM_RAP_THEO_HE_THONG_FAIL,GET_CUM_RAP_THEO_HE_THONG_REQUEST,GET_CUM_RAP_THEO_HE_THONG_SUCCESS} from './_constantsShowTime';

const initialState = {
    loading: false,
    heThongRap: null,
    error: null,
    cumRapTheoHeThong: null,
    thongTinLichChieu: null,
}

const heThongRapShowTimeReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_HE_THONG_RAP_FAIL: {
            state.loading = false;
            state.heThongRap = null;
            state.error = true;

            return { ...state }
        }
        case GET_HE_THONG_RAP_SUCCESS: {

            state.loading = false;
            state.heThongRap = action.payload;
            state.error = null;

            return { ...state }
        }

        case GET_HE_THONG_RAP_REQUEST: {
            state.loading = true;
            state.heThongRap = null;
            state.error = null;

            return { ...state }
        }
        

        case GET_CUM_RAP_THEO_HE_THONG_FAIL: {
            state.loading = false;
            state.cumRapTheoHeThong = null;
            state.error = true;

            return { ...state }
        }
        case GET_CUM_RAP_THEO_HE_THONG_SUCCESS: {

            state.loading = false;
            state.cumRapTheoHeThong = action.payload;
            state.error = null;

            return { ...state }
        }

        case GET_CUM_RAP_THEO_HE_THONG_REQUEST: {
            state.loading = true;
            state.cumRapTheoHeThong = null;
            state.error = null;

            return { ...state }
        }

        case POST_TAO_LICH_CHIEU_FAIL: {
            state.loading = false;
            state.thongTinLichChieu = null;
            state.error = true;

            return { ...state }
        }
        
        case POST_TAO_LICH_CHIEU_SUCCESS: {

            state.loading = false;
            state.thongTinLichChieu = action.payload;
            state.error = null;

            return { ...state }
        }

        case POST_TAO_LICH_CHIEU_REQUEST: {
            state.loading = true;
            state.thongTinLichChieu = null;
            state.error = null;

            return { ...state }
        }

        default:
            return state
    }
}
export default heThongRapShowTimeReducer;