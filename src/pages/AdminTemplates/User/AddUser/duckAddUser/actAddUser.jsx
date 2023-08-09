import {ADD_USER_ADMIN_FAIL,ADD_USER_ADMIN_REQUSET,ADD_USER_ADMIN_SUCCESS} from './_constantAddUser';
import api from '../../../../../utils/apiUtil';

export const actFetchAddUser= (user) => {
    return (dispatch) => {
        dispatch(actAddUserRequest());

        api
            .post(`QuanLyNguoiDung/ThemNguoiDung`,user)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actAddUserSuccess(result.data.content));
                    console.log("Thêm User success!");
                }
            })
            .catch(error => {
                dispatch(actAddUserFail(error));
                console.log("Thêm User fail!", error)
            })
    }
}


const actAddUserRequest = () => {
    return {
        type: ADD_USER_ADMIN_REQUSET
    }
}

const actAddUserSuccess = (data) => {
    return {
        type: ADD_USER_ADMIN_SUCCESS,
        payload: data
    }
}

const actAddUserFail = (error) => {
    return {
        type: ADD_USER_ADMIN_FAIL,
        payload: error
    }
}