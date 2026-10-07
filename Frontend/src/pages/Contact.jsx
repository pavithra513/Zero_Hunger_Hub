import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Thank you for contacting Zero Hunger Hub!"
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="public-page">

      <section className="inner-hero">

        <span className="section-label">
          CONTACT US
        </span>

        <h1>
          Let's Start a
          <br />
          <span>Conversation.</span>
        </h1>

        <p>
          Have a question, suggestion or want to partner
          with us? We'd love to hear from you.
        </p>

      </section>


      <section className="contact-section">

        <div className="contact-info">

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            We'd Love To
            <br />
            Hear From You.
          </h2>

          <p>
            Whether you're a restaurant looking to donate,
            an NGO looking for food, or a volunteer ready
            to help, we're here for you.
          </p>


          <div className="contact-item">

            <div>
              📍
            </div>

            <section>
              <strong>Location</strong>
              <span>Madurai, Tamil Nadu, India</span>
            </section>

          </div>


          <div className="contact-item">

            <div>
              📧
            </div>

            <section>
              <strong>Email</strong>
              <span>support@zerohungerhub.com</span>
            </section>

          </div>


          <div className="contact-item">

            <div>
              📞
            </div>

            <section>
              <strong>Phone</strong>
              <span>+91 XXXXX XXXXX</span>
            </section>

          </div>

        </div>


        <div className="contact-form-card">

          <h2>
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit}>

            <label>
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />


            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />


            <label>
              Message
            </label>

            <textarea
              placeholder="Write your message..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              rows="6"
              required
            />


            <button
              type="submit"
              className="primary-btn"
            >
              Send Message →
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;