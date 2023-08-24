import { DAT_VE_REQUEST, DAT_VE_SUCCESS, DAT_VE_FAIL, CHON_GHE, DAT_VE } from "./constants";

const initialState = {
    loading: false,
    data: [],
    error: null,
    gheDangChon: [],
    tongTien: 0,
    gheChon: ''
}

const datVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAT_VE_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state };

        case DAT_VE_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state };

        case DAT_VE_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;

            return { ...state };
        
        case CHON_GHE:
            let dsGheUpdate = [...state.gheDangChon];
            let tongTienTemp = 0;
            let gheChonTemp = '';
            let index = dsGheUpdate.findIndex(gheDD => gheDD.maGhe === action.payload.maGhe);
            if (index !== -1) {
                dsGheUpdate.splice(index, 1);
            } else {
                dsGheUpdate.push(action.payload);
            }
            dsGheUpdate.map(ghe => {
                tongTienTemp += ghe.giaVe;
                gheChonTemp += "Ghế " + ghe.tenGhe + ", ";
            });
            state.gheDangChon = dsGheUpdate;
            state.tongTien = tongTienTemp;
            state.gheChon = gheChonTemp;
            return { ...state };

        case DAT_VE:
            
            return initialState;
        default:
            return { ...state };
    }
};

export default datVeReducer;