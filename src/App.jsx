import bg1 from './img/bg1.jpg'
import bg2 from './img/bg2.jpg'
import bg3 from './img/bg3.jpg'
import bg4 from './img/bg4.jpg'
import bg5 from './img/bg5.jpg'
import bg6 from './img/bg6.jpg'
import bg7 from './img/bg7.jpg'
import bg8 from './img/bg8.jpg'
import bg9 from './img/bg9.jpg'
import bga from './img/bga.jpg'
import bgj from './img/bgj.jpg'
import more from './img/more.svg'
import bgv from '/bgvideo.mp4'
import './App.css'
import './Menu.css'
import Navbar from './Navbar';
import ImageGrid from "./ImageGrid";
import React, { useState, useEffect, useRef } from "react";
import Loader from "./Loader";
import "./App.css";

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const trackRef = useRef();


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const cards = Array.from(track.querySelectorAll(".place-card"));
    for (let i = 0; i < 2; i++) {
      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
      });
    }
  }, []);
  return (
    <>
      <div className="app-container">
        {showLoader && <Loader />}
        <div className={`app-content ${showLoader ? "hidden-behind" : ""}`}>
        </div>
      </div>

      <video className='videoTag' autoPlay loop muted>
        <source src={bgv} type='video/mp4' />
      </video>

      <Navbar />

      <main style={{ padding: '20px', textAlign: 'center', marginTop: '80px' }}>
        <h1 style={{ paddingBottom: '20px' }}>TravSmart: Make A Start & Travel Smart</h1>
        <p>“Travel isn’t always about running away from something; sometimes it’s about running towards something. Towards growth, towards discovery, towards becoming the person you were always meant to be. With every new place, you leave a piece of yourself behind and take a piece of the world with you.”</p>
        <p style={{ paddingBottom: '20px' }}>Hidden trails, untouched beauty, and places you've never heard of — until now.</p>
      </main>

      <div className="slider-box">
        <div className="slider">
          <div className="slide-track" ref={trackRef}>
            {images.concat(images).map((img, index) => (
              <div className="slide" key={index}>
                <img src={img} alt={`slide-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="App">
        <h1 style={{ padding: '20px', textAlign: 'center', marginTop: '20px' }}>Tired of the crowds?</h1>
        <div className="text">
          <div className="onetext">
            <h2>Dzukou Valley</h2>
            <p>Dzukou Valley, nestled on the border of Nagaland and Manipur, is a serene paradise known for its rolling green hills and vibrant seasonal flowers, especially the rare Dzukou Lily. Often called the "Valley of Flowers of the Northeast," it offers breathtaking views and peaceful trekking trails untouched by crowds.
            </p>
          </div>
          <div className="onetext">
            <h2>Umrangso</h2>
            <p>It’s best known for the Kopili and Umrong reservoirs—perfect for boating amid scenic vistas—and the annual Falcon Festival, celebrating the migration of Amur falcons with music, culture, and eco-awareness at the golf-course-turned‑festival-ground</p>
          </div>
          <div className="onetext">
            <h2>Spiti Valley</h2>
            <p>Spiti Valley, located in Himachal Pradesh, is a cold desert mountain valley known for its dramatic landscapes, ancient monasteries, and crystal-clear skies. Surrounded by the mighty Himalayas, it's a haven for trekkers, bikers, and seekers of solitude. Often called "Little Tibet," Spiti offers raw, untouched beauty at every turn.
            </p>
          </div>
          <div className="onetext">
            <h2>Kolli Hills</h2>
            <p>Kolli Hills, nestled in Tamil Nadu’s Eastern Ghats, is a hidden gem known for its lush forests, hairpin bends, and mystical charm. The hills are home to the stunning Agaya Gangai Waterfalls and ancient temples like Arapaleeswarar. It's a perfect escape for nature lovers and adventure seekers.
            </p>
          </div>
        </div>
      </div>
      <ImageGrid />

      <h1 style={{ padding: '10px', textAlign: 'center', marginTop: '40px' }}>Our Team</h1>
      <div className="myteam">
        <div className="ok">

          <div className="students">
            <div className="left">
              <img src={bga} alt="bga" className="avatar" />
              <div className="name">
                <h3>Anish Sasmal</h3>
                <h6>SE-COMP-C-32</h6>
              </div>
            </div>
            <div className="right"><img src={more} alt="" /></div>
            <div className="popup"><img src={bga} alt="popup" /></div>
          </div>

          <div className="students">
            <div className="left">
              <img src={bgj} alt="bgj" className="avatar" />
              <div className="name">
                <h3>Jayaditya Saloi</h3>
                <h6>SE-COMP-C-31</h6>
              </div>
            </div>
            <div className="right"><img src={more} alt="" /></div>
            <div className="popup"><img src={bgj} alt="popup" /></div>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
