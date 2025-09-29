import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const AboutUs = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="AboutUs" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Scores</h2>
              <p>The Scores section gives players a clear picture of their performance. The Task Done count shows how many challenges or levels they have successfully completed, helping them track their progress step by step. The Accuracy percentage reflects how precise they were in answering questions or making moves, encouraging players to focus on improving their correctness. The Improvement score highlights how much better they are doing compared to their previous attempts, motivating them to keep practicing and getting stronger each time. Together, these three indicators provide a balanced overview of achievement, skill, and growth.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item mx-5">
                  <img src={meter1} alt="Image" />
                  <h5>Task Done</h5>
                </div>
                <div className="item mx-5">
                  <img src={meter2} alt="Image" />
                  <h5>Accuracy</h5>
                </div>
                <div className="item mx-5">
                  <img src={meter3} alt="Image" />
                  <h5>Improvement</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}