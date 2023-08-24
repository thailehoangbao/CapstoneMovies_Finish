import { DAT_VE_REQUEST, DAT_VE_SUCCESS, DAT_VE_FAIL, CHON_GHE, DAT_VE } from "./constants";
import api from "../../../../utils/apiUtil";

export const actFetchDatVe = (id) => {
    return (dispatch) => {
        //pending
        dispatch(actDatVeRequest())

        api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
            .then((res) => {
                if (res.data.statusCode === 200) {
                    dispatch(actDatVeSuccess(res.data.content));
                }
            })
            .catch((error) => {
                dispatch(actDatVeFail(error));
            });
    };
};
const actDatVeRequest = () => {
    return {
        type: DAT_VE_REQUEST
    };
};

const actDatVeSuccess = (data) => {
    return {
        type: DAT_VE_SUCCESS,
        payload: data,
    };
};

const actDatVeFail = (error) => {
    return {
        type: DAT_VE_FAIL,
        payload: error,
    };
};

export const actChonGhe = (gheDangChon) => {
    return (dispatch) => {
        dispatch({
            type: CHON_GHE,
            payload: gheDangChon
        });
    }
};

export const actDatVe = (maLichChieu, danhSachGhe) => {
    return (dispatch) => {
        const request = {
            maLichChieu: maLichChieu,
            danhSachVe: danhSachGhe,
        }
        api.post("QuanLyDatVe/DatVe", request)
        .then((res) => {
            if(res.data.statusCode === 200) {
                dispatch({
                    type: DAT_VE,
                })
                dispatch(actFetchDatVe(maLichChieu));
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
};
