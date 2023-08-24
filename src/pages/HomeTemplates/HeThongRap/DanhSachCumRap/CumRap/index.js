import React from 'react';

export default function CumRap(props) {
  return (
    <div className='cumRap' >
      <div className='container'>
      <div>
        <button style={{backgroundColor:"white", borderStyle:"none",textAlign:"left"}}>
        <h6 style={{marginBottom:"0px"}}>{props.cumRap.tenCumRap}</h6>
        <p style={{marginBottom:"0px"}}>{props.cumRap.diaChi}</p>
        <span>[chi tiết]</span>
        </button>
      </div>
      </div>
    </div>
  )
};
