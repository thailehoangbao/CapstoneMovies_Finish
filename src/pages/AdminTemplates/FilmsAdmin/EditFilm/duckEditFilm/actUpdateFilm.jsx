import {UPDATE_FILM_ADMIN_FAIL,UPDATE_FILM_ADMIN_REQUSET,UPDATE_FILM_ADMIN_SUCCESS} from './_constantsUpdateFilm';
import api from '../../../../../utils/apiUtil';

export const actFetchUpdateFilm = (form) => {
    return (dispatch) => {
        dispatch(actUpdateFilmRequest());

        api
            .post(`QuanLyPhim/CapNhatPhimUpload`,form)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUpdateFilmSuccess(result.data.content));
                    console.log("Update phim success!", result.data.content);
                }
            })
            .catch(error => {
                dispatch(actUpdateFilmFail(error));
                alert("Update phim fail!", error)
            })
    }
}


const actUpdateFilmRequest = () => {
    return {
        type: UPDATE_FILM_ADMIN_REQUSET
    }
}

const actUpdateFilmSuccess = (data) => {
    return {
        type: UPDATE_FILM_ADMIN_SUCCESS,
        payload: data
    }
}

const actUpdateFilmFail = (error) => {
    return {
        type: UPDATE_FILM_ADMIN_FAIL,
        payload: error
    }
}