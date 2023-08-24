import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams, useNavigate } from 'react-router-dom';
import { actChonGhe, actFetchDatVe, actDatVe } from './duck/actions';
import Loader from '../../../components/Loader/Loader';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function DatVe(props) {
  const params = useParams();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.datVeReducer.loading);
  const data = useSelector((state) => state.datVeReducer.data);
  const gheDangChon = useSelector((state) => state.datVeReducer.gheDangChon);
  const tongTien = useSelector((state) => state.datVeReducer.tongTien);
  const gheChon = useSelector((state) => state.datVeReducer.gheChon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchDatVe(params.id));
  }, []);

  const MySwal = withReactContent(Swal);

  const handleDatVe = () => {
    if (localStorage.getItem("USER_LOGIN")) {

      MySwal.fire({
        title: 'Đặt vé thành công',
        icon: 'success',
      }).then(() => {
        dispatch(actDatVe(params.id, gheDangChon));
      })
    } else {
      MySwal.fire({
        title: 'Bạn chưa đăng nhập',
        text: 'Bạn có muốn đăng nhập?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Không'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/dangnhap");
        }
      });
    }
  }

  if (loading) return <Loader />;
  return (
    <div className='datVe' style={{ padding: "100px 0" }}>

      <div className='row'>
        <div className='col-sm-8'>
          <div className='container'>
            <div className='manHinh px-3'>
              <div>
                <h5 style={{ color: "white", textAlign: "center", fontSize: "25px", paddingBottom: "10px" }}>Màn hình</h5>
              </div>
              <div className='screen'></div>

              <div className='container text-center pt-5'>
                {data?.danhSachGhe?.map((ghe, index) => {
                  return (
                    <span>
                      <button className={ghe.daDat ? 'ghe gheDaDat' : (gheDangChon.includes(ghe)) ? 'ghe gheDangChon' : (!ghe.daDat && ghe.loaiGhe === 'Vip') ? 'ghe gheVip' : 'ghe gheThuong'} onClick={() => dispatch(actChonGhe(ghe))} disabled={ghe.daDat}> {ghe.daDat ? 'X' : ghe.tenGhe}</button>
                      {(index + 1) % 16 === 0 ? <br /> : ''}
                    </span>
                  )
                })}
              </div>
              <div className='note container'>
                <div className='note-DaDat'>
                  <button style={{ borderRadius: "5px", width: "35px", border: "3px solid grey", backgroundColor: "grey", cursor: "default" }} >
                    <span>X</span>
                  </button>
                  <p style={{ color: "white", paddingBottom: "5px", fontSize: "18px" }}>
                    Đã đặt
                  </p>
                </div>

                <div className='note-Thuong'>
                  <button style={{ borderRadius: "5px", width: "35px", border: "3px solid #d9d9d9", backgroundColor: "#d9d9d9", cursor: "default" }} >
                    <span style={{ color: "#d9d9d9" }}>X</span>
                  </button>
                  <p style={{ color: "white", paddingBottom: "5px", fontSize: "18px" }}>
                    Thường
                  </p>
                </div>

                <div className='note-Vip'>
                  <button style={{
                    borderRadius: "5px", width: "35px", border: "3px solid orange",
                    backgroundColor: "orange", cursor: "default"
                  }} >
                    <span style={{ color: "orange" }}>X</span>
                  </button>
                  <p style={{ color: "white", paddingBottom: "5px", fontSize: "18px" }}>
                    Vip
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='col-sm-4 datVe-right pt-5' style={{ paddingLeft: '0' }}>
          <h3 className='text-center pb-5'
            style={{ color: '#108f3e', fontSize: "45px" }}>
            {tongTien}đ
          </h3>
          <hr style={{ marginTop: "0", borderColor: "white", borderBottom: "2" }} />
          <div className='datVe-right-item'>
            <h5>Cụm rạp:</h5>
            <h5>{data && data.thongTinPhim?.tenCumRap}</h5>
          </div>
          <hr style={{ borderColor: "white", borderBottom: "2" }} />
          <div className='datVe-right-item'>
            <h5>Địa chỉ:</h5>
            <h5>{data && data.thongTinPhim?.diaChi}</h5>
          </div>
          <hr style={{ borderColor: "white", borderBottom: "2" }} />
          <div className='datVe-right-item'>
            <h5>
              Rạp:
            </h5>
            <h5>{data && data.thongTinPhim?.tenRap}</h5>
          </div>
          <hr style={{ borderColor: "white", borderBottom: "2" }} />
          <div className='datVe-right-item'>
            <h5>Ngày chiếu:</h5>
            <h5>{data && data.thongTinPhim?.ngayChieu}</h5>
          </div>

          <hr style={{ borderColor: "white", borderBottom: "2" }} />

          <div className='datVe-right-item'>
            <h5>Tên Phim:</h5>
            <h5>{data && data.thongTinPhim?.tenPhim}</h5>
          </div>
          <hr style={{ borderColor: "white", borderBottom: "2" }} />
          <div className='datVe-right-item'>
            <h5>Chọn:</h5>
            <h5>{gheChon}</h5>
          </div>
          <hr style={{ borderColor: "white", borderBottom: "2" }} />

          <button className=' btn col-sm-12' onClick={() => handleDatVe()}>ĐẶT VÉ</button>
        </div>
      </div>
    </div>
  )
}

