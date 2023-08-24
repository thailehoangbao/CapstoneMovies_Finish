import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <section className='border-bottom'>
          <div className='container text-center '>
            <div className='row'>
              <div className='col-md-2 col-lg-2 col-xl-2  my-4'>
                <a className="mr-5" href="#">
                  <img className='img' src="https://printgo.vn/uploads/file-logo/1/512x512.22cdafa36d7ed05664bdb0a0699771c2.ai.1.png" alt="" />
                </a>

              </div>
              <div className='col-md-4 col-lg-4 col-xl-4 my-4'>
                <h4 style={{fontSize:'20px', paddingBottom:'10px'}}>COMPANY</h4>
                <p>
                  <a className="a" href>Privacy</a>
                </p>
                <p>
                  <a className="a" href>Terms of Service</a>
                </p>
              </div>
              <div className='col-md-3 col-lg-3 col-xl-3  my-4'>
                <h4 style={{fontSize:'20px', paddingBottom:'10px'}}>DEVELOPERS</h4>
                <p>
                  <a className="a" href>Public API</a>
                </p>
                <p>
                  <a className="a" href>Documentation</a>
                </p>
                <p>
                  <a className="a" href>Guides</a>
                </p>
              </div>
              <div className='col-md-3 col-lg-3 col-xl-3  my-4'>
                <h4 style={{fontSize:'20px', paddingBottom:'10px'}}>SOCIAL MEDIA</h4>
                <div>
                  <div className='icon'>
                    <a href className="mr-4 a">
                      <i className="fab fa-facebook-f " />
                    </a>
                    <a href className="mr-4 a">
                      <i className="fab fa-twitter " />
                    </a>
                    <a href className="mr-4 a">
                      <i className="fab fa-instagram " />
                    </a>
                    <a href className="mr-4 a">
                      <i className="fab fa-google " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="copyright text-center p-4 ">
        © 1968 Company Co. All rights reserved.
         </div>

      </footer>
    )
  }
}
