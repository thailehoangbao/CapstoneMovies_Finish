import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { actFetchChiTietPhim, actFetchLichChieuPhim } from './duck/actions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../../components/Loader/Loader';
import { Link } from "react-router-dom";
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';

function ChiTietPhim(props) {
  const params = useParams();
  const loading = useSelector((state) => state.chiTietPhimReducer.loading);
  const data = useSelector((state) => state.chiTietPhimReducer.data);
  const dataLC = useSelector((state) => state.chiTietPhimReducer.dataLC);
  const formatDate = (da) => {
    const d = new Date(da);
    let date = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    let month = (d.getMonth() + 1) < 10 ? ("0" + (d.getMonth() + 1)) : (d.getMonth() + 1);
    let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    let min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    return date + "-" + month + "-" + d.getFullYear() + " " + hours + ":" + min;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchChiTietPhim(params.id));
    dispatch(actFetchLichChieuPhim(params.id))
  }, []);

  if (loading) return <Loader />;

 return (
    <div className='chiTiet'>
      <div className='container'>
        <div className=' row'>
          <img className=' col-sm-4' src={data && data.hinhAnh} alt="" />

          <div className='col-sm-8 text-center text-white chiTiet1'>
            <div className='chiTiet2'>
              <p style={{fontSize:"20px"}}>Ngày chiếu: {data && formatDate(data.ngayKhoiChieu)}</p>
              <h4 style={{fontSize:"28px",fontWeight:"500", padding:"10px 0"}}>{data && data.tenPhim}</h4>
              <p>{data && data.moTa}</p>
            </div>
          </div>
        </div>

        <div className='pt-5'>
          <Tabs tabPosition='left'>
             {dataLC?.heThongRapChieu.map((heThongRap, index) => {
              return <TabPane key={index} tab={
                <div>
                  <img src={heThongRap.logo} className='img-rap' alt="" />
                </div>
              }>
                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                  return  <div>
                    <h5 style={{fontSize:"24px", color:"greenyellow", paddingBottom:"15px"}}>{cumRap.tenCumRap}</h5>
                    {cumRap.lichChieuPhim?.map((lichChieu, index)=> {
                      return <div className='cumRap-item-child' style={{width:"20%"}}>
                        <Link style={{textDecoration:"none", color:"#fb4226", fontSize:"18px"}}  to={`/dat-ve/${lichChieu.maLichChieu}`}>{formatDate(lichChieu.ngayChieuGioChieu)}</Link>
                      </div>
                    })}
                  </div>
                   
                })}
              </TabPane> 
             })}
          </Tabs>

        </div>
      </div>
    </div>
  )
};
export default ChiTietPhim;