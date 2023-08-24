import React, { Component } from 'react';
import "./style.css";

export default class TinTuc extends Component {
  render() {
    return (
      <div className='tuyenDung'>
        <div className='container'>
          <div>
          <img style={{ width: "100%" }} src="https://images.careerbuilder.vn/content/images/1(32).jpg" alt="" />
          <h2 className='py-4 text-2xl' style={{ color: "red", textAlign: "center", fontWeight:"600" }}>ĐỒNG HÀNH CÙNG CGV</h2>
          <p>CJ CGV trực thuộc CJ Group, một trong những tập đoàn kinh tế đa ngành lớn nhất Hàn Quốc. CJ CGV nằm trong trong top 05 cụm rạp chiếu phim lớn nhất toàn cầu và là nhà phát hành, cụm rạp chiếu phim lớn nhất tại Việt Nam.</p>
          <h6 style={{fontSize:'18px', fontWeight:'500', padding:'10px 0'}}>Lịch sử phát triển</h6>
          <p style={{paddingBottom:'10px'}}><span style={{ fontWeight: "500" }}>2005:</span> Công ty TNHH Truyền thông Megastar (tiền thân của Công ty TNHH CJ CGV Việt Nam) được thành lập.</p>
          <hr />
          <p style={{padding:'10px 0'}}><span style={{ fontWeight: "500" }}>2014:</span> Công ty TNHH Truyền thông MegaStar đổi tên thành Công ty TNHH CJ CGV Việt Nam. Các cụm rạp chiếu phim Megastar chính thức chuyển đổi thương hiệu thành CGV Cinemas .</p>
          <p>Cùng với việc phát triển các giá trị cốt lõi về nuôi dưỡng nhân tài hàng đầu, kiến tạo văn hóa cương nhu để trở thành doanh nghiệp phong cách sống toàn cầu. CJ CGV Việt Nam mong muốn mang đến nhiều cơ hội việc làm cho các tài năng trẻ, năng động và yêu thích ngành công nghiệp điện ảnh.</p>
          <p>Chúng tôi chào đón bạn gia nhập đại gia đình CJ CGV Việt Nam thông qua các cơ hội nghề nghiệp cho cả khối văn phòng và khối cụm rạp:</p>
          </div>

          <div className='row py-4'>
            <div className='col-sm-6 text-center'>
              <h4 style={{color:"red", paddingBottom:"10px"}}>VỊ TRÍ TOÀN THỜI GIAN</h4>
              <div className='viTri'>
                <h6 style={{paddingBottom:"10px"}}>Khối Văn Phòng/ Cụm Rạp</h6>
                <p className='text-left'>
                  <span style={{ fontWeight: "500" }}>Cách 1: </span>
                  Gửi CV đến email
                  <span style={{ fontWeight: "500" }}>cgvtalent@cj.net</span> với tiêu đề "[HỌ TÊN] - Ứng tuyển [VỊ TRÍ]”.
                </p>

                <p className='text-left'>
                  <span style={{ fontWeight: "500" }}>Cách 2: </span>
                  Nộp hồ sơ trực tiếp trên các trang tuyển dụng uy tín mà CGV có đăng tuyển như Linkedin, Vietnamwork, Careerbuilder, Hoteljob, Vieclam24, TopCV ….
                </p>
              </div>
            </div>
            <div className='col-sm-6 text-center'>
              <h4 style={{color:"red", paddingBottom:"10px"}}>VỊ TRÍ BÁN THỜI GIAN</h4>
              <div className='viTri'>
                <h6 style={{paddingBottom:"10px"}}>Khối Cụm Rạp</h6>
                <p className='text-left'>
                  <span style={{ fontWeight: "500" }}>Cách 1: </span>
                  Nộp hồ sơ trực tiếp tại quầy Guest Service của cụm rạp CGV mà bạn muốn ứng tuyển.
                </p>

                <p className='text-left'>
                  <span style={{ fontWeight: "500" }}>Cách 2: </span>
                  Theo dõi thông tin tuyển dụng trên Facebook - CJ CGV Careers.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h5 style={{paddingBottom:"10px", fontWeight:'500'}}>LƯU Ý:</h5>
            <p>- CJ CGV  
              <span style={{ fontWeight: "500" }}> KHÔNG</span> thu bất kỳ chi phí tuyển dụng nào dưới mọi hình thức (phí hồ sơ, đồng phục….).</p>
              <p>- Với những vị trí cho khối Cụm Rạp, CJ CGV <span style={{ fontWeight: "500" }}>KHÔNG</span> tuyển nhân viên thông qua đơn vị khác.</p>
          </div>
        </div>
      </div>
    )
  }
}
