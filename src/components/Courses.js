import React from 'react';
import limg from "./p3_left_c2img.png";
import cimg from "./p3_center_c2img.png";
import rimg from "./p3_right_c2img.png";

export default function Courses() {
  return (
    <div className="my-4 py-4">
          <div className="d-flex flex-column justify-content-md-center align-items-center flex-md-row">
            <div
              className="card m-2"
              style={{ width: "22rem", minHeight: "27rem" }}
            >
              <img src={limg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tailwind Course In Hindi</h5>
                <p className="card-text">
                  Complete Tailwind CSS Course by CodeWithHarry in Hindi - Learn
                  Tailwind CSS from scratch for free!
                </p>
                <a
                  href="#"
                  className="btn btn-primary position-absolute bottom-0 start-0 mx-4 my-4"
                >
                  Start Watching
                </a>
              </div>
            </div>
            <div
              className="card m-2"
              style={{ width: "22rem", minHeight: "27rem" }}
            >
              <img src={cimg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Next.js Tutorials For Beginners</h5>
                <p className="card-text">
                  Complete Next.js Course by CodeWithHarry in Hindi - Learn
                  Next.js from Scratch.
                </p>
                <a
                  href="#"
                  className="btn btn-primary position-absolute bottom-0 start-0 mx-4 my-4"
                >
                  Start Watching
                </a>
              </div>
            </div>
            <div
              className="card m-2"
              style={{ width: "22rem", minHeight: "27rem" }}
            >
              <img src={rimg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">React Js Tutorials For Beginners</h5>
                <p className="card-text">
                  React is a free and open-source front-end JavaScript library.
                  This series will cover React from starting to the end. We will
                  learn react from the ground up!
                </p>
                <a
                  href="#"
                  className="btn btn-primary position-absolute bottom-0 start-0 mx-4 my-4"
                >
                  Start Watching
                </a>
              </div>
            </div>
          </div>
        </div>
  )
}
