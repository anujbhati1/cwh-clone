import React from "react";
import pimg from "./p3img.png";
import limg from "./p3_left_c2img.png";
import cimg from "./p3_center_c2img.png";
import rimg from "./p3_right_c2img.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <div className="d-flex px-4 py-1 mx-4 align-items-center">
            <div className="w-100 mx-4 my-4">
              <div>
                <h1 className="text-md-left">
                  Welcome to{" "}
                  <span className="text-primary ">CodeWithHarry</span>
                </h1>
                <p className="text-secondary text-md-left">
                  Confused on which course to take? I have got you covered.
                  Browse courses and find out the best course for you. Its free!
                  Code With Harry is my attempt to teach basics and those coding
                  techniques to people in short time which took me ages to
                  learn.
                </p>
              </div>
              <div>
                <Link to='/courses' className="btn btn-dark mx-2 my-2">Free Courses</Link>
                <Link to='/blog' className="btn btn-secondary mx-2 my-2">
                  Explore Blog
                </Link>
              </div>
            </div>
            <div>
              <img
                src={pimg}
                alt="img"
                className="img-fluid d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block"
              />
            </div>
          </div>
        </div>
        <div className="my-4">
          <h2 className="my-4 py-4 text-center">Recommended Courses</h2>
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
        <div className="text-start d-flex flex-column px-4 py-4">
        <h2 className="text-center my-4">Testimonials</h2>
        <div className="d-flex flex-column flex-md-row justify-content-center mx-4">
          <div className="container bg-light m-1 px-4 py-4">
            ❞
            <p>
              I don't have words to thank this man, I'm really grateful to have
              this channel and website in my daily routine. If you're a mere
              beginner, then you can trust this guy and can put your time into
              his content. I can assure you that it'll be worth it.
            </p>
            <span className="d-flex flex-column align-items-start justify-content-between px-4 py-4">
              <span className="fw-bold">Mohit Kumar</span>
              <span>Web Developer</span>
            </span>
          </div>
          <div className="container bg-light m-1 px-4 py-4">
            ❞
            <p>
              For everyone who wants to level up their #Coding and #Dev skills -
              seriously, this channel is for you! Both basic and advanced stacks
              are covered on this channel, and one can learn according to his
              skill levels. And the icing on the cake is, everything is
              available for free.
            </p>
            <span className="d-flex flex-column align-items-start justify-content-between px-4 py-4">
              <span className="fw-bold">Rakesh Shetty</span>
              <span>Web Developer</span>
            </span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
