import { CHI_TIET_PHIM_REQUEST, CHI_TIET_PHIM_SUCCESS, CHI_TIET_PHIM_FAIL, LICH_CHIEU_PHIM_REQUEST, LICH_CHIEU_PHIM_SUCCESS, LICH_CHIEU_PHIM_FAIL } from "./constants";
import api from "../../../../utils/apiUtil";

export const actFetchChiTietPhim = (id) => {
    return (dispatch) => {
        //pending
        dispatch(actChiTietPhimRequest())

        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((res) => {
                if (res.data.statusCode === 200) {
                    dispatch(actChiTietPhimSuccess(res.data.content));
                }
            })
            .catch((error) => {
                dispatch(actChiTietPhimFail(error));
            });
    };
};
const actChiTietPhimRequest = () => {
    return {
        type: CHI_TIET_PHIM_REQUEST
    };
};

const actChiTietPhimSuccess = (data) => {
    return {
        type: CHI_TIET_PHIM_SUCCESS,
        payload: data,
    };
};

const actChiTietPhimFail = (error) => {
    return {
        type: CHI_TIET_PHIM_FAIL,
        payload: error,
    };
};

export const actFetchLichChieuPhim = (id) => {
    return (dispatch) => {
        //pending
        dispatch(actLichChieuPhimRequest())

        api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
            .then((res) => {
                if (res.data.statusCode === 200) {
                    dispatch(actLichChieuPhimSuccess(res.data.content));
                }
            })
            .catch((error) => {
                dispatch(actLichChieuPhimFail(error));
            });
    };
};
const actLichChieuPhimRequest = () => {
    return {
        type: LICH_CHIEU_PHIM_REQUEST
    };
};

const actLichChieuPhimSuccess = (data) => {
    return {
        type: LICH_CHIEU_PHIM_SUCCESS,
        payload: data,
    };
};

const actLichChieuPhimFail = (error) => {
    return {
        type: LICH_CHIEU_PHIM_FAIL,
        payload: error,
    };
};