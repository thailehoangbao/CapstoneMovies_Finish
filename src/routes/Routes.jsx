import { lazy } from 'react';
import { Route } from 'react-router-dom';

const routes = [
    {
        path: '',
        element: lazy(() => import('./../pages/HomeTemplates')),
        nested: [
            { path: "", element: lazy(() => import("../pages/HomeTemplates/LichChieu")), },
            { path: "rap", element: lazy(() => import("../pages/HomeTemplates/HeThongRap")), },
            { path: "tuyen-dung", element: lazy(() => import("../pages/HomeTemplates/TuyenDung")), },
            { path: "chi-tiet/:id", element: lazy(() => import("../pages/HomeTemplates/ChiTietPhim")), },
        ]
    },
    { path: "dat-ve/:id", element: lazy(() => import("../pages/HomeTemplates/DatVe")), },
    
    { path: "dangky", element: lazy(() => import("./../pages/HomeTemplates/DangKy")), },
    
    { path: "dangnhap", element: lazy(() => import("./../pages/HomeTemplates/DangNhap")), },
    {
        path: 'admin',
        element: lazy(() => import('./../pages/AdminTemplates/AdminTemplates')),
        nested: [
            {
                path: 'dashboard',
                element: lazy(() => import('./../pages/AdminTemplates/Dashboard/Dashboard')),
            },
            {
                path: 'films',
                element: lazy(() => import('./../pages/AdminTemplates/FilmsAdmin/FilmsAdmin')),
                nested: [
                    {
                        path: 'add-film',
                        element: lazy(() => import('./../pages/AdminTemplates/FilmsAdmin/AddFilm/AddFilm'))
                    },
                    {
                        path: 'edit-film/:id',
                        element: lazy(() => import('../pages/AdminTemplates/FilmsAdmin/EditFilm/EditFilm'))
                    },
                    {
                        path: 'show-time/:id',
                        element: lazy(() => import('../pages/AdminTemplates/ShowTime/ShowTime')),
                    },
                ]
            },
            {
                path: 'user',
                element: lazy(() => import('../pages/AdminTemplates/User/UserAdmin')),
                nested: [
                    {
                        path: 'add-user',
                        element: lazy(() => import('../pages/AdminTemplates/User/AddUser/AddUser'))
                    },
                    {
                        path: 'edit-user',
                        element: lazy(() => import('../pages/AdminTemplates/User/EditUser/EditUser'))
                    },
                ]
            },
        ]
    },
    {
        path: 'auth',
        element: lazy(() => import('../pages/AdminTemplates/AuthPage/AuthPage'))
    },
]


const renderRoutes = () => {
    return routes.map((route, index) => {
        if (route.nested) {
            return <Route key={index} path={route.path} element={<route.element />}>
                {route.nested.map((item, i) => {
                    if (item.nested) {
                        return <Route key={i} path={item.path} element={<item.element />}>
                            {item.nested.map((child, ii) => {
                                return <Route key={ii} path={child.path} element={<child.element />}>

                                </Route>
                            })}
                        </Route>
                    } else {
                        return <Route key={i} path={item.path} element={<item.element />}>

                        </Route>
                    }
                })}
            </Route>
        } else {
            return <Route key={index} path={route.path} element={<route.element />}>

            </Route>
        }
    })
}


{/* <Routes>
    <Route path="" element={<HomeTemplate />}>
        <Route path="" element={<HomePage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="list-movie" element={<ListMoviePage />}></Route>
    </Route>

    <Route path='admin' element={<AdminTemplate />}>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path='add-user' element={<Adduser />}></Route>
    </Route>
</Routes> */}

export default renderRoutes;