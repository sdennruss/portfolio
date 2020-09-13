import React, { useEffect } from "react";
import Laughing from "./laughing-shan.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = ({ showBanner }) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <React.Fragment>
      <div className="about-trans"> </div>
      <div className="about-container">
        <div className="about-top">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="who-is-she"
          >
            <p className="first-name">Shanice</p>
          </div>
        </div>

        <div className="about-bottom">
          <div className="shan-image">
            <img
              className="laughing-shan"
              src={Laughing}
              alt="Photo of Shanice"
            />
          </div>

          <div className="about-details">
            <p data-aos="fade-up" data-aos-duration="2000" className="role">
              Web Developer
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="more-info"
            >
              Web Developer hailing from Toronto, Canada, currently hibernating
              in Asia <p className="dev"> {` < /developing >`}</p> and{" "}
              <span className="des">designing </span> minimalistic websites for
              those looking to transition their business off the ground and
              integrate on the{" "}
              <span className="striking"> World Wide Web.</span>{" "}
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="1800"
              className="more-info-2"
            >
              Quick walk on memory lane. Remember those early 2000s platforms
              the emergered in the early 2000s where we would create websites
              featuring photos of celebs, gifs, music in the backgroun, and a
              comment sections for our friends that visited our page? Well,
              picture me. That girl on the left of the screen, spending hours on
              end dabbling in my first encounter in coding. Thinking I was th
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
