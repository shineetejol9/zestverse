import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import flappyImg from "../assets/img/flappy.jpg";
import rocketImg from "../assets/img/rocket.png";
import tomjerryImg from "../assets/img/tomjerry.jpg";
import stonepaperImg from "../assets/img/stonepaper.png";
import cheeseImg from "../assets/img/cheese.jpg";
import candyImg from "../assets/img/candy.jpg";
import "./Sixth.css";
import Snowfall from "./Snowfall";
import profile from "../assets/img/profile.png";

function Twelveth() {
  const [showGame, setShowGame] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  // hide navbar when modal opens
  useEffect(() => {
    if (showGame) {
      document.body.classList.add("hide-navbar");
    } else {
      document.body.classList.remove("hide-navbar");
    }
  }, [showGame]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handlePlay = (game) => {
    setSelectedGame(game);
    setShowGame(true);
  };

  return (
    <div className="sixth-page min-h-screen text-center text-white pt-[170px]">
      <Snowfall />
      <div className="profile-pic">
        <img src={profile} alt="Profile" />
      </div>
      <h1 className="text-3xl font-bold">12th Class Games</h1>
      <div className="w-3/4 m-auto pt-4">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d, i) => (
              <div
                key={i}
                className="bg-white h-[450px] text-black rounded-xl shadow-lg flex flex-col"
              >
                {/* Image Section */}
                <div className="h-56 rounded-t-xl bg-gradient-to-b from-rgba(74, 47, 189, 0.5); to-purple-400 flex justify-center items-center">
                  <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Name + Button */}
                <div className="flex-1 flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <button
                    onClick={() => handlePlay(d)}
                    className="button123"
                  >
                    ▶ Play Fullscreen
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <Modal
        show={showGame}
        onHide={() => setShowGame(false)}
        fullscreen
        centered
        contentClassName="p-0"
      >
        <Modal.Body style={{ padding: 0, position: "relative" }}>
          {/* Close button */}
          <button
            onClick={() => setShowGame(false)}
            className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-full z-50 shadow-md"
          >
            ✖
          </button>

          {/* Game iframe */}
          {selectedGame && (
            <iframe
              src={selectedGame.url}
              width="100%"
              height="100%"
              style={{
                border: "none",
                display: "block",
              }}
              title={selectedGame.name}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

const data = [
  {
    name: "Rocket Game 🚀",
    img: rocketImg,
    url: "https://subham20135.github.io/rocketgame/",
  },
  {
    name: "Flappy Bird 🐦",
    img: flappyImg,
    url: "https://subham20135.github.io/birdgame/",
  },
  {
    name: "Tom & Jerry Math Adventure",
    img: cheeseImg,
    url: "https://subham20135.github.io/newtom/",
  },
  {
    name: "Tom & Jerry Runner",
    img: tomjerryImg,
    url: "https://subham20135.github.io/tom-jery-game/",
  },
  {
    name: "Car Racing",
    img: stonepaperImg,
    url: "https://subham20135.github.io/cargame/",
  },
  {
    name: "Candy Catcher",
    img: candyImg,
    url: "https://subham20135.github.io/candycrush/",
  },
];



export default Twelveth;
