import React from 'react';
import logo from './p3_logo_footer.png';

export default function Login() {
  return (
    <div className='container'>
      <section className="vh-90" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: '1rem'}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1" alt="login form" className="img-fluid h-100" style={{borderRadius: '1rem 0 0 1rem'}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center justify-content-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />
                          <span className="h1 fw-bold mb-0"><img src={logo} /></span>
                        </div>
                        <div className='text-center mb-4 '>
                        <h2 className=" h2" >CodeWithHarry.com</h2>
                        <p className='h4 fw-normal'>Welcome back!</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <span className='text-uppercase'><a className='text-decoration-none text-secondary' href="#!">or login with email</a></span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example17">Email address</label>
                          <input type="email" id="form2Example19" className="form-control form-control-lg bg-light" />
                        </div>
                        <div className="form-outline mb-4">
                            <div className='d-flex justify-content-between'>
                                <label className="form-label" htmlFor="form2Example27">Password</label>
                                <a className="small text-muted text-decoration-none " href="#!">Forgot password?</a>
                          </div>
                          <input type="password" id="form2Example27" className="form-control form-control-lg bg-light" />
                        </div>
                        <div className="pt-1 mb-4">
                            <div className="d-grid gap-2">
                                <button className="btn btn-secondary btn-lg" type="button">Login</button>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <span className='text-uppercase'><a className='text-decoration-none text-secondary' href="#!">or signup</a></span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
