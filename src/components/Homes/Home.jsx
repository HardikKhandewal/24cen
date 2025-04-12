import React, { useEffect } from "react";
import Carousel from "./Carousel";
import AboutSm from "./AboutSm";
import ShowcasePro from "./ShowcasePro";
import Milestones from "./Milestones";
import WhyUs from "./WhyUs";
import ContactPage from "../ContactUs/Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[102px]">
      <Carousel />
      <AboutSm />
      <ShowcasePro />
      <Milestones />
      <WhyUs />
      <ContactPage />
    </div>
  );
};

export default Home;
