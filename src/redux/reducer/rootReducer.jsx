import authReducer from 'pages/AdminTemplates/AuthPage/duckAuthPage/reducerAuthPage';
import dashboardReducer from 'pages/AdminTemplates/Dashboard/duckDashboard/reducerDashboard';
import addFilmAdminReducer from 'pages/AdminTemplates/FilmsAdmin/AddFilm/duckAddFilm/reducerAddFilm';
import editFilmAdminReducer from 'pages/AdminTemplates/FilmsAdmin/EditFilm/duckEditFilm/reducerEditFilm';
import updateFilmAdminReducer from 'pages/AdminTemplates/FilmsAdmin/EditFilm/duckEditFilm/reducerUpdateFilm';
import heThongRapShowTimeReducer from 'pages/AdminTemplates/ShowTime/duckShowTime/reducerShowTime';
import addUserReducer from 'pages/AdminTemplates/User/AddUser/duckAddUser/reducerAddUser';
import editUserReducer from 'pages/AdminTemplates/User/EditUser/duckEditUser/reducerEditUser';
import {combineReducers} from 'redux';



const rootReducer = combineReducers({
    //child reducers
    addFilmAdminReducer: addFilmAdminReducer,
    dashboardReducer: dashboardReducer,
    editFilmAdminReducer: editFilmAdminReducer,
    updateFilmAdminReducer: updateFilmAdminReducer,
    heThongRapShowTimeReducer: heThongRapShowTimeReducer,
    authReducer: authReducer,
    addUserReducer: addUserReducer,
    editUserReducer: editUserReducer
})

export default rootReducer;