import { useNavigate } from "react-router-dom";

function HowItWorks() {

  const navigate = useNavigate();

  return (
    <div className="public-page">

      <section className="inner-hero">

        <span className="section-label">
          HOW IT WORKS
        </span>

        <h1>
          Four Steps.
          <br />
          One <span>Purpose.</span>
        </h1>

        <p>
          Our platform makes food donation simple for
          restaurants, NGOs and volunteers.
        </p>

      </section>


      <section className="steps-section">

        <div className="big-step">

          <div className="big-step-number">
            01
          </div>

          <div className="big-step-icon">
            🏪
          </div>

          <div>

            <span>
              FOR RESTAURANTS
            </span>

            <h2>
              Share Surplus Food
            </h2>

            <p>
              Restaurants can quickly add information about
              their surplus food including quantity, food type,
              preparation time and pickup address.
            </p>

          </div>

        </div>


        <div className="big-step">

          <div className="big-step-number">
            02
          </div>

          <div className="big-step-icon">
            🤝
          </div>

          <div>

            <span>
              FOR NGOs
            </span>

            <h2>
              Find & Accept Donations
            </h2>

            <p>
              NGOs can view available food donations and
              accept food that can help their communities.
            </p>

          </div>

        </div>


        <div className="big-step">

          <div className="big-step-number">
            03
          </div>

          <div className="big-step-icon">
            🚚
          </div>

          <div>

            <span>
              FOR VOLUNTEERS
            </span>

            <h2>
              Pick Up & Deliver
            </h2>

            <p>
              Volunteers receive pickup tasks, collect food
              and deliver it to the destination safely.
            </p>

          </div>

        </div>


        <div className="big-step">

          <div className="big-step-number">
            04
          </div>

          <div className="big-step-icon">
            ❤️
          </div>

          <div>

            <span>
              FOR COMMUNITIES
            </span>

            <h2>
              Food Reaches People
            </h2>

            <p>
              The journey ends when surplus food reaches
              people and communities who need it.
            </p>

          </div>

        </div>

      </section>


      <section className="how-cta">

        <h2>
          Ready to Be Part of the Change?
        </h2>

        <button
          onClick={() => navigate("/register")}
        >
          Get Started →
        </button>

      </section>

    </div>
  );
}

export default HowItWorks;