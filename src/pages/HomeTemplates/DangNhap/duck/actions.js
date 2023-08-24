import { DANG_NHAP_REQUEST, DANG_NHAP_SUCCESS, DANG_NHAP_FAIL } from "./constants";
import api from "../../../../utils/apiUtil";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const actDangNhap = (user, navigate) => {
    const MySwal = withReactContent(Swal);
    return (dispatch) => {
        dispatch(actDangNhapRequest());
        api.post("QuanLyNguoiDung/DangNhap", user)
            .then((res) => {
                if (res.data.statusCode === 200) {
                    const user = res.data.content;
                    dispatch(actDangNhapSuccess(user));
                    localStorage.setItem("USER_LOGIN", JSON.stringify(user));
                    MySwal.fire({
                        title: 'Đăng nhập thành công',
                        icon: 'success',
                      }).then(() => {
                        navigate("/", {replace: true});
                      })
                }
            }
        )
        .catch((error) => {
            dispatch(actDangNhapFail(error))
            MySwal.fire({
                title: 'Đăng nhập thất bại',
                icon: 'error'
              })
        });
}
};

const actDangNhapRequest = () => {
    return {
        type: DANG_NHAP_REQUEST,
    };
    };
    
    const actDangNhapSuccess = (data) => {
        return {
            type: DANG_NHAP_SUCCESS,
            payload: data,
        };
    };
    
    const actDangNhapFail = (error) => {
        return {
            type: DANG_NHAP_FAIL,
            payload: error
        };
    };