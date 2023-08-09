import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { GROUPID } from '../../../../utils/_constantUtils';
import {actFetchAddUser} from './duckAddUser/actAddUser'

const { Option } = Select;

export default function AddUser() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: GROUPID,
            hoTen: "",
            maLoaiNguoiDung: ''
        },
        onSubmit: values => {
            console.log(values);
            dispatch(actFetchAddUser(values));
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

                name="taiKhoan"
                label="Tài Khoản"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Please input your Account!', whitespace: true }]}
            >
                <Input name='taiKhoan' onChange={formik.handleChange}/>
            </Form.Item>

            <Form.Item

                name="email"
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
                <Input onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item

                name="matKhau"
                label="Mật Khẩu"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password onChange={formik.handleChange} />
            </Form.Item>


            <Form.Item

                name="hoTen"
                label="Họ Tên"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Please input your full name!', whitespace: true }]}
            >
                <Input onChange={formik.handleChange} />
            </Form.Item>


            <Form.Item

                name="soDt"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input onChange={formik.handleChange} style={{ width: '100%' }} />
            </Form.Item>


            <Form.Item
                name="maLoaiNguoiDung"
                label="Mã Loại Người Dùng"
                rules={[{ required: true, message: 'Please select Mã Loại Người Dùng!' }]}
            >
                <Select placeholder="select your Mã Loại Người Dùng" onChange={handleChangeSelectOption('maLoaiNguoiDung')}>
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
