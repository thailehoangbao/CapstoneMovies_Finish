import React, { Fragment, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { TeamOutlined, FileOutlined, DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SubMenu from 'antd/es/menu/SubMenu';
import { USER_LOGIN } from '../../utils/_constantUtils';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actLogoutAuthPage, actTryLogin } from './AuthPage/duckAuthPage/actAuthPage';
const { Header, Content, Footer, Sider } = Layout;

export default function AdminTemplates() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(actTryLogin(navigate));
    },[])
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    // kiểm tra đăng nhập?
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Navigate to="/auth" replace />
    }
    return (
        <div>
            <Layout style={{ minHeight: '100vh', }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="demo-logo-vertical" >
                        <img src="https://inthienha.com/wp-content/uploads/CGV-Cinemas.png" alt="logo" />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                        <Menu.Item key={1} icon={<PieChartOutlined />}>
                            <NavLink to="/admin/dashboard">
                                Dashboard
                            </NavLink>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<DesktopOutlined />} title="Films">
                            {/* <Menu.Item key={10} icon={<FileOutlined />}>
                                <NavLink to="/admin/films/edit-film/:id">
                                    Edit Film
                                </NavLink>
                            </Menu.Item> */}
                            <Menu.Item key={11} icon={<FileOutlined />}>
                                <NavLink to="/admin/films/add-film">
                                    Add Film
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key={3} icon={<TeamOutlined />} title="User">
                            <Menu.Item key={12} icon={<UserOutlined />}>
                                <NavLink to="/admin/user/add-user">
                                    Add User
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key={13} icon={<UserOutlined />}>
                                <NavLink to="/admin/user/edit-user">
                                    Edit User
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer, textAlign: "right" }} >
                        <span className='font-bold mr-2 text-lg' >LogOut</span>
                        <button className='mr-5 mt-5' onClick={() => {
                            dispatch(actLogoutAuthPage(navigate));
                        }}>
                            <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                        </button>
                    </Header>
                    <Content style={{ margin: '0 16px', }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', padding: "20px" }}>
                        Ant Design ©2023 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}
