import authReducer from 'pages/AdminTemplates/AuthPage/duckAuthPage/reducerAuthPage';
import dashboardReducer from 'pages/AdminTemplates/Dashboard/duckDashboard/reducerDashboard';
import addFilmAdminReducer from 'pages/AdminTemplates/FilmsAdmin/AddFilm/duckAddFilm/reducerAddFilm';
import editFilmAdminReducer from 'pages/AdminTemplates/FilmsAdmin/EditFilm/duckEditFilm/reducerEditFilm';
import updateFilmAdminReducer from 'pages/AdminTemplates/FilmsAdmin/EditFilm/duckEditFilm/reducerUpdateFilm';
import heThongRapShowTimeReducer from 'pages/AdminTemplates/ShowTime/duckShowTime/reducerShowTime';
import addUserReducer from 'pages/AdminTemplates/User/AddUser/duckAddUser/reducerAddUser';
import editUserReducer from 'pages/AdminTemplates/User/EditUser/duckEditUser/reducerEditUser';
import { combineReducers } from 'redux';
import danhSachReducer from "../../pages/HomeTemplates/LichChieu/DanhSach/duck/reducer";
import chiTietPhimReducer from "../../pages/HomeTemplates/ChiTietPhim/duck/reducer";
import bannerReducer from "../../pages/HomeTemplates/LichChieu/Banner/duck/reducer";
import danhSachRapReducer from "../../pages/HomeTemplates/HeThongRap/DanhSachRap/duck/reducer";
import danhSachCumRapReducer from "../../pages/HomeTemplates/HeThongRap/DanhSachCumRap/duck/reducer";
import dangKyReducer from "../../pages/HomeTemplates/DangKy/duck/reducer";
import dangNhapReducer from "../../pages/HomeTemplates/DangNhap/duck/reducer";
import datVeReducer from "../../pages/HomeTemplates/DatVe/duck/reducer";



const rootReducer = combineReducers({
    //child reducers
    addFilmAdminReducer: addFilmAdminReducer,
    dashboardReducer: dashboardReducer,
    editFilmAdminReducer: editFilmAdminReducer,
    updateFilmAdminReducer: updateFilmAdminReducer,
    heThongRapShowTimeReducer: heThongRapShowTimeReducer,
    authReducer: authReducer,
    addUserReducer: addUserReducer,
    editUserReducer: editUserReducer,
    danhSachReducer,
    chiTietPhimReducer,
    bannerReducer,
    danhSachRapReducer,
    danhSachCumRapReducer,
    dangKyReducer,
    dangNhapReducer,
    datVeReducer,
})

export default rootReducer;