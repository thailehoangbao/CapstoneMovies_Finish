import {EDIT_FILM_ADMIN_FAIL,EDIT_FILM_ADMIN_REQUSET,EDIT_FILM_ADMIN_SUCCESS} from './_constantsEditFilm';
import api from '../../../../../utils/apiUtil';

export const actFetchEditFilm = (maPhim) => {
    return (dispatch) => {
        dispatch(actEditFilmRequest());

        api
            .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actEditFilmSuccess(result.data.content));
                    console.log("Edit phim success!", result.data.content);
                }
            })
            .catch(error => {
                dispatch(actEditFilmFail(error));
                console.log("Edit phim fail!", error)
            })
    }
}


const actEditFilmRequest = () => {
    return {
        type: EDIT_FILM_ADMIN_REQUSET
    }
}

const actEditFilmSuccess = (data) => {
    return {
        type: EDIT_FILM_ADMIN_SUCCESS,
        payload: data
    }
}

const actEditFilmFail = (error) => {
    return {
        type: EDIT_FILM_ADMIN_FAIL,
        payload: error
    }
}