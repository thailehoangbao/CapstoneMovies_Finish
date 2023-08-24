import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Phim extends Component {
    render() {
        const { phim } = this.props;
        return (
            <div className='mb-5 mr-5'>
                <div className='card-top items'>
                    <img className="card-img-top img-fluid" src={phim.hinhAnh} alt />
                </div>
                <div className="card-body ">
                    <h5 className="card-title">
                        {phim.tenPhim.length <= 32 ? phim.tenPhim : phim.tenPhim.substr(0, 31) + "..."}
                    </h5>
                </div>
                <div>
                    <Link to={`/chi-tiet/${phim.maPhim}`} className='btn col-md-12'>MUA VÉ</Link>
                </div>

            </div>

        )
    }
}