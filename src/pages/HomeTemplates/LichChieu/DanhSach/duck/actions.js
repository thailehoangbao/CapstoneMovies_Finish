import { DANH_SACH_REQUEST, DANH_SACH_SUCCESS, DANH_SACH_FAIL } from "./constants"; 
import api from "../../../../../utils/apiUtil";

export const actFetchDanhSach = () => {
    return (dispatch) => {
        dispatch(actDanhSachRequest());
        api
        .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP11")
            .then((res) => {
                if (res.data.statusCode === 200) {
                    dispatch(actDanhSachSuccess(res.data.content));
                }
            })
            .catch((error) => {
                dispatch(actDanhSachFail(error));
            })
    }
};

const actDanhSachRequest = () => {
    return {
        type: DANH_SACH_REQUEST,
    };
};

const actDanhSachSuccess = (data) => {
    return {
        type: DANH_SACH_SUCCESS,
        payload: data,
    };
};

const actDanhSachFail = (error) => {
    return {
        type: DANH_SACH_FAIL,
        payload: error,
    };
};