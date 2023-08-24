import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchDanhSachRap } from './DanhSachRap/duck/actions';
import { actFetchDanhSachCumRap } from './DanhSachCumRap/duck/actions';
import { Link } from "react-router-dom";
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import Loader from '../../../components/Loader/Loader';

function HeThongRap(props) {

  const loading = useSelector((state) => state.danhSachRapReducer.loading);
  const dataCumRap = useSelector((state) => state.danhSachCumRapReducer.data);
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
    dispatch(actFetchDanhSachRap());
    dispatch(actFetchDanhSachCumRap());
  }, []);
  const render = () => {
    return dataCumRap?.map((heThongRap, index) => {
      return <TabPane tab={<div>
        <div style={{padding:"20px"}}><img src={heThongRap.logo} className='img-rap' /></div>
        <hr />
      </div>} key={index}>
          <Tabs tabPosition='left'>
            {heThongRap.lstCumRap.map((cumRap, index) => {
              return <TabPane tab={<div style={{textAlign:"left", padding:"12px"}}>
                <h5 style={{color:"#108f3e", fontSize:"25px", fontWeight:'500'}}>{cumRap.tenCumRap}</h5>
                <h6 style={{color:"#757575", fontWeight:"400", fontSize:"20px", padding:"5px 0"}}>
                  {cumRap.diaChi.length <= 30 ? cumRap.diaChi : cumRap.diaChi.substr(0,29) + "..."}
                  </h6>
                <p style={{color:"#fb4226"}}>[chi tiet]</p>
                <hr />
              </div>} key={index}>
                {cumRap.danhSachPhim?.map((phim, index) => {
                  return (
                    <div className='cumRap'>
                      <div style={{ display: "flex" }} >
                        <img src={phim.hinhAnh} className='img-cumRap' alt="" />
                        <div className='cumRap-right'>
                          <h3 style={{ marginBottom: "8px", color:"green", fontSize:"25px" }}>{phim.tenPhim}
                          </h3>
                          <div className='cumRap-right-item'>
                            {phim.lstLichChieuTheoPhim.map(lichChieu => {
                              return (
                                <div className='cumRap-item-child'>
                                  <Link style={{textDecoration:"none", color:"#fb4226"}}  to={`/dat-ve/${lichChieu.maLichChieu}`}>{formatDate(lichChieu.ngayChieuGioChieu)}</Link>
                                </div>
                              )
                              })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </TabPane>
            })}
          </Tabs>
      </TabPane>
    })
  };
  if (loading) return <Loader />;
  return (
    <div className='heThongRap'>
      <div className='container'>
        <Tabs tabPosition='left'>
          {render()}
        </Tabs>
      </div>
    </div>
  )
}
export default HeThongRap;