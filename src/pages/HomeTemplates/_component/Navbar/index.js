import React, { Component, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const [state, setState] = useState(true);
    useEffect(() => {
        if (localStorage.getItem("USER_LOGIN")) {
            setState(true);
        } else {
            setState(false);
        }
    });
    const handleDangXuat = () => {
        localStorage.removeItem("USER_LOGIN");
        setState(false);
    }

    return (
        <header className='header fixed-top'>
            <nav className="navbar navbar-expand-md  navbar-dark container">

                <NavLink to="/" className="navbar-brand mr-5" >
                    <img className='img' src="https://printgo.vn/uploads/file-logo/1/512x512.22cdafa36d7ed05664bdb0a0699771c2.ai.1.png" alt="" />
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className=" navbar-collapse ml-5" id="collapsibleNavbar">
                    <ul className="navbar-nav nav-1 mx-5">
                        <li className="nav-item mx-3">
                            <NavLink className={({ isActive }) => isActive ? "my-active1 nav-link font-black" : "nav-link font-white"} to="/">Lịch Chiếu</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className={({ isActive }) => isActive ? "my-active1 nav-link font-black" : "nav-link font-white"} to="/rap">Rạp</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className={({ isActive }) => isActive ? "my-active1 nav-link font-black" : "nav-link font-white"} to="/tuyen-dung">Tuyển dụng</NavLink>
                        </li>
                    </ul>

                    {state ?
                        <ul className="navbar-nav nav-2 ">
                            <li className="nav-item mx-3">
                                <button className='dangXuat'
                                    onClick={() => handleDangXuat()}>Đăng xuất</button>
                            </li>
                        </ul> :
                        (<ul className="navbar-nav nav-2 ">

                            <li className="nav-item mx-3">
                                <NavLink className={"nav-link"} to="/dangky">Đăng Ký</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className={"nav-link"} to="/dangnhap">Đăng Nhập</NavLink>
                            </li>
                        </ul>)}
                </div>
            </nav>
        </header>
    )
};

