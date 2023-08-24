import React from 'react'

export default function Rap(props) {
  return (
    <div className='rap' >
      <div className='container'>
       <div>
       <img className='img-rap' src= {props.rap.logo} alt="" />
       </div>
      </div>
    </div>
  )
};
