import React, { useEffect, Fragment } from 'react';
import { Button, Table } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined, SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import { Input} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { actFetchDashboard, actFetchDeleteFilmDashboard } from './duckDashboard/actDashboard';
const { Search } = Input;
const suffix = (
  <AudioOutlined style={{ fontSize: 16, color: '#1677ff', }} />
);

export default function Dashboard() {
  const arrFilmDefaulft  = useSelector(state => state.dashboardReducer.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchDashboard());
  }, [])


  const onSearch = (value) => {
    // gọi api lấy danh sách phim
    dispatch(actFetchDashboard(value));
  };


  const columns = [
    {
      title: 'Tên Phim',
      dataIndex: 'tenPhim',
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: '30%',
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA < tenPhimB) {
          return 1
        }
        return -1
      },
    },
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: '10%'
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      render: (text, films) => {
        return <Fragment>
          <img src={films.hinhAnh} alt={films.biDanh} key={films.maPhim} width={50} height={50} onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://inthienha.com/wp-content/uploads/CGV-Cinemas.png";
          }} />
        </Fragment>
      },
      width: '10%',
    },
    {
      title: 'Mô Tả',
      dataIndex: 'moTa',
      sorter: (a, b) => a.moTa - b.moTa,
      sortDirections: ["descend", "ascend"],
      width: '35%',
      render: (words, films) => {
        return <Fragment>
          {films.moTa.length > 40 ? films.moTa.substr(0, 40) + '...' : films.moTa}
        </Fragment>
      }
    },
    {
      title: 'Action',
      dataIndex: 'hanhDong',
      render: (words, films) => {
        return <Fragment>
          <NavLink key={1} to={`/admin/films/edit-film/${films.maPhim}`}>
            <EditOutlined className='p-2 text-green-600 text-lg text-right' />
          </NavLink>
          <span className='cursor-pointer' key={6} onClick={() => {
            //gọi action xóa
            if (window.confirm(`Bạn chắc chắn xóa Phim ${films.tenPhim} này!?`)) {
              //gọi action Xóa phim
              dispatch(actFetchDeleteFilmDashboard(films.maPhim));
            }
          }}>
            <DeleteOutlined className='p-2 text-red-700 text-lg text-right' />
          </span>
          <NavLink key={2} to={`/admin/films/show-time/${films.maPhim}`}>
            <CalendarOutlined />
          </NavLink>
        </Fragment>
      },
      width: '15%'
    }
  ];
  const data = arrFilmDefaulft;
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div>
      <h3 className='text-left mb-1 text-2xl font-bold'>Quản lý Phim</h3>
      <Button className='mb-2' onClick={() => {
        navigate('/admin/films/add-film')
      }}>Thêm Phim</Button>
      <Search
        style={{ backgroundColor: "black", borderRadius: "5px" }}
        placeholder="input search text"
        allowClear
        enterButton={<SearchOutlined className='pb-2' />}
        size="large"
        onSearch={onSearch}
        className='mt-2 mb-4'
      />
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"} />
    </div>
  )
}
