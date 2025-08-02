import { useEffect, useRef, useState } from "react";
import "./ImageGrid.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import bg1 from './img/bg1.jpg';
import bg2 from './img/bg2.jpg';
import bg3 from './img/bg3.jpg';
import bg4 from './img/bg4.jpg';
import bg5 from './img/bg5.jpg';

import bg10 from './img/bg10.jpg';
import bg11 from './img/bg11.jpg';
import bg12 from './img/bg12.jpg';
import bg13 from './img/bg13.jpg';

import bg15 from './img/bg15.jpg';
import bg16 from './img/bg16.jpg';
import bg17 from './img/bg17.jpg';
import bg18 from './img/bg18.jpg';
import bg19 from './img/bg19.jpg';

const ImageGrid = () => {
  const itemsRef = useRef([]);
  const extraRef = useRef([]);

  const slideshow1 = [bg1, bg2, bg3];
  const slideshow2 = [bg15, bg16, bg17, bg18, bg19];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    [...itemsRef.current, ...extraRef.current].forEach(el => el && observer.observe(el));
    return () => {
      [...itemsRef.current, ...extraRef.current].forEach(el => el && observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const timer1 = setInterval(() => setIndex1(i => (i + 1) % slideshow1.length), 4000);
    const timer2 = setInterval(() => setIndex2(i => (i + 1) % slideshow2.length), 5000);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <div className="wrapper">
        <h1 style={{ padding: '20px', textAlign: 'center', margin: '20px' }}>Unheard, Untouched – Locations not found in typical travel guides.</h1>
      <div className="parent">
        <div ref={(el) => itemsRef.current[0] = el} className="grid-item slideshow div1">
          <img src={slideshow1[index1]} alt="slideshow1" />
          <div className="controls">
            <button onClick={() => setIndex1((index1 - 1 + slideshow1.length) % slideshow1.length)}><FaArrowLeft /></button>
            <button onClick={() => setIndex1((index1 + 1) % slideshow1.length)}><FaArrowRight /></button>
          </div>
        </div>
        <div ref={(el) => itemsRef.current[1] = el} className="grid-item div2"><img src={bg4} alt="bg4" /></div>
        <div ref={(el) => itemsRef.current[2] = el} className="grid-item div3"><img src={bg5} alt="bg5" /></div>
        <div ref={(el) => itemsRef.current[3] = el} className="grid-item div4"><img src={bg2} alt="bg4" /></div>
        <div ref={(el) => itemsRef.current[4] = el} className="grid-item div5"><img src={bg1} alt="bg5" /></div>
      </div>

        <h1 style={{ padding: '20px', textAlign: 'center', margin: '20px' }}>Curated by Locals – Real insights from people who live there.</h1>
      <div className="parent2">
        <div ref={(el) => extraRef.current[0] = el} className="grid-item div7"><img src={bg10} alt="bg10" /></div>
        <div ref={(el) => extraRef.current[1] = el} className="grid-item div8"><img src={bg11} alt="bg11" /></div>
        <div ref={(el) => extraRef.current[2] = el} className="grid-item slideshow div9">
          <img src={slideshow2[index2]} alt="slideshow2" />
          <div className="controls">
            <button onClick={() => setIndex2((index2 - 1 + slideshow2.length) % slideshow2.length)}><FaArrowLeft /></button>
            <button onClick={() => setIndex2((index2 + 1) % slideshow2.length)}><FaArrowRight /></button>
          </div>
        </div>
        <div ref={(el) => extraRef.current[3] = el} className="grid-item div10"><img src={bg12} alt="bg12" /></div>
        <div ref={(el) => extraRef.current[4] = el} className="grid-item div11"><img src={bg13} alt="bg13" /></div>
      </div>
    </div>
  );
};

export default ImageGrid;

