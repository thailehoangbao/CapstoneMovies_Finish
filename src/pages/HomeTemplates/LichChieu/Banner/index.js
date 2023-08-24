import React, { Component } from 'react';
import { actFetchBanner } from './duck/actions.js';
import { connect } from 'react-redux';

class Banner extends Component {
    componentDidMount() {
        this.props.FetchBanner();
    }

    renderBanner = () => {
        const { data } = this.props;
        console.log(data);
        return data?.map((banner) => {
        return (
            <div className={banner.maBanner === 1 ? "carousel-item active": "carousel-item"}>
                <img className='image-banner'  src={banner.hinhAnh} alt />
            </div>
        )
        }
        )
    }
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>

                <div className="carousel-inner">
                    {this.renderBanner()}
                </div>


                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.bannerReducer.loading,
        data: state.bannerReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FetchBanner: () => {
            dispatch(actFetchBanner())
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Banner);