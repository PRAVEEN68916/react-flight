import React from "react";
import "./GlobalCSS/SkyCard.css";

const cardData = [
  { id: 1, title: "Nature Bliss", img: "https://picsum.photos/300/200?1", desc: "Feel the freshness of nature." },
  { id: 2, title: "Urban Dreams", img: "https://picsum.photos/300/200?2", desc: "Discover city vibes." },
  { id: 3, title: "Tech Future", img: "https://picsum.photos/300/200?3", desc: "Innovation redefined." },
  { id: 4, title: "Ocean Depths", img: "https://picsum.photos/300/200?4", desc: "Explore the blue world." },
  { id: 5, title: "Desert Mirage", img: "https://picsum.photos/300/200?5", desc: "Golden sands await." },
  { id: 6, title: "Mountain High", img: "https://picsum.photos/300/200?6", desc: "Reach new heights." },
  { id: 7, title: "Art & Culture", img: "https://picsum.photos/300/200?7", desc: "Colors of creativity." },
  { id: 8, title: "Food Heaven", img: "https://picsum.photos/300/200?8", desc: "Taste the world." },
  { id: 9, title: "Peaceful Night", img: "https://picsum.photos/300/200?9", desc: "Stars and serenity." },
];

const SkyCard = () => {
  return (
    <div className="container py-5 sky-container">
      <h2 className="text-center mb-5 fw-bold sky-heading ">
        ☁️ Sky Card Gallery ☁️
      </h2>
      <div className="row g-4">
        {cardData.map((card) => (
          <div key={card.id} className="col-md-4 col-sm-6 col-lg-4">
            <div className="card sky-card shadow-lg border-0">
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{card.title}</h5>
                <p className="card-text">{card.desc}</p>
                <button className="btn sky-btn">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkyCard;
