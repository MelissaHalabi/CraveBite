
import React from "react";
import "./Cart.css";

function Cart({ cart, setCart }) {

  // Remove Item Function
  function removeItem(id, restaurantId) {

    const updatedCart = cart.filter(
      (item) =>
        !(item.id === id && item.restaurantId === restaurantId)
    );

    setCart(updatedCart);
  }

  // Calculate Total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>My Cart 🛒</h1>

      {cart.length === 0 ? (

        <p className="empty-cart">
          Your cart is empty. Start ordering!
        </p>

      ) : (

        <div className="cart-container">

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.restaurantId + "-" + item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-details">

                <h3>{item.name}</h3>

                <p>Quantity: {item.quantity}</p>

                <p>
                  Price: ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() =>
                    removeItem(item.id, item.restaurantId)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          <div className="cart-total">

            <h2>Total: ${total.toFixed(2)}</h2>

            <button
              onClick={() => alert("Order placed successfully!")}
            >
              Checkout
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;
