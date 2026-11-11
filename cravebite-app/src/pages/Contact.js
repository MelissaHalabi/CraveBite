
import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Submit Function
  function handleSubmit(event) {

    event.preventDefault();

    if (
      name === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    ) {
      alert("Please fill in all fields!");
    } else {

      setSubmitted(true);

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

    }
  }

  return (
    <div className="contact-page">

      {/* Contact Header */}
      <section className="contact-header">

        <h1>Contact <span>Us</span></h1>

        <p>
          Have a question or need help? We'd love to hear from you!
        </p>

      </section>

      {/* Contact Form */}
      <section className="contact-container">

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <p>
            We're here to make your CraveBite experience better.
            Send us a message and let us know how we can help.
          </p>

          <div className="contact-details">
            <p>📧 Email: support@cravebite.com</p>
            <p>📞 Phone: +961 70 000 000</p>
            <p>📍 Location: Lebanon</p>
          </div>

        </div>

        <div className="contact-form-container">

          <h2>Send Us a Message</h2>

          {submitted ? (

            <div className="success-message">
              <h3>Thank you, {name || "customer"}!</h3>
              <p>Your message has been submitted successfully.</p>

              <button onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>

          ) : (

            <form onSubmit={handleSubmit}>

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Subject</label>

              <input
                type="text"
                placeholder="Enter the subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />

              <label>Message</label>

              <textarea
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
              />

              <button type="submit">
                Send Message
              </button>

            </form>

          )}

        </div>

      </section>

    </div>
  );
}

export default Contact;
