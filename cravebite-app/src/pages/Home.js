
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const categories = [
    { name: "Burgers", icon: "🍔" },
    { name: "Pizza", icon: "🍕" },
    { name: "Lebanese", icon: "🥙" },
    { name: "Sushi", icon: "🍣" },
    { name: "Chicken", icon: "🍗" },
    { name: "Healthy", icon: "🥗" },
    { name: "Desserts", icon: "🍰" },
    { name: "Drinks", icon: "🥤" },
  ];

  function handleSearch(e) {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(
        `/restaurants?search=${encodeURIComponent(search.trim())}`
      );
    } else {
      navigate("/restaurants");
    }
  }

  function handleCategory(category) {
    navigate(
      `/restaurants?category=${encodeURIComponent(category)}`
    );
  }

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Your Cravings,
            <br />
            <span>Delivered.</span>
          </h1>

          <p>
            Order from your favorite restaurants
            and get delicious food delivered
            straight to your door.
          </p>

          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for restaurants or food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
            alt="Delicious burger"
          />
        </div>
      </section>

      {/* Food Categories */}
      <section className="categories">
        <h2>What are you craving?</h2>
        <p className="section-description">
          Explore your favorite food categories
        </p>

        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className="category"
              onClick={() => handleCategory(category.name)}
            >
              <span className="category-icon">
                {category.icon}
              </span>

              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;

