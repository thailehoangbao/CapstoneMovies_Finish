import { DANG_KY_REQUEST, DANG_KY_SUCCESS, DANG_KY_FAIL } from "./constants";
import api from "../../../../utils/apiUtil";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const actDangKy = (user, navigate) => {
  const MySwal = withReactContent(Swal);
    return (dispatch) => {
      dispatch(actDangKyRequest());
  
      api
        .post("QuanLyNguoiDung/DangKy", user)
        .then((result) => {
          dispatch(actDangKySuccess(user));
          MySwal.fire({
            title: 'Đăng ký thành công',
            icon: 'success',
          }).then(() => {
            navigate("/dangnhap", {replace: true});
          })
        })
        .catch((error) => {
          dispatch(actDangKyFail(error));
          MySwal.fire({
            title: 'Đăng ký thất bại',
            icon: 'error'
          })
        });
    };
  };
  
  const actDangKyRequest = () => {
    return {
      type: DANG_KY_REQUEST
    };
  };
  
  const actDangKySuccess = (data) => {
    return {
      type: DANG_KY_SUCCESS,
      payload: data,
    };
  };
  
  const actDangKyFail = (error) => {
    return {
      type: DANG_KY_FAIL,
      payload: error,
    };
  };
