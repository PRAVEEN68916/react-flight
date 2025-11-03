import React from "react";
import { Link } from "react-router-dom";
import "./GlobalCSS/SkyCard.css";

const cardData = [
  {
    id: 1,
    title: "Andhra Pradesh",
    img: "https://images.stockcake.com/public/f/b/6/fb6acf1b-fcaa-4152-b48b-6b0e2b0c5374_large/airplane-mid-flight-stockcake.jpg",
    desc: "Land of beaches, temples.",
  },
  {
    id: 2,
    title: "Telangana",
    img: "https://images.stockcake.com/public/a/d/5/ad554564-ffcb-4961-ae34-2a49e0aa798f_large/soaring-above-clouds-stockcake.jpg",
    desc: "Home of Hyderabad and rich culture.",
  },
  {
    id: 3,
    title: "Karnataka",
    img: "https://images.stockcake.com/public/0/3/e/03ee4404-3b87-45c8-ada0-f916fd931958_large/soaring-above-clouds-stockcake.jpg",
    desc: "Nature, IT hubs, & historical locations.",
  },
  {
    id: 4,
    title: "Tamil Nadu",
    img: "https://images.stockcake.com/public/7/e/d/7ed8fbc1-60ef-49e1-b545-706de27c6354_large/airplane-above-clouds-stockcake.jpg",
    desc: "Temples, beaches, and cultural heritage.",
  },
  {
    id: 5,
    title: "Kerala",
    img: "https://images.stockcake.com/public/c/d/9/cd913de3-0716-4fc7-b51c-f981245631b6_large/soaring-through-clouds-stockcake.jpg",
    desc: "God’s own country with greenery.",
  },
  {
    id: 6,
    title: "Maharashtra",
    img: "https://images.stockcake.com/public/4/7/c/47cb5028-ffd0-493d-a63b-91880e50ca50_large/soaring-above-clouds-stockcake.jpg",
    desc: "Mumbai city & beautiful landscapes.",
  },
  {
    id: 7,
    title: "Gujarat",
    img: "https://images.stockcake.com/public/c/9/f/c9fd2a4c-2a92-4352-a8a5-7cc98d8ab16a_large/soaring-high-above-stockcake.jpg",
    desc: "Culture, architecture & white desert.",
  },
  {
    id: 8,
    title: "Rajasthan",
    img: "https://images.stockcake.com/public/2/6/a/26a5b0ff-2dbd-4052-93c1-561a608aa873_large/soaring-above-clouds-stockcake.jpg",
    desc: "Palaces, forts, and desert beauty.",
  },
  {
    id: 9,
    title: "Punjab",
    img: "https://images.stockcake.com/public/8/5/2/8525543f-4ef1-4ccc-82ef-36019be10361_large/soaring-through-skies-stockcake.jpg",
    desc: "Land of Golden Temple & great food.",
  },
];

const SkyCard = () => {
  return (
    <div className="container py-5 sky-container">
      <h2 className="text-center mb-5 fw-bold text-info">☁️ Sky Card Gallery ☁️</h2>
      <div className="row g-4">
        {cardData.map((card) => (
          <div key={card.id} className="col-md-4 col-sm-6 col-lg-4">
            <div className="card sky-card shadow-lg border-0">
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{card.title}</h5>
                <p className="card-text">{card.desc}</p>

                {/* 🔗 Updated button to navigate */}
                <Link to={`/explore/${card.id}`} className="btn sky-btn">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkyCard;
