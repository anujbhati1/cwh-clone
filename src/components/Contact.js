import React from 'react';
import clogo from './p3_logo_footer.png'

export default function Contact() {
  return (
    <div className='p-5 bg-light shadow p-3 mb-5 rounded'>
      <section className="mb-4">
        <div className="row">
            <div className="col-md-5 text-center">
            <h2 className='fw-bold text-center'>Lets talk about everything!</h2>
            <img src={clogo} alt="logo" className='my-3' />
            <h2 className='fs-4 my-3'>Feel free to ask us anything!</h2>
            <h3 className='fs-6 fw-normal '>Have doubt or suggestion to make? Feel free to ask anything. If you have any suggestions, please let me know. Your suggestions are highly appreciated. I appreciate your time and try hard to reply to every single message posted here! Keep dropping your priceless opinions.</h3>
          </div>
          {/*Grid column*/}
          <div className="col-md-6 mb-md-0 mb-5 ms-auto">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              {/*Grid row*/}
              <div className="row my-3">
                {/*Grid column*/}
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label htmlFor="name" className="text-uppercase">full name</label>
                    <input type="text" id="name" name="name" className="form-control " />
                  </div>
                </div>
                </div>
                <div className="row my-3">
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-12 my-3">
                  <div className="md-form">
                    <label htmlFor="email" className="text-uppercase">email</label>
                    <input type="text" id="email" name="email" className="form-control" />
                  </div>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row">
                <div className="col-md-12 my-3">
                  <div className="md-form">
                    <label htmlFor="subject" className="text-uppercase">phone</label>
                    <input type="number" id="subject" name="subject" className="form-control" />
                  </div>
                </div>
              </div>
              {/*Grid row*/}
              <div className="row my-3">
                {/*Grid column*/}
                <div className="col-md-12">
                  <div className="md-form">
                    <label className='text-uppercase' htmlFor="message">message</label>
                    <textarea type="text" id="message" name="message" rows={5} className="form-control md-textarea " defaultValue={""} />
                  </div>
                </div>
              </div>
              {/*Grid row*/}
            </form>
            <div className="text-center text-md-left mt-5">
                <div className="d-grid gap-2">
                    <button className="btn btn-primary btn-lg" type="button">Send</button>
                </div>
            </div>
            <div className="status" />
          </div>
        </div>
      </section>
    </div>
  )
}
