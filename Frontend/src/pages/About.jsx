function About() {

  return (
    <div className="public-page">

      <section className="inner-hero">

        <span className="section-label">
          ABOUT US
        </span>

        <h1>
          Food Has The Power
          <br />
          To Bring People <span>Together.</span>
        </h1>

        <p>
          Zero Hunger Hub is a food donation platform created
          to reduce food waste and connect surplus food with
          communities in need.
        </p>

      </section>


      <section className="about-main">

        <div className="about-card">

          <div className="about-icon">
            🌱
          </div>

          <h2>
            Why We Exist
          </h2>

          <p>
            Millions of meals are wasted every day while
            people around us face food insecurity.
            We believe technology can help bridge that gap.
          </p>

        </div>


        <div className="about-card">

          <div className="about-icon">
            ❤️
          </div>

          <h2>
            Our Vision
          </h2>

          <p>
            We imagine a world where good food is shared
            instead of wasted and every community has access
            to nutritious meals.
          </p>

        </div>


        <div className="about-card">

          <div className="about-icon">
            🤝
          </div>

          <h2>
            Our Community
          </h2>

          <p>
            Restaurants, NGOs and volunteers work together
            through one simple platform to create real-world
            impact.
          </p>

        </div>

      </section>


      <section className="values-section">

        <div className="section-heading">

          <span className="section-label">
            WHAT WE BELIEVE
          </span>

          <h2>
            Small Actions.
            <br />
            <span>Big Impact.</span>
          </h2>

        </div>


        <div className="values-grid">

          <div className="value-item">
            <span>🍃</span>
            <h3>Reduce Waste</h3>
            <p>
              Give surplus food a meaningful purpose.
            </p>
          </div>

          <div className="value-item">
            <span>❤️</span>
            <h3>Feed Communities</h3>
            <p>
              Help nutritious food reach people in need.
            </p>
          </div>

          <div className="value-item">
            <span>🤝</span>
            <h3>Build Connections</h3>
            <p>
              Bring organizations and volunteers together.
            </p>
          </div>

          <div className="value-item">
            <span>🌍</span>
            <h3>Create Change</h3>
            <p>
              Turn everyday actions into lasting impact.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;