import React from 'react';
import Rap from './Rap';

function DanhSachRap(props) {

const renderDanhSachRap = () => {
  let data = props.danhSachRap;
  return data?.map((rap) => <Rap key={rap.maHeThongRap}
  rap={rap} />)
}
  return (
    <div className='danhSachRap'>
        {renderDanhSachRap()}
    </div>
  )
}
export default DanhSachRap;