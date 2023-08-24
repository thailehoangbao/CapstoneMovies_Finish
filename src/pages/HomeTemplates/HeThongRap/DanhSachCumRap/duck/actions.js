import { DANH_SACH_CUM_RAP_REQUEST, DANH_SACH_CUM_RAP_SUCCESS, DANH_SACH_CUM_RAP_FAIL } from "./constants";
import api from "../../../../../utils/apiUtil";

export const actFetchDanhSachCumRap = (cumRap) => {
    return (dispatch) => {
        dispatch(actDanhSachCumRapRequest());
        api
        .get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
        .then((res) => {
            if(res.data.statusCode === 200) {
                dispatch(actDanhSachCumRapSuccess(res.data.content));
            }
        })
        .catch((error) => {
            dispatch(actDanhSachCumRapFail(error));
        })
    }
};

const actDanhSachCumRapRequest = () => {
    return {
        type: DANH_SACH_CUM_RAP_REQUEST,
    };
};

const actDanhSachCumRapSuccess = (data) => {
    return {
        type: DANH_SACH_CUM_RAP_SUCCESS,
        payload: data,
    };
};

const actDanhSachCumRapFail = (error) => {
    return {
        type: DANH_SACH_CUM_RAP_FAIL,
        payload: error,
    };
};