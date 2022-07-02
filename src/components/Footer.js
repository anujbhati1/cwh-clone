import React from 'react';
import fimg from './p3_logo_footer.png';

export default function Footer() {
  return (
    <div>
      <footer className=" text-center text-lg-start">
        <div className="text-start p-3 d-flex flex-column flex-sm-row align-items-center">
          <img src={fimg} style={{ width: '3rem' }} className="ml-1" alt="" />
          <span className="fw-bold fs-5 px-3 navbar-brand">CodeWithHarry</span>
          Copyright © 2022 CodeWithHarry.com
        </div>
      </footer>
    </div>
  );
}
