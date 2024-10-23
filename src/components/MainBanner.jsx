import React, { useEffect } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

const MainBanner = () => {
  useEffect(() => {
    // Ensure that Owl Carousel is initialized only after component is mounted
    const initializeOwlCarousel = () => {
      $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
      });
    };

    // Check if jQuery is loaded and if Owl Carousel is defined
    if (typeof $ !== "undefined" && $.fn.owlCarousel) {
      initializeOwlCarousel();
    } else {
      console.error("Owl Carousel is not initialized properly");
    }
  }, []); // Run once when the component mounts

  return (
    <div className="main-banner">
      <div className="owl-carousel owl-banner">
        <div className="item item-1">
          <div className="header-text">
            <span className="category">
              Toronto, <em>Canada</em>
            </span>
            <h2>
              Hurry!
              <br />
              Get the Best Villa for you
            </h2>
          </div>
        </div>
        <div className="item item-2">
          <div className="header-text">
            <span className="category">
              Melbourne, <em>Australia</em>
            </span>
            <h2>
              Be Quick!
              <br />
              Get the best villa in town
            </h2>
          </div>
        </div>
        <div className="item item-3">
          <div className="header-text">
            <span className="category">
              Miami, <em>South Florida</em>
            </span>
            <h2>
              Act Now!
              <br />
              Get the highest level penthouse
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
