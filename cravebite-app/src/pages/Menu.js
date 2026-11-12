

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Menu.css";

function Menu({ addToCart }) {

  const { id } = useParams();

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Restaurant Menus
  const restaurantMenus = {
    1: {
      name: "Cheese on Top",
      category: "Burgers",
      items: [
        {
          id: 1,
          name: "Classic Cheeseburger",
          description: "Beef patty, cheddar cheese and special sauce.",
          price: 8.50,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
        },
        {
          id: 2,
          name: "Double Cheese Burger",
          description: "Double beef, double cheddar and fresh lettuce.",
          price: 11.00,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500"
        },
        {
          id: 3,
          name: "French Fries",
          description: "Golden and crispy french fries.",
          price: 3.00,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500"
        },
        {
          id: 4,
          name: "Chicken Burger",
          description: "Crispy chicken with lettuce and mayonnaise.",
          price: 7.50,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500"
        }
      ]
    },

    2: {
      name: "Pizza Kamel",
      category: "Pizza",
      items: [
        {
          id: 1,
          name: "Margherita Pizza",
          description: "Tomato sauce, mozzarella and basil.",
          price: 9.00,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500"
        },
        {
          id: 2,
          name: "Pepperoni Pizza",
          description: "Mozzarella cheese and pepperoni.",
          price: 12.00,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500"
        },
        {
          id: 3,
          name: "Garlic Bread",
          description: "Toasted bread with garlic and herbs.",
          price: 4.00,
          category: "Sides",
          image: "https://images.squarespace-cdn.com/content/v1/69dc62879f70790b9d527bba/1776050824557-BTW7MW1FG18R36IGHG06/generated_1772742506035.png"
        }
      ]
    },

    3: {
      name: "Sushi Star",
      category: "Sushi",
      items: [
        {
          id: 1,
          name: "California Rolls",
          description: "Crab, avocado and cucumber sushi rolls.",
          price: 10.00,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500"
        },
        {
          id: 2,
          name: "Salmon Sushi",
          description: "Fresh salmon sushi pieces.",
          price: 13.00,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500"
        }
      ]
    },

    4: {
      name: "Abou Sobhi",
      category: "Lebanese",
      items: [
        {
          id: 1,
          name: "Chicken Shawarma",
          description: "Chicken shawarma with garlic sauce.",
          price: 5.00,
          category: "Sandwiches",
          image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500"
        },
        {
          id: 2,
          name: "Meat Shawarma",
          description: "Traditional meat shawarma sandwich.",
          price: 6.00,
          category: "Sandwiches",
          image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500"
        }
      ]
    },

    5: {
      name: "KFC",
      category: "Chicken",
      items: [
        {
          id: 1,
          name: "Original Chicken",
          description: "Crispy fried chicken pieces.",
          price: 9.00,
          category: "Chicken",
          image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500"
        },
        {
          id: 2,
          name: "Chicken Burger",
          description: "Crispy chicken burger with fresh lettuce.",
          price: 7.00,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500"
        }
      ]
    },

    6: {
      name: "Green Bowl",
      category: "Healthy",
      items: [
        {
          id: 1,
          name: "Healthy Salad",
          description: "Fresh vegetables and healthy dressing.",
          price: 7.00,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500"
        },
        {
          id: 2,
          name: "Avocado Bowl",
          description: "Avocado, greens and fresh vegetables.",
          price: 9.00,
          category: "Bowls",
          image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500"
        }
      ]
    },

    7: {
      name: "Sweetspot",
      category: "Desserts",
      items: [
        {
          id: 1,
          name: "Chocolate Cake",
          description: "Rich chocolate cake.",
          price: 6.00,
          category: "Cakes",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
        },
        {
          id: 2,
          name: "Waffles",
          description: "Fresh waffles with chocolate sauce.",
          price: 7.00,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500"
        }
      ]
    },

    8: {
      name: "Classic Burger",
      category: "Burgers",
      items: [
        {
          id: 1,
          name: "Beef Burger",
          description: "Beef burger with special sauce.",
          price: 8.00,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500"
        },
        {
          id: 2,
          name: "Loaded Fries",
          description: "French fries with cheese and sauce.",
          price: 5.00,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500"
        }
      ]
    }
  };

  // Get Selected Restaurant
  const restaurant = restaurantMenus[id];

  // Filter Menu Items
  const filteredItems =
    restaurant && selectedCategory === "All"
      ? restaurant.items
      : restaurant
        ? restaurant.items.filter(
            (item) => item.category === selectedCategory
          )
        : [];

  // Check Restaurant
  if (!restaurant) {
    return (
      <div className="menu-page">
        <h2>Restaurant not found!</h2>
      </div>
    );
  }

  return (
    <div className="menu-page">

      {/* Restaurant Header */}
      <section className="menu-header">

        <h1>{restaurant.name}</h1>

        <p>{restaurant.category} Restaurant</p>

        <span>⭐ Delicious food, delivered to your door!</span>

      </section>

      {/* Menu Categories */}
      <section className="menu-categories">

        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        {[...new Set(restaurant.items.map((item) => item.category))]
          .map((category) => (

            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>

          ))}

      </section>

      {/* Food Items */}
      <section className="menu-items">

        <h2>Our Menu</h2>

        <div className="menu-grid">

          {filteredItems.map((item) => (

            <div className="menu-card" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="menu-details">

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <div className="menu-bottom">

                  <strong>${item.price.toFixed(2)}</strong>

                  <button onClick={() => addToCart(item, id)}>
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {filteredItems.length === 0 && (
          <p className="no-results">
            No food items found.
          </p>
        )}

      </section>

    </div>
  );
}

export default Menu;
