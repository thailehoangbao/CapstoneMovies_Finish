import {GET_HE_THONG_RAP_FAIL,GET_HE_THONG_RAP_REQUEST,GET_HE_THONG_RAP_SUCCESS,GET_CUM_RAP_THEO_HE_THONG_FAIL,GET_CUM_RAP_THEO_HE_THONG_REQUEST,GET_CUM_RAP_THEO_HE_THONG_SUCCESS,POST_TAO_LICH_CHIEU_FAIL,POST_TAO_LICH_CHIEU_REQUEST,POST_TAO_LICH_CHIEU_SUCCESS} from './_constantsShowTime';
import api from '../../../../utils/apiUtil';

export const actFetchHeThongRapShowTime = (maPhim) => {
    return (dispatch) => {
        dispatch(actHeThongRapRequest());

        api
            .get(`QuanLyRap/LayThongTinHeThongRap`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actHeThongRapSuccess(result.data.content));
                }
            })
            .catch(error => {
                dispatch(actHeThongRapFail(error));
            })
    }
}


const actHeThongRapRequest = () => {
    return {
        type: GET_HE_THONG_RAP_REQUEST
    }
}

const actHeThongRapSuccess = (data) => {
    return {
        type: GET_HE_THONG_RAP_SUCCESS,
        payload: data
    }
}

const actHeThongRapFail = (error) => {
    return {
        type: GET_HE_THONG_RAP_FAIL,
        payload: error
    }
}

export const actFetchCumRapTheoHeThongShowTime = (maHeThongRap) => {
    return (dispatch) => {
        dispatch(actCumRapTheoHeThongRequest());

        api
            .get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actCumRapTheoHeThongSuccess(result.data.content));
                    console.log(result.data.content);
                }
            })
            .catch(error => {
                dispatch(actCumRapTheoHeThongFail(error));
            })
    }
}


const actCumRapTheoHeThongRequest = () => {
    return {
        type: GET_CUM_RAP_THEO_HE_THONG_REQUEST
    }
}

const actCumRapTheoHeThongSuccess = (data) => {
    return {
        type: GET_CUM_RAP_THEO_HE_THONG_SUCCESS,
        payload: data
    }
}

const actCumRapTheoHeThongFail = (error) => {
    return {
        type: GET_CUM_RAP_THEO_HE_THONG_FAIL,
        payload: error
    }
}


export const actFetchTaoLichChieuShowTime = (lichChieu) => {
    return (dispatch) => {
        dispatch(actTaoLichChieuRequest());

        api
            .post(`QuanLyDatVe/TaoLichChieu`,lichChieu)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actTaoLichChieuSuccess(result.data.content));
                    console.log(result.data.content);
                }
            })
            .catch(error => {
                dispatch(actTaoLichChieuFail(error));
            })
    }
}


const actTaoLichChieuRequest = () => {
    return {
        type:POST_TAO_LICH_CHIEU_REQUEST
    }
}

const actTaoLichChieuSuccess = (data) => {
    return {
        type: POST_TAO_LICH_CHIEU_SUCCESS,
        payload: data
    }
}

const actTaoLichChieuFail = (error) => {
    return {
        type: POST_TAO_LICH_CHIEU_FAIL,
        payload: error
    }
}