import { useNavigate } from "react-router-dom";

function Reviews() {

  const navigate = useNavigate();

  return (
    <div className="public-page">

      <section className="inner-hero">

        <span className="section-label">
          COMMUNITY VOICES
        </span>

        <h1>
          People Who
          <br />
          Believe In <span>Sharing.</span>
        </h1>

        <p>
          Every contribution matters. Here's what our
          community members have to say.
        </p>

      </section>


      <section className="reviews-section">

        <div className="review-card">

          <div className="review-stars">
            ★★★★★
          </div>

          <p>
            "Zero Hunger Hub gives restaurants a simple way
            to make sure their extra food doesn't go to waste.
            It feels good to know that every donation can help
            someone."
          </p>

          <div className="review-person">

            <div className="review-avatar">
              🏪
            </div>

            <div>
              <strong>
                Restaurant Partner
              </strong>

              <span>
                Food Donor
              </span>
            </div>

          </div>

        </div>


        <div className="review-card featured-review">

          <div className="review-stars">
            ★★★★★
          </div>

          <p>
            "The platform makes it easier for NGOs to discover
            available food and organize the process of getting
            it to people who need it."
          </p>

          <div className="review-person">

            <div className="review-avatar">
              🤝
            </div>

            <div>
              <strong>
                NGO Partner
              </strong>

              <span>
                Community Organization
              </span>

            </div>

          </div>

        </div>


        <div className="review-card">

          <div className="review-stars">
            ★★★★★
          </div>

          <p>
            "Volunteering becomes meaningful when you can
            directly see how a simple pickup and delivery
            can make someone's day better."
          </p>

          <div className="review-person">

            <div className="review-avatar">
              🚚
            </div>

            <div>

              <strong>
                Volunteer Partner
              </strong>

              <span>
                Community Volunteer
              </span>

            </div>

          </div>

        </div>

      </section>


      <section className="review-bottom">

        <h2>
          Your Story Could Be Next.
        </h2>

        <p>
          Join our growing community and make an impact.
        </p>

        <button
          onClick={() => navigate("/register")}
        >
          Join Us →
        </button>

      </section>

    </div>
  );
}

export default Reviews;