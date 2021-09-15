import React from 'react';
import tahirimg from './Images/tahir3.jpg';
 
const Home = () => {
    return (
        <>
          <div id="homePage">
             <div className="showCase">
             <h1>Tahir Tech</h1>
              <h2>FrontEnd Developer</h2>
              <p>Hy, This is Tahir in My Porfolio</p>
             </div>
             <div className="main_body">
                <h2>My PortFolio</h2>

                <img src={tahirimg} alt="" className="img" />
                <p>I am a Front End Web Developer.</p>
                <p>Bs Honors Information Technology</p>
             </div>
          </div>
        </>
    );
}

export default Home;