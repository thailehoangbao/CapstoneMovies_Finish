import { CLEAR_AUTH_LOGOUT, GET_AUTH_FAIL, GET_AUTH_REQUEST, GET_AUTH_SUCCESS } from './_constantsAuth';
import api from '../../../../utils/apiUtil';
import { TOKEN, USER_LOGIN } from '../../../../utils/_constantUtils';

const actAuthSuccess = (data) => {
    return {
        type: GET_AUTH_SUCCESS,
        payload: data
    }
}

const actAuthFail = (error) => {
    return {
        type: GET_AUTH_FAIL,
        payload: error
    }
}

const actAuthRequest = () => {
    return {
        type: GET_AUTH_REQUEST,
    }
}

const TIME_OUT = 3600000;


export const actFetchAuth = (user, navigate) => {
    return (dispatch) => {
        dispatch(actAuthRequest());

        api
            .post(`QuanLyNguoiDung/DangNhap`, user)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    const user = result.data.content;
                    if (user.maLoaiNguoiDung !== "QuanTri") {
                        //show error
                        //khi promise.reject() sẽ xuống catch
                        const error = {
                            response: {
                                data: {
                                    content: 'Bạn không có quyền truy cập!'
                                }
                            }
                        }
                        return Promise.reject(error);
                    }

                    let timeNow = new Date().getTime();
                    let exp = timeNow + TIME_OUT;
                    localStorage.setItem('exp', exp);
                    dispatch(actTimeLogout(TIME_OUT, navigate));

                    alert('Bạn đăng nhập admin thành công!')
                    dispatch(actAuthSuccess(user));
                    localStorage.setItem(USER_LOGIN, JSON.stringify(user));
                    localStorage.setItem(TOKEN, JSON.stringify(user.accessToken));
                    navigate('/admin/dashboard', { replace: true });
                }
            })
            .catch((error) => {
                dispatch(actAuthFail(error));
            })
    }
}


export const actLogoutAuthPage = (navigate) => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(TOKEN);
    localStorage.removeItem('exp');
    navigate('/auth', { replace: true });
    return {
        type: CLEAR_AUTH_LOGOUT
    }
}

const actTimeLogout = (exp, navigate) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(actLogoutAuthPage(navigate));
        }, exp)
    }
}

export const actTryLogin = (navigate) => {
    return (dispatch) => {
        const user = JSON.parse(localStorage.getItem(USER_LOGIN));

        if (!user) {
            return;
        }

        let exp = localStorage.getItem('exp');
        let timeNow = new Date().getTime();
        console.log(exp);
        console.log(timeNow);

        if (timeNow > exp) {
            //logout
            dispatch(actLogoutAuthPage(navigate));
            return;
        }

        //set timeout
        dispatch(actTimeLogout(exp - timeNow, navigate));
        dispatch(actAuthSuccess(user));
    }
}
