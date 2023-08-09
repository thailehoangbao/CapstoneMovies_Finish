import {PUT_EDIT_USER_FAIL,PUT_EDIT_USER_REQUEST,PUT_EDIT_USER_SUCCESS} from './_constantsEditUser';
import api from '../../../../../utils/apiUtil';
import { USER_LOGIN } from '../../../../../utils/_constantUtils';

export const actFetchEditUser= (user) => {
    return (dispatch) => {
        dispatch(actEditUserRequest());
        api
            .put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`,user)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    const user = result.data.content;
                    console.log("Edit User success!");
                    localStorage.setItem(USER_LOGIN,JSON.stringify(user));
                }
            })
            .catch(error => {
                dispatch(actEditUserFail(error));
                console.log("Edit User fail!", error)
            })
    }
}


const actEditUserRequest = () => {
    return {
        type: PUT_EDIT_USER_REQUEST
    }
}

const actEditUserSuccess = (data) => {
    return {
        type: PUT_EDIT_USER_SUCCESS,
        payload: data
    }
}

const actEditUserFail = (error) => {
    return {
        type: PUT_EDIT_USER_FAIL,
        payload: error
    }
}