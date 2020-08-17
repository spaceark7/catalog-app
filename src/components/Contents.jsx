import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contents.css";
import image from "../image/DI4.png";

AOS.init({ duration: 2000, delay: 400 });
const Contents = () => {
  return (
    <div id="trigger-1" className="container-fluid">
      <h1>Kenapa Harus Go DIgital?</h1>

      <div className="row ">
        <div className="col-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio
            neque, iure quisquam dolorem similique pariatur quos? A omnis soluta
            dolor perspiciatis, ullam quidem ipsum. Cupiditate, eveniet commodi.
            Incidunt, ipsum.
          </p>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-anchor="#trigger-1"
          data-aos-anchor-placement="top-center"
          className="col-4 project project1"
        ></div>
      </div>
      <div style={{ height: 200 }}></div>
      <div id="trigger-2"></div>
      <div className="row ">
        <div
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-right"
          data-aos-anchor="#trigger-2"
          className="col-6 project project2"
        ></div>
        <div className="col-6"></div>
      </div>
      <div style={{ height: 200 }}></div>
      <div id="trigger-3"></div>
      <div className="row ">
        <div className="col-7"></div>
        <div
          id="trigger-4"
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-up"
          data-aos-anchor="#trigger-3"
          className="col-4 project project3"
        ></div>

        <div style={{ height: 200 }}></div>
        <div id="trigger-3"></div>
        <div className="col-1"></div>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Contents;
