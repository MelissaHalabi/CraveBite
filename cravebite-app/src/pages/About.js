
import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {

  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">

        <h1>About <span>CraveBite</span></h1>

        <p>
          Good food, great moments, delivered to your door.
        </p>

        <button onClick={() => navigate("/restaurants")}>
          Explore Restaurants
        </button>

      </section>

      {/* Our Story */}
      <section className="about-story">

        <div className="story-image">

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
            alt="Delicious food on a table"
          />

        </div>

        <div className="story-text">

          <h2>Our Story</h2>

          <p>
            CraveBite was created with one simple idea:
            making delicious food easier to enjoy.
          </p>

          <p>
            We bring different restaurants and food choices
            together in one place, so customers can discover
            their favorite meals and order with ease.
          </p>

        </div>

      </section>

      {/* Our Mission */}
      <section className="about-mission">

        <h2>Our Mission</h2>

        <p>
          Our mission is to connect people with great food
          through a simple, convenient and enjoyable
          ordering experience.
        </p>

      </section>

      {/* Why Choose Us */}
      <section className="about-why">

        <h2>Why Choose CraveBite?</h2>

        <div className="why-grid">

          <div className="why-card">
            <span>🍔</span>
            <h3>Variety</h3>
            <p>
              Discover different restaurants and food categories.
            </p>
          </div>

          <div className="why-card">
            <span>⚡</span>
            <h3>Convenience</h3>
            <p>
              Find and order your favorite meals easily.
            </p>
          </div>

          <div className="why-card">
            <span>❤️</span>
            <h3>Made for Food Lovers</h3>
            <p>
              A place where every craving finds something delicious.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;
