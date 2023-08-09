import React from 'react';
import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { GROUPID, USER_LOGIN } from '../../../../utils/_constantUtils';
import { actFetchEditUser } from './duckEditUser/actEditUser';


const { Option } = Select;

export default function EditUser() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem(USER_LOGIN));
    console.log(user);
    const formik = useFormik({
        initialValues: {
            taiKhoan: user?.taiKhoan || '',
            matKhau: user?.matKhau || '',
            email: user?.email || '',
            soDt: user?.soDT || '',
            maNhom: GROUPID,
            hoTen: user?.hoTen || '',
            maLoaiNguoiDung: user?.maLoaiNguoiDung || ''
        },
        onSubmit: values => {
            console.log("value",values);
            dispatch(actFetchEditUser(values));
        },
    });

    const handleChangeSelectOption = (name) => {
        return (value) => { formik.setFieldValue(name, value) }
    }


    return (
        <Form
            onSubmitCapture={formik.handleSubmit}
            form={form}
            style={{ maxWidth: 600 }}
            scrollToFirstError
        >
            <Form.Item
                label="Tài Khoản"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Please input your Account!', whitespace: true }]}
            >
                <Input name="taiKhoan" onChange={formik.handleChange} value={formik.values.taiKhoan}/>
            </Form.Item>

            <Form.Item
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input name="email" onChange={formik.handleChange} value={formik.values.email} />
            </Form.Item>

            <Form.Item
                label="Mật Khẩu"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password name="matKhau" onChange={formik.handleChange} value={formik.values.matKhau} />
            </Form.Item>


            <Form.Item
                
                label="Họ Tên"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Please input your full name!', whitespace: true }]}
            >
                <Input name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen} />
            </Form.Item>


            <Form.Item
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input name="soDt" onChange={formik.handleChange} style={{ width: '100%' }} value={formik.values.soDt} />
            </Form.Item>


            <Form.Item
                label="Mã Loại Người Dùng"
                rules={[{ required: true, message: 'Please select Mã Loại Người Dùng!' }]}
            >
                <Select placeholder="select your Mã Loại Người Dùng" value={formik.values.maLoaiNguoiDung} onChange={handleChangeSelectOption('maLoaiNguoiDung')}>
                    <Option value="KhachHang">Khách Hàng</Option>
                    <Option value="QuanTri">Quản Trị</Option>
                </Select>
            </Form.Item>

            <Form.Item >
                <button className='p-2 bg-blue-600 text-white rounded-md' onChange={formik.handleSubmit}>Submit</button>
            </Form.Item>
        </Form>
    )
}
