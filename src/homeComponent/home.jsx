import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const products = [
    { name: "Wooden Car", price: "$15.00" },
    { name: "Kids Tool Box", price: "$24.00" },
    { name: "Rocking Stacker", price: "$18.00" },
  ];

  return (
    <div className="Home">
      <header>
        <div class="logo">
          PL<span class="a">A</span>YGR<span class="o">O</span>UND
        </div>
        <button className="menu-toggle" onClick={toggleNav}>
          Menu
        </button>
        <nav className={`nav-links ${isNavOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeNav}>
            Home
          </a>
          <a href="#shop" onClick={closeNav}>
            Shop
          </a>
          <a href="#about" onClick={closeNav}>
            About
          </a>
          <a href="#contact" onClick={closeNav}>
            Contact
          </a>
          <a href="#login" onClick={closeNav} class="login-link">
            Log in
          </a>
          <a href="#cart" onClick={closeNav}>
            Cart
          </a>
        </nav>
      </header>

      <section className="hero-grid">
        <div className="hero-main">
          <div className="hero-content">
            <h1>HOP ON BOARD</h1>
          </div>
          <p className="hero-p">With our new train collection</p>
          <button>Shop Now</button>
        </div>
        <div className="about-playground">
          <div className="playground-content">
            <h2>About the Playground</h2>
            <button>Our Story</button>
          </div>
        </div>
        <div className="colorful-toy"></div>
      </section>

      <section className="discount-section">
        <div className="discount-image"></div>
        <div className="discount-text">
          <div className="discount-content">
            <h2>20% Discount on All Toy Trains</h2>
            <button>Shop Now</button>
          </div>
        </div>
      </section>

      <section className="latest-arrivals">
        <h2>OUR LATEST ARRIVALS</h2>
        <div className="arrivals-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image"></div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Playground</h3>
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
            <p>123-456-7890</p>
          </div>
          <div className="footer-column">
            <h3>Visit</h3>
            <p>Shop</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="footer-column">
            <h3>Information</h3>
            <p>FAQ</p>
            <p>Shipping & Returns</p>
            <p>Store Policy</p>
            <p>Payment Methods</p>
          </div>
          <div className="footer-column">
            <h3>Social</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Pinterest</p>
          </div>
        </div>
        <div className="newsletter">
          <div className="newsletter-content">
            <h3>KEEP PLAYING</h3>
            <p>Join Our Newsletter</p>
          </div>
          <div className="newsletter-input">
            <input
              type="email"
              placeholder="Enter your email here*"
              style={{ width: "95%", overflow: "hidden" }}
            />
            <button>Subscribe Now</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
