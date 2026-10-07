import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="public-page">

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-small-title">
            🍃 FOOD • COMMUNITY • HOPE
          </span>

          <h1>
            Good Food
            <br />
            Should Never
            <br />
            <span>Go To Waste.</span>
          </h1>

          <p>
            Zero Hunger Hub connects restaurants, NGOs and
            volunteers to make sure surplus food reaches
            people who need it.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-primary"
              onClick={() => navigate("/register")}
            >
              Start Making a Difference
            </button>

            <button
              className="hero-secondary"
              onClick={() => navigate("/how-it-works")}
            >
              How It Works →
            </button>

          </div>

        </div>


        <div className="hero-food">

          <div className="food-circle">

            <div className="food-plate">
              🍛
            </div>

          </div>

          <div className="floating-food food-one">
            🥗
          </div>

          <div className="floating-food food-two">
            🍎
          </div>

          <div className="floating-food food-three">
            🥖
          </div>

          <div className="floating-food food-four">
            🍲
          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="home-stats">

        <div className="home-stat">
          <span>🍱</span>
          <h2>100+</h2>
          <p>Food Donations</p>
        </div>

        <div className="home-stat">
          <span>🤝</span>
          <h2>50+</h2>
          <p>NGO Partners</p>
        </div>

        <div className="home-stat">
          <span>🚚</span>
          <h2>75+</h2>
          <p>Deliveries</p>
        </div>

        <div className="home-stat">
          <span>❤️</span>
          <h2>500+</h2>
          <p>People Helped</p>
        </div>

      </section>


      {/* MISSION */}

      <section className="mission-section">

        <div className="mission-image">
          <div className="mission-food">
            🍲
          </div>
        </div>

        <div className="mission-content">

          <span className="section-label">
            OUR MISSION
          </span>

          <h2>
            Turning Surplus Food
            <br />
            Into <span>Hope.</span>
          </h2>

          <p>
            Every day, perfectly good food goes to waste while
            many people struggle to find their next meal.
            Zero Hunger Hub brings people together to change that.
          </p>

          <p>
            Restaurants can donate surplus food, NGOs can
            collect it, and volunteers can deliver it to
            communities in need.
          </p>

          <button
            className="green-button"
            onClick={() => navigate("/about")}
          >
            Learn More About Us →
          </button>

        </div>

      </section>


      {/* HOW IT WORKS PREVIEW */}

      <section className="process-section">

        <div className="section-heading">

          <span className="section-label">
            SIMPLE PROCESS
          </span>

          <h2>
            From Extra Food
            <br />
            To <span>Helping Hands.</span>
          </h2>

          <p>
            Four simple steps can make a meaningful difference.
          </p>

        </div>


        <div className="process-grid">

          <div className="process-card">

            <div className="process-number">
              01
            </div>

            <div className="process-icon">
              🏪
            </div>

            <h3>
              Restaurants Donate
            </h3>

            <p>
              Restaurants share their safe and surplus food
              with people who need it.
            </p>

          </div>


          <div className="process-card">

            <div className="process-number">
              02
            </div>

            <div className="process-icon">
              🤝
            </div>

            <h3>
              NGOs Accept
            </h3>

            <p>
              NGOs discover available food and accept donations
              for their communities.
            </p>

          </div>


          <div className="process-card">

            <div className="process-number">
              03
            </div>

            <div className="process-icon">
              🚚
            </div>

            <h3>
              Volunteers Deliver
            </h3>

            <p>
              Volunteers pick up food from restaurants and
              deliver it safely.
            </p>

          </div>


          <div className="process-card">

            <div className="process-number">
              04
            </div>

            <div className="process-icon">
              ❤️
            </div>

            <h3>
              Communities Receive
            </h3>

            <p>
              Surplus food finally reaches people who need
              nutritious meals.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="home-cta">

        <div>

          <span>
            READY TO MAKE A DIFFERENCE?
          </span>

          <h2>
            One Meal Can Change
            <br />
            Someone's Day.
          </h2>

          <p>
            Join Zero Hunger Hub today.
          </p>

        </div>

        <button
          onClick={() => navigate("/register")}
        >
          Join Zero Hunger Hub →
        </button>

      </section>

    </div>
  );
}

export default Home;