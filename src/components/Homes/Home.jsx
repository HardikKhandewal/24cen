import React, { useEffect } from "react"; // Correct import of useEffect
import Carousel from "./Carousel";
import AboutSm from "./AboutSm";
import ShowcasePro from "./ShowcasePro";
import Milestones from "./Milestones";
import WhyUs from "./WhyUs";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <Carousel />
      <AboutSm />
      <Milestones />
      <ShowcasePro />
      <WhyUs />
    </>
  );
};

export default Home;
