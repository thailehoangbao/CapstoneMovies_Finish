import { DANH_SACH_RAP_REQUEST, DANH_SACH_RAP_SUCCESS, DANH_SACH_RAP_FAIL } from "./constants";
import api from "../../../../../utils/apiUtil";

export const actFetchDanhSachRap = () => {
    return (dispatch) => {
        dispatch(actDanhSachRapRequest());
        api
        .get("QuanLyRap/LayThongTinHeThongRap")
        .then((res) => {
            if(res.data.statusCode === 200) {
                dispatch(actDanhSachRapSuccess(res.data.content));
            }
        })
        .catch((error) => {
            dispatch(actDanhSachRapFail(error));
        })
    }
};

const actDanhSachRapRequest = () => {
    return {
        type: DANH_SACH_RAP_REQUEST,
    };
};

const actDanhSachRapSuccess = (data) => {
    return {
        type: DANH_SACH_RAP_SUCCESS,
        payload: data,
    };
};

const actDanhSachRapFail = (error) => {
    return {
        type: DANH_SACH_RAP_FAIL,
        payload: error,
    };
};