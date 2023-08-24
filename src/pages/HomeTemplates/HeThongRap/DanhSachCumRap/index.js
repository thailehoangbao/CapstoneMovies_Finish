import React from 'react';
import CumRap from './CumRap';

export default function DanhSachCumRap(props) {
  const renderDanhSachCumRap = () => {
    let data = props.danhSachCumRap;
    
    return data?.map((cumRap) => cumRap?.lstCumRap?.map(rap => <CumRap key={rap.maCumRap} cumRap={rap} />));
    
  }
  return (
    <div className='danhSachCumRap'>
        {renderDanhSachCumRap()}
    </div>
  )
}
