import React, { useContext } from "react";
import NewsContext from "../context/news/NewsContext";

const Slider = () => {
  const customStyle = {
    height: "50vh",
    objectFit: "cover",
  };

  const { allNews } = useContext(NewsContext);

  const newsImages = allNews
    .map((news) => news.urlToImage)
    .filter((news) => {
      if (news) {
        return news;
      }
    });

  console.log(newsImages);

  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={newsImages[0]}
            class="d-block w-100"
            alt="..."
            style={customStyle}
          />
        </div>
        {newsImages.map((image, index) => {
          return (
            <div key={index} class="carousel-item">
              <img
                src={image}
                class="d-block w-100"
                alt="..."
                style={customStyle}
              />
            </div>
          );
        })}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
