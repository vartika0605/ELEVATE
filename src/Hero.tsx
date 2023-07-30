import { useState, useContext } from "react";
import { SearchContext, CategoryContext } from "./context.ts";
import { Categories } from "./App.tsx";

const Taglines = [
  "Shop for all your needs, from A to Z.",
  "The best of the best, all in one place.",
  "Your one-stop shop for everything you love.",
  "Shop with confidence, knowing you're getting the best deals.",
  "Where shopping is a pleasure, not a chore."
]

function Hero() {
  const {category, setCategory} = useContext(CategoryContext);
  const {query, setQuery} = useContext(SearchContext);

  const [showCategories, setShowCategories] = useState(false);
  const [tagline, setTagline] = useState(0);

  function searchHandler(e:any) {
    setQuery(e.target.value);
  }

  function selectCategory(c:string) {
    setCategory(c);
    setShowCategories(false);
  }

  function prevSlide() {
    if (tagline > 0) {
      setTagline(tagline-1);
    } else {
      setTagline(Taglines.length - 1);
    }
  }
  
  function nextSlide() {
    if (tagline < Taglines.length-1) {
      setTagline(tagline+1);
    } else {
      setTagline(0);
    }
  } 
  
  return (
    <div className="Hero">
      
      <div className="top-banner-container">
        <div className="left-part"></div>
        <div className="top-banner">
          <span>Best Sellers</span>
          <span>Gift Ideas</span>
          <span>New Releases</span>
          <span>Today's Deals</span>
          <span>Customer Service</span>
        </div>
        <div className="right-part"></div>
      </div>
      <div className="hero-title">Elevate Shoping</div>

      
      <div className="filters">
        <div className="category">
          <button onClick={() => setShowCategories(!showCategories)}>{category}</button>
          <div className="category-options">
            {showCategories && Categories.map(c => (
              <button 
                key={c} 
                onClick={() => selectCategory(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="searchbar">
          <input 
            placeholder="Search anything" 
            onChange={searchHandler} />
          <button></button>
        </div>
        <div className="language">
          <button>English</button>
        </div>
        <div className="cart-button">
          <button>Cart</button>
        </div>
        <div className="profile-button">
          <button>Profile</button>
        </div>
      </div>


      <div className="slider">
        <button onClick={prevSlide} className="slider-button">&lt;</button>
        <div className="slider-content">
            {Taglines[tagline]}
        </div>
        <button onClick={nextSlide} className="slider-button">&gt;</button>
      </div>
      
    </div>
  )  
}

export default Hero