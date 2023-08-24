import React, { useEffect } from 'react';
import Banner from './Banner';
import DanhSach from './DanhSach';
import { actFetchDanhSach } from "./DanhSach/duck/actions";
import { useDispatch, useSelector } from 'react-redux';
export default function LichChieu(props) {
  const loading = useSelector((state) => state.danhSachReducer.loading);
  const data = useSelector((state) => state.danhSachReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchDanhSach())
  }, []);
  return (
    <div>
      <Banner />
      <DanhSach arrPhim={data} loading={loading}/>
    </div>
  )
}

