
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Restaurants.css";

function Restaurants() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const homeSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(homeSearch);
  const [submittedSearch, setSubmittedSearch] = useState(homeSearch);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Burgers",
    "Pizza",
    "Lebanese",
    "Sushi",
    "Chicken",
    "Healthy",
    "Desserts"
  ];

  // Restaurants Information
  const restaurants = [
    {
      id: 1,
      name: "Cheese on Top",
      category: "Burgers",
      rating: 4.8,
      deliveryTime: "20-30 min",
      image: "https://s.lorientlejour.com/storage/attachments/1296/249629_484812.jpg/r/1200/249629_484812.jpg"
    },
    {
      id: 2,
      name: "Pizza Kamel",
      category: "Pizza",
      rating: 4.7,
      deliveryTime: "25-35 min",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
    },
    {
      id: 3,
      name: "Sushi Star",
      category: "Sushi",
      rating: 4.6,
      deliveryTime: "30-40 min",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600"
    },
    {
      id: 4,
      name: "Abou Sobhi",
      category: "Lebanese",
      rating: 4.9,
      deliveryTime: "20-30 min",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600"
    },
    {
      id: 5,
      name: "KFC",
      category: "Chicken",
      rating: 4.5,
      deliveryTime: "25-35 min",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600"
    },
    {
      id: 6,
      name: "Green Bowl",
      category: "Healthy",
      rating: 4.7,
      deliveryTime: "15-25 min",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
    },
    {
      id: 7,
      name: "Sweetspot",
      category: "Desserts",
      rating: 4.8,
      deliveryTime: "20-30 min",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600"
    },
    {
      id: 8,
      name: "Crunchyz",
      category: "Burgers",
      rating: 4.6,
      deliveryTime: "20-30 min",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600"
    }
  ];

  // Search Function
  function handleSearch(event) {

    event.preventDefault();

    setSubmittedSearch(search.trim());
    setSelectedCategory("All");

  }

  // Category Function
  function handleCategory(category) {

    setSelectedCategory(category);

    setSearch("");
    setSubmittedSearch("");

  }

  // Clear Filters
  function clearFilters() {

    setSearch("");
    setSubmittedSearch("");
    setSelectedCategory("All");

  }

  // Filter Restaurants
  const displayedRestaurants = restaurants.filter((restaurant) => {

    const matchesSearch =
      restaurant.name.toLowerCase().includes(submittedSearch.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(submittedSearch.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      restaurant.category === selectedCategory;

    return matchesSearch && matchesCategory;

  });

  return (
    <div className="restaurants-page">

      {/* Page Header */}
      <section className="restaurants-header">

        <h1>Discover Restaurants</h1>

        <p>
          Find your favorite food and order something delicious!
        </p>

        <form className="restaurant-search" onSubmit={handleSearch}>

          <input
            type="text"
            placeholder="Search restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit">
            Search
          </button>

        </form>

      </section>

      {/* Categories */}
      <section className="restaurant-categories">

        <h2>Explore Categories</h2>

        <div className="filter-list">

          {categories.map((category, index) => (

            <button
              key={index}
              type="button"
              className={
                selectedCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => handleCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>

      </section>

      {/* Restaurant Cards */}
      <section className="restaurant-results">

        <h2>Popular Restaurants</h2>

        <div className="restaurant-grid">

          {displayedRestaurants.map((restaurant) => (

            <div className="restaurant-card" key={restaurant.id}>

              <img
                src={restaurant.image}
                alt={restaurant.name}
              />

              <div className="restaurant-details">

                <h3>{restaurant.name}</h3>

                <p className="restaurant-category">
                  {restaurant.category}
                </p>

                <div className="restaurant-meta">

                  <span>⭐ {restaurant.rating}</span>

                  <span>🕒 {restaurant.deliveryTime}</span>

                </div>

                <button
                  className="view-menu-button"
                  onClick={() => navigate(`/menu/${restaurant.id}`)}
                >
                  View Menu
                </button>

              </div>

            </div>

          ))}

        </div>

        {displayedRestaurants.length === 0 && (

          <p className="no-results">
            No restaurants found. Try another search!
          </p>

        )}

        {(submittedSearch !== "" || selectedCategory !== "All") && (

          <button
            className="clear-button"
            onClick={clearFilters}
          >
            Clear Filters
          </button>

        )}

      </section>

    </div>
  );
}

export default Restaurants;
