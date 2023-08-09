import {DASHBOARD_REQUSET,DASHBOARD_FAIL,DASHBOARD_SUCCESS, DELETE_FILM_DASHBOARD_FAIL,DELETE_FILM_DASHBOARD_REQUEST,DELETE_FILM_DASHBOARD_SUCCESS} from './_constantsDashboard';
import api from '../../../../utils/apiUtil';
import { GROUPID } from '../../../../utils/_constantUtils';

export const actFetchDashboard = (value) => {
    return (dispatch) => {
        dispatch(actDashboardRequest());

        if (!value) {
            api
                .get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
                .then((result) => {
                    if (result.data.statusCode === 200) {
                        dispatch(actDashboardSuccess(result.data.content));
                    }
                })
                .catch(error => {
                    dispatch(actDashboardFail(error));
                    console.log("Thất bại!", error);
                })
        } else {
            api
            .get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${value}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDashboardSuccess(result.data.content));
                }
            })
            .catch(error => {
                dispatch(actDashboardFail(error));
                console.log("Thất bại!", error);
            })
        }
    }
}


export const actFetchDeleteFilmDashboard = (maPhim) => {
    return (dispatch) => {
        dispatch(actDeleteFilmDashboardRequest());

        api
            .delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDeleteFilmDashboardSuccess());
                    alert('Xóa phim thành công!');
                };
            })
            .then((result) => {
                dispatch(actFetchDashboard());
            })
            .catch(error => {
                dispatch(actDeleteFilmDashboardFail(error));
                console.log("Xóa Phim Thất bại!", error);
            })
    }
}


const actDashboardRequest = () => {
    return {
        type: DELETE_FILM_DASHBOARD_REQUEST
    }
}

const actDashboardSuccess = (data) => {
    return {
        type: DELETE_FILM_DASHBOARD_SUCCESS,
        payload: data
    }
}

const actDashboardFail = (error) => {
    return {
        type: DELETE_FILM_DASHBOARD_FAIL,
        payload: error
    }
}


const actDeleteFilmDashboardRequest = () => {
    return {
        type: DASHBOARD_REQUSET
    }
}

const actDeleteFilmDashboardSuccess = (data) => {
    return {
        type: DASHBOARD_SUCCESS,
        payload: data
    }
}

const actDeleteFilmDashboardFail = (error) => {
    return {
        type: DASHBOARD_FAIL,
        payload: error
    }
}