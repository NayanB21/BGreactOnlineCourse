import { useState } from "react";

import p1 from "/src/pic1.png";
import p2 from "/src/pic2.png";
import p3 from "/src/pic3.png";
import p4 from "/src/pic4.png";
import p5 from "/src/pic5.png";
import p7 from "/src/pic7.png";



import ImageSlider from "/src/ImageSlider.jsx";
import ReactDOM from "react-dom";

import "./App.css";

const images = [
  "https://wallpapercave.com/wp/wp2768326.jpg",
  " https://wallpapercave.com/wp/wp2768272.jpg",
  "https://wallpaperaccess.com/full/4524219.jpg",
];

function App() {
  return (
    <div className="App">
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
      </div>

      <div>
        <div
          className="parallax1"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/736x/e4/22/f2/e422f2bb83725787f21bbbe0778fccb0.jpg)",
            margin: "-10px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                {/* Logo Section */}

                <div className="logo" style={{ margin: "3%" }}>
                  <img src={p7} alt="Logo" height={70} />
                  <br />
                </div>
              </div>

              {/* Navigation and Search Box */}
              <div className="col-sm-5">
               
                  {/* Buttons for Register, Login, Sign Up, Sign In */}
                  <button
                    className="btn btn-outline-light mx-2"
                    type="button"
                    
                  >
                    Register
                  </button>
                  <button className="btn btn-outline-light mx-2" type="button">
                    Login
                  </button>
                  <button className="btn btn-outline-light mx-2" type="button">
                    Sign Up
                  </button>
                  <button className="btn btn-outline-light mx-2" type="button">
                    Sign In
                  </button>
                
              </div>
              {/* Search Box */}
              <div className="col-sm-3" style={{padding:"40px"}}>
                <div className="search-box d-flex ms-3">
                  <input
                    type="text"
                    className="form-control rounded-start"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <button className="btn btn-success rounded-end" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h1
            style={{
              color: "rgb(28, 30, 30)",
              textAlign: "center",
              fontSize: 50,
              fontFamily: "georgia, Times, serif",
            }}
          >
            COURSE ON INDIAN SPIRITUAL AND CULTURAL HERITAGE
          </h1>
          <h1
            style={{
              color: "rgb(28, 30, 30)",
              textAlign: "center",
              fontSize: 100,
              fontFamily: "georgia, Times, serif",
            }}
          >
            BHAGAVAD GITA
          </h1>
        </div>

        <div className="parallax2">
          <br />
          <br />
          <br />
          <ImageSlider images={images} />
          <br />
          <br />
          <br />
        </div>

        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img src={p1} width="100%" alt="hari bol" />
            </div>
            <div className="col-sm-6">
              <div className="col-sm-2" style={{ fontSize: 20 }}>
                <img src={p2} width="100%" />
              </div>
              <div className="col-sm-10" style={{ fontSize: 20 }}>
                <h1>Experienced Teachers</h1>
                <p>
                  {" "}
                  Teachers practising principles of Bhagavad Gita in their life
                  from years. Leading the participants by Ideal behaviour and
                  dealings.
                </p>
              </div>
              <div className="col-sm-2">
                <img src={p3} width="100%" />
              </div>
              <div className="col-sm-10" style={{ fontSize: 20 }}>
                <h1>Totally Free Online Gita Course</h1>
                <p>
                  Quest team is working hard to keep this course totally free,
                  we want this knowledge of Gita to reach every nook and corner
                  of the world.
                </p>
              </div>
              <div className="col-sm-2">
                <img src={p4} width="100%" />
              </div>
              <div className="col-sm-10" style={{ fontSize: 20 }}>
                <h1> STeam of IITians</h1>
                <p>
                  {" "}
                  We have best of the brilliant brains of our nation, engaging
                  the cutting edge technology in the service of humanity.
                </p>
              </div>
              <div className="col-sm-2">
                <img src={p5} width="100%" />
              </div>
              <div className="col-sm-10" style={{ fontSize: 20 }}>
                <h1>Personal Counselling</h1>
                <p>
                  {" "}
                  Our motto is to train individual personally in the finest
                  apects of sanatan dharma.{" "}
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="container">
            <div
              className="well well"
              style={{ textAlign: "center", fontSize: 37 }}
            >
              FREE ONLINE COURSE
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="flip-card" style={{ paddingLeft: 150 }}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="https://www.talentlms.com/blog/wp-content/uploads/2018/02/TLMS_20180205_1200x628.jpg"
                        alt="Avatar"
                        style={{ width: 300, height: 300 }}
                        id="rcorners1"
                      />
                    </div>
                    <div className="flip-card-back">
                      <img
                        src="https://cdn.elearningindustry.com/wp-content/uploads/2015/04/eLearning-Course-Evaluation-e1475227359121-800x448.jpeg"
                        style={{ width: 300, height: 300 }}
                        id="rcorners1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        id="rcorners1"
                        src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/d/f/dfc6aea750716c23c0acdab8b722faaf7ec4f00d84a3908b532ffa0e4ee067d6/key-points-slide6.png"
                        alt="Avatar"
                        style={{ width: 300, height: 300, textAlign: "right" }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <img
                        id="rcorners1"
                        src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/c/1/c13679f161d37426a80271b07233d27b41f112fed40aecae89157611b2ee6b8d/key-points-slide5.png"
                        style={{ width: 300, height: 300 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-6" style={{ paddingLeft: 150 }}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      id="rcorners1"
                      src="https://classey.co/storage/uploads/store_logo/blog_1706004343.jpg"
                      alt="Avatar"
                      style={{ width: 300, height: 300 }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      id="rcorners1"
                      src="https://bestfreelancesites.com/wp-content/uploads/2022/08/baergdbhjdsc-1000x600.jpg"
                      style={{ width: 300, height: 300 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      id="rcorners1"
                      src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/d/f/dfc6aea750716c23c0acdab8b722faaf7ec4f00d84a3908b532ffa0e4ee067d6/key-points-slide6.png"
                      alt="Avatar"
                      style={{ width: 300, height: 300 }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      id="rcorners1"
                      src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/c/1/c13679f161d37426a80271b07233d27b41f112fed40aecae89157611b2ee6b8d/key-points-slide5.png"
                      style={{ width: 300, height: 300 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
