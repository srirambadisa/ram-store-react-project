import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const products = useSelector((state) => state.products);

  // Interleave products across categories
  const interleaveProducts = (productObj) => {
    const categories = ['veg', 'nonVeg', 'milk', 'chocolate'];
    const arrays = categories.map(cat => productObj[cat] || []);
    const maxLength = Math.max(...arrays.map(arr => arr.length));

    const interleaved = [];
    for (let i = 0; i < maxLength; i++) {
      for (let j = 0; j < arrays.length; j++) {
        if (arrays[j][i]) {
          interleaved.push(arrays[j][i]);
        }
      }
    }
    return interleaved;
  };

  return (
    <>
      <div className="welcome-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="main-heading">
            Welcome to Ram Store
          </h1>
          <p className="sub-text">
            Everything you need, from groceries to everyday items — all in one place at great prices!
          </p>
        </div>
      </div>

      <div className="body-container">


        {/* <div className="image-row">
        <img src="/images/asalu.jpg" alt="Banner 1" className="banner-img" />
        <img src="/images/online.avif" alt="Banner 2" className="banner-img" />
        <img src="/images/some.jpg" alt="Banner 3" className="banner-img" />
      </div> */}



        {/* Features */}
        <h2 className="categories-heading">✨ Special Features ✨</h2>
        <div className="features-container">

          <div className="feature-card">
            <h3>⚡ Fast Delivery</h3>
            <p>Receive your order the same day in major metro cities.</p>


          </div>
          <div className="feature-card">
            <h3>🛍️ Endless Choices</h3>
            <p>Shop from thousands of options across diverse product lines.</p>


          </div>
          <div className="feature-card">
            <h3>🔒 Trusted Payments</h3>
            <p>Pay with confidence using secure, encrypted methods.</p>


          </div>
        </div>





        {/* Category Navigation */}
        <h2 className="categories-heading">💖 Find Your Favorites by Collection</h2>
        <div className="categories-container">

          <div className="category-card">
            <Link to="/Veg">
              <img src="/images/vegetables1.jpg" alt="Vegetables" className="category-image" />
              <h3>Vegetables</h3>
            </Link>
          </div>
          <div className="category-card">
            <Link to="/NonVeg">
              <img src="/images/nonvegetables1.jpg" alt="Non-Veg" className="category-image" />
              <h3>Non-Veg</h3>
            </Link>
          </div>
          <div className="category-card">
            <Link to="/Milk">
              <img src="/images/milkproducts1.avif" alt="Milk" className="category-image" />
              <h3>Milk</h3>
            </Link>
          </div>
          <div className="category-card">
            <Link to="/Chocolate">
              <img src="/images/chocolates1.webp" alt="Chocolate" className="category-image" />
              <h3>Chocolates</h3>
            </Link>
          </div>
        </div>
      </div>

      {/* for images scrolling */}
      {/* <div className="image-scroll-section">
        <h2 className="scroll-header">🔥 Trending Offers</h2>
        <div className="image-scroll-wrapper">
          <div className="scroll-track">
            {[...Array(2)].map((_, repeatIndex) => (
              <>
                <img src="/images/vegetables.webp" alt="Offer 1" className="scroll-image" key={`onion-${repeatIndex}`} />
                <img src="/images/milkproducts.jpg" alt="Offer 2" className="scroll-image" key={`fish-${repeatIndex}`} />
                <img src="/images/chocolates.jpg" alt="Offer 3" className="scroll-image" key={`ferrero-${repeatIndex}`} />
                <img src="/images/nonvegetables.jpg" alt="Offer 4" className="scroll-image" key={`butter-${repeatIndex}`} />
                <img src="/images/vegetables.webp" alt="Offer 5" className="scroll-image" key={`chicken-${repeatIndex}`} />
                <img src="/images/milkproducts.jpg" alt="Offer 6" className="scroll-image" key={`kitkat-${repeatIndex}`} />
                <img src="/images/milkproducts.jpg" alt="Offer 7" className="scroll-image" key={`icecream-${repeatIndex}`} />
                <img src="/images/chocolates.jpg" alt="Offer 8" className="scroll-image" key={`milk-${repeatIndex}`} />
                <img src="/images/vegetables.webp" alt="Offer 9" className="scroll-image" key={`potato-${repeatIndex}`} />
                <img src="/images/nonvegetables.jpg" alt="Offer 10" className="scroll-image" key={`eggs-${repeatIndex}`} />
              </>
            ))}
          </div>
        </div>
      </div> */}


      {/* Interleaved Products */}
      {/* <h2 className="categories-heading">Our Tasty Products</h2>
      <div className="products-grid">
        {interleaveProducts(products).map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div> */}


      <div className="famous-container">
        <h3 className="famous-heading">🌿 Experience the Freshest Picks — Loved and Trusted by Thousands! 💚👨‍👩‍👧‍👦</h3>

        <p className="famous-sub-text">
          🎯 Shop smart and save big —  <br />
          all your essentials under one roof, only fresher and better! 🛒🌿
        </p>

        <div className="image-row">
          <img src="/images/famous.avif" alt="Banner 2" className="banner-img" />
          <img src="/images/famous4.jpg" alt="Banner 3" className="banner-img" />
          <img src="/images/famous5.jpg" alt="Banner 1" className="banner-img" />
        </div>
      </div>





      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} <strong>ram-store</strong>. All rights reserved.</p>
          <p>
            <a href="/terms" className="footer-link">Terms of Service</a> |
            <a href="/privacy" className="footer-link"> Privacy Policy</a>
          </p>
          <p>Designed & Developed by sriram badisa</p>
        </div>
      </footer>
    </>
  );
}

export default Home;