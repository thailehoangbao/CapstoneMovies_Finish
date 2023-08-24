import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { actDangNhap } from './duck/actions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

export default function DangNhap() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stateForm, setStateForm] = useState({
    taiKhoan: "",
    matKhau: ""
  });
  const [state, setState] = useState({
    
    errors: {
      taiKhoan: "",
      matKhau: "",
    },
    taiKhoanValid: false,
    matKhauValid: false,

    formValid: false,
  });
  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStateForm({
      ...stateForm,
      [name]: value,
    });
  };

  const handleDangNhap = (e) => {
    e.preventDefault();
    dispatch(actDangNhap(stateForm, navigate));
    // navigate("/");
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;

    let mess = value.trim() ? "" : 'Vui lòng nhập trường này!';

    let { taiKhoanValid, matKhauValid } = state;

    switch (name) {
      case "taiKhoan":
        taiKhoanValid = mess === "" ? true : false;
        if (value && value.trim().length < 4) {
          mess = "Tài khoản từ 4 ký tự trở lên!";
          taiKhoanValid = false;
        }
        break;
      case 'matKhau':
        matKhauValid = mess === "" ? true : false;
        if (value && !value.match(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/)) {
          mess = "Vui lòng nhập mật khẩu đúng định dạng!";
          matKhauValid = false;
        }
        break;

      default:
        break;
    }
    setState({
      errors: { ...state.errors, [name]: mess },
      taiKhoanValid,
      matKhauValid,
      formValid: taiKhoanValid && matKhauValid
  });
  };
  return (
    <div className='dangNhap py-5'>
      <div className='container dangNhap1'>
        <div className='row'>
          <div className='col-sm-6 pl-4 dangNhap2'>
            <div className='dangNhap3'>
              <h4 className='text-center text-2xl'style={{fontWeight: "500"}}>ĐĂNG NHẬP</h4>
              <form onSubmit={(e) => handleDangNhap(e)}>
                <div className="form-group">
                  <label style={{fontWeight: "500", fontSize:"18px"}}>Tài khoản</label>
                  <input type="text" name="taiKhoan" className="form-control" onChange={(e) => handleOnchange(e)}
                    onBlur={(e) => handleValidation(e)} />
                    <span className='text-danger'>{state.errors.taiKhoan}</span>
                </div>
                <div className="form-group">
                  <label style={{fontWeight: "500", fontSize:"18px"}}>Mật khẩu</label>
                  <input type="password" name="matKhau" className="form-control" onChange={(e) => handleOnchange(e)}
                    onBlur={(e) => handleValidation(e)} />
                    <span className='text-danger'>{state.errors.matKhau}</span>
                </div>
                <button type='submit' disabled={!state.formValid}  className='btn col-sm-12 mt-3'>ĐĂNG NHẬP</button>
              </form>
              <div className='text-right mt-3'>
                <Link to={`/dangky`}>Bạn chưa có tài khoản? Đăng ký</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 pl-5'>
            <img className='img-dn pl-5' src="https://www.cgv.vn/media/wysiwyg/2023/012023/350x495.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
};

