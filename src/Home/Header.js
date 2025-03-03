import React from "react";
import "./Headers.css"; // Add styles separately in CSS
import nature from "./Image/81300d442de5c2dcacdd27bbfd8cab9b.png"
import eight from "./Image/3.jpg"
import one from "./Image/1.jpg"
import two from "./Image/4.jpg"
import three from "./Image/6.jpg"


const Header = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          {/* <img src={Heading} alt="Organic Bee Logo" /> */}
          <span>Organic Bee</span>
        </div>
        <ul className="nav-links">
          <li className="line"><a href="#home" className="active">Home</a></li>
          <li className="line"><a href="#about">About</a></li>
          <li ><a href="#products">Products</a></li>
          
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="photo" >
      <div className="nature">
      <header className="hero">
        <div className="hero-content">
          <h1>Natural Organic Honey Extract</h1>
          <p>
            Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus. Donec pharetra
            faucibus leo, vitae vestibulum leo scelerisque eu.
          </p>
        </div>
        <img src={nature} alt="Honey Jar" className="hero-image" />
      </header>
    </div>
    </div>
      
               
      {/* About Section */}
      <section className="about" id="about">
        
        <div className="about-content">
          
          <h2>About Us</h2>
        <p>
            Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio,
            luctus viverra sem dolor id sem.
          </p>
        </div>
      
               
      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>Our vision statement here.</p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>Our mission statement here.</p>
        </div>
      </section>
      </section>
      {/* Products Section */}
      <section className="products" id="products">
        <h2>Our Products</h2>
        <div className="product-list">
          <div className="product">
            <img src={eight}></img>
            <p>Raw Heather Honey</p>
          </div>
          <div className="product">
            <img src={one}></img>
            <p>Raw Wildflower Honey</p>
          </div>
          <div className="product">
            <img src={two} alt="two"></img>
            <p>Raw Linden Honey</p>
          </div>
          <div className="product">
            <img src={three} alt="three"></img>
            <p>Raw Forest Honey</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;