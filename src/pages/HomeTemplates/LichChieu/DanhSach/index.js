import React, { useState } from 'react';
import Slider from 'react-slick';
import Phim from './Phim';
import Loader from '../../../../components/Loader/Loader';

const DanhSach = (props) => {
  const settings = {
    centerPadding: "0px",
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    slidesPerRow: 2,
    dots: true,
  };
  const [isDangChieu, setDangChieu] = useState(true);

  const renderDanhSach = () => {
    let data = null;

    if (isDangChieu === true) {
      data = props.arrPhim?.filter(phim => phim.dangChieu === true);

    } else {
      data = props.arrPhim?.filter(phim => phim.dangChieu === false);
    };

    if (props.loading) return <Loader />;
    return data.length !== 0 ? data.map((phim) => <Phim key={phim.maPhim}
      phim={phim} />) : (
      <div>không có dữ liệu</div>
    )
  };

  return (
    <div className=" danhSach">
      <div className='ml-5 pb-5'>
        <button type='button' className={`${isDangChieu ? "btn" : "sapChieu"} btn ml-5 mr-3 px-3 py-2`} onClick={() => setDangChieu(true)}>PHIM ĐANG CHIẾU</button>
        <button type='button' className={`${!isDangChieu ? "btn" : "sapChieu"} btn px-3 py-2`} onClick={() => setDangChieu(false)}>PHIM SẮP CHIẾU</button>
      </div>
      <div className='container'>
        <Slider {...settings}>
          {renderDanhSach()}
        </Slider>
      </div>
    </div>
  )
};

export default DanhSach;