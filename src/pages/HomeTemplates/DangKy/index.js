import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { actDangKy } from './duck/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function DangKy() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.dangKyReducer.error);

  const [stateForm, setStateForm] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    hoTen: "",
  })
  const [state, setState] = useState({
    
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
    },
    taiKhoanValid: false,
    matKhauValid: false,
    emailValid: false,
    soDtValid: false,
    hoTenValid: false,

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

const handleDangKy = (e) => {
    e.preventDefault();
    dispatch(actDangKy(stateForm, navigate));

  };

  const handleValidation = (e) => {
    const { name, value } = e.target;

    let mess = value.trim() ? "" : 'Vui lòng nhập trường này!';

    let { taiKhoanValid, matKhauValid, emailValid, soDtValid, hoTenValid } = state;

    switch (name) {
      case 'taiKhoan':
        taiKhoanValid = mess === "" ? true : false;
        if (value && value.trim().length < 4) {
          mess = "Tài khoản từ 4 ky tự trở lên!";
          taiKhoanValid = false;
        }
        break;
      case 'matKhau':
        matKhauValid = mess === "" ? true : false;
        if (value && !value.match(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ )) {
          mess = "Vui lòng nhập mật khẩu đúng định dạng!";
          matKhauValid = false;
        }
        break;
      case 'email':
        emailValid = mess === "" ? true : false;
        if (value && !value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/)) {
          mess = "Vui lòng nhập email đúng định dạng!";
          emailValid = false;
        }
        break;
        case "soDt":
          soDtValid = mess === "" ? true : false;
          if (value && !value.match("^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$")) {
            mess = "Vui lòng nhập đúng số điện thoại! ";
            soDtValid = false;
          }
          break;
      case 'hoTen':
        hoTenValid = mess === '' ? true : false;
        break;

      default:
        break;
    }
    setState({
      errors: { ...state.errors, [name]: mess },
      taiKhoanValid,
      matKhauValid,
      emailValid,
      soDtValid,
      hoTenValid,
      formValid: taiKhoanValid && matKhauValid && emailValid && soDtValid && hoTenValid
    });
  };

  return (
    <div className='dangKy'>
      <div className='container py-5'>
        <div className='dangKy1'>
          <div className='row'>
            <div className='col-sm-6 py-5'>
              <h4 style={{fontWeight: "500"}} className='text-center pb-3 text-2xl'>ĐĂNG KÝ</h4>
              <form onSubmit={(e) => handleDangKy(e)}>
                <div className="form-group">
                  <label style={{fontWeight: "500", fontSize:"18px"}}>Tài khoản</label>
                  <input type="text" name="taiKhoan" className="form-control"  onChange={(e) => handleOnchange(e)}
                    onBlur={(e) => handleValidation(e)} />
                  <span className='text-danger'>{state.errors.taiKhoan}</span>
                </div>
                <div className="form-group">
                  <label style={{fontWeight: "500", fontSize:"18px"}}>Mật khẩu</label>
                  <input type="password" name="matKhau" className="form-control" onChange={(e) => handleOnchange(e)} onBlur={(e) => handleValidation(e)} />
                  <span className='text-danger'>{state.errors.matKhau}</span>
                </div>
                <div className="form-group">
                  <label style={{fontWeight: "500", fontSize:"18px"}}>Email</label>
                  <input type="text" name="email" className="form-control" onChange={(e) => handleOnchange(e)} onBlur={(e) => handleValidation(e)} />
                  <span className='text-danger'>{state.errors.email}</span>
                </div>
                <div className="form-group">
                  <label style={{fontWeight: "500", fontSize:"18px"}}>Số điện thoại</label>
                  <input type="text" name="soDt" className="form-control" onChange={(e) => handleOnchange(e)} onBlur={(e) => handleValidation(e)} />
                  <span className='text-danger'>{state.errors.soDt}</span>
                </div>
                <div className="form-group">
                  <label style={{fontWeight: "500", fontSize:"18px"}}>Họ tên</label>
                  <input type="text" name="hoTen" className="form-control" onChange={(e) => handleOnchange(e)} onBlur={(e) => handleValidation(e)} />
                  <span className='text-danger'>{state.errors.hoTen}</span>
                </div>
                <div className='text-red'>{state.errors.content}</div>
                <button type='submit' disabled={!state.formValid } className='btn col-sm-12 mt-3' >ĐĂNG KÝ</button>

              </form>
              <div className='mt-2 text-right'>
                <Link to={`/dangnhap`}>Bạn đã có tài khoản? Đăng nhập</Link>
              </div>
            </div>
            <div className='col-sm-6 py-5 pl-5'>
              <img className='img-dk pt-5' src="https://www.cgv.vn/media/wysiwyg/2020/3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};


