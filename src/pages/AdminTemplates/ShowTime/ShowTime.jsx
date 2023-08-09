import React, { useEffect } from 'react';
import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  Select,
} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useFormik } from 'formik';
import {actFetchCumRapTheoHeThongShowTime, actFetchHeThongRapShowTime, actFetchTaoLichChieuShowTime} from './duckShowTime/actShowTime';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
dayjs.extend(customParseFormat);
/** Manually entering any of the following formats will perform date parsing */

const dateFormatList = ['DD/MM/YYYY hh:mm:ss', 'DD/MM/YY hh:mm:ss', 'DD-MM-YYYY hh:mm:ss', 'DD-MM-YY hh:mm:ss'];

export default function ShowTime() {
  const params = useParams();
  const dispatch = useDispatch();
  const heThongRap = useSelector(state => state.heThongRapShowTimeReducer.heThongRap);
  const cumRapTheoHeThong = useSelector(state => state.heThongRapShowTimeReducer.cumRapTheoHeThong);
  const formik = useFormik({
    initialValues: {
      maPhim: params.id * 1,
      ngayChieuGioChieu: '',
      maRap: '',
      giaVe: 0
    },
    onSubmit: (value) => {
      console.log(value, "value");
      dispatch(actFetchTaoLichChieuShowTime(value));
    }
  });


  useEffect(() => {
    dispatch(actFetchHeThongRapShowTime()); 
  }, [])


  const convertSelectHTR = () => {
    return heThongRap?.map((htr, index) => {

      return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
    })
  }

  const handleChangeHeThongRap = (value) => {
    console.log(value)
    dispatch(actFetchCumRapTheoHeThongShowTime(value));
  };

  const convertChangeCumRap = () => {
    return cumRapTheoHeThong?.map((cumRap, index) => {

      return { label: cumRap.tenCumRap, value: cumRap.maCumRap }
    })
  };

  const handleChangeCumRap = (value) => {
    formik.setFieldValue('maRap', value);
  }

  const handleDatePicker = (value, dateString) => {
    console.log(value, dateString);
    formik.setFieldValue('ngayChieuGioChieu', dateString);
  };

  const onOk = (value, dateString) => {
    console.log(value, dateString);
    formik.setFieldValue('ngayChieuGioChieu', dateString);
  };

  const handleChangeInputNumber = (value) => {
    formik.setFieldValue('giaVe', value)
  }

  return (
    <>
      <Form onSubmitCapture={formik.handleSubmit} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" style={{ maxWidth: 600 }}>
        <h3 className='font-bold text-lg mb-2'>Tạo Lịch Chiếu</h3>
        <Form.Item label="Hệ Thống Rạp">
          <Select 
            options={convertSelectHTR()}
            onChange={handleChangeHeThongRap}
            placeholder='Chọn Hệ Thống Rạp'
          />
        </Form.Item>

        <Form.Item label="Cụm Rạp">
          <Select
            options={convertChangeCumRap()}
            onChange={handleChangeCumRap}
            placeholder='Chọn Cụm Rạp'
          />
        </Form.Item>

        <Form.Item label="Ngày Chiếu Giờ Chiếu" name="ngayChieuGioChieu">
          <DatePicker
            showTime
            onChange={handleDatePicker}
            format="DD/MM/YYYY hh:mm:ss"
          // onOk={onOk}
          />
        </Form.Item>

        <Form.Item label="Giá Vé" name='giaVe'>
          <InputNumber min={75000} max={150000} defaultValue={75000} onChange={handleChangeInputNumber} />
        </Form.Item>

        <Form.Item label="Action">
          <Button htmlType='submit' className='bg-blue-500 text-white'>Tạo Lịch Chiếu</Button>
        </Form.Item>
      </Form>
    </>
  )
}
