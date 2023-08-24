import { BANNER_REQUEST, BANNER_SUCCESS, BANNER_FAIL } from "./constants";

import api from "../../../../../utils/apiUtil";

export const actFetchBanner = () => {
    return(dispatch) => {
        dispatch(actBannerRequest())

        api.get(`QuanLyPhim/LayDanhSachBanner`)
        .then((res) => {
            if(res.data.statusCode === 200) {
                dispatch(actBannerSuccess(res.data.content));
            }
        })
        .catch((error) => {
            dispatch(actBannerFail(error));
        });
    };
};
const actBannerRequest = () => {
    return {
        type: BANNER_REQUEST
    };
};

const actBannerSuccess = (data) => {
    return {
        type: BANNER_SUCCESS,
        payload: data,
    };
};
    
const actBannerFail = (error) => {
    return {
        type: BANNER_FAIL,
        payload: error,
    };
};