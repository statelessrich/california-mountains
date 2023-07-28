"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

export default function Home() {
  function Hero() {
    return <div className="hero bg-[url('/hero-bg.png')] h-[450px] bg-no-repeat sm:h-[826px]"></div>;
  }

  function History() {
    const [carouselSettings, setCarouselSettings] = useState({});

    // set carousel settings on pageload, since window object is not available on server
    useEffect(() => {
      setCarouselSettings({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: window?.innerWidth > 640 ? 4 : 1,
        centerMode: true,
      });
    }, []);

    return (
      <div
        className="history overflow-hidden bg-[url('/history-bg.png')] h-[750px] px-2 bg-no-repeat sm:h-[826px] justify-center flex relative color-[#63769d]"
        id="history"
      >
        <div className="copy-container max-w-4xl">
          <h2 className="pt-[63px]">
            <span className="big-num">01.</span>
            <span className="title left-[116px]">HISTORY</span>
          </h2>
          <p className="ml-[68px] mt-[-36px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat
            rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit
            tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
            hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
          </p>
        </div>

        <div className="carousel pt-[27px] pb-[36px] w-full absolute bottom-0 bg-[#414f6b] bg-opacity-80 flex flex-col justify-center">
          <Slider {...carouselSettings}>
            <div>
              <Image src="/thumb-1.png" alt="Slide 1" width={253} height={169} />
            </div>
            <div>
              <Image src="/thumb-2.png" alt="Slide 2" width={253} height={169} />
            </div>
            <div>
              <Image src="/thumb-1.png" alt="Slide 1" width={253} height={169} />
            </div>
            <div>
              <Image src="/thumb-2.png" alt="Slide 2" width={253} height={169} />
            </div>
            <div>
              <Image src="/thumb-1.png" alt="Slide 1" width={253} height={169} />
            </div>
            <div>
              <Image src="/thumb-2.png" alt="Slide 2" width={253} height={169} />
            </div>
            <div>
              <Image src="/thumb-1.png" alt="Slide 1" width={253} height={169} />
            </div>
            <div>
              <Image src="/thumb-2.png" alt="Slide 2" width={253} height={169} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }

  function Climb() {
    const [activeTab, setActiveTab] = useState(1);

    function Tab1() {
      return (
        <div onClick={() => setActiveTab(1)} className={`tab ${activeTab === 1 ? "active" : ""} sm:order-1`}>
          MOUNTAIN 1
        </div>
      );
    }
    function Tab2() {
      return (
        <div onClick={() => setActiveTab(2)} className={`tab ${activeTab === 2 ? "active" : ""} sm:order-2`}>
          MOUNTAIN 2
        </div>
      );
    }

    function Mountain1() {
      return (
        <div
          className={`mountain-content bg-[url('/mountain-1.jpg')] ${
            activeTab === 1 ? "active" : ""
          } sm:order-3`}
        >
          <div className="schedule">
            <h2>SCHEDULE</h2>
            <p>
              25 Nov 2016 Vestibulum viverra
              <br />
              28 Nov 2016 Vestibulum viverra
              <br />
              <br />
              18 Dec 2016 Vestibulum viverra
              <br />
              <br />7 Jan 2017 Vestibulum viverra
            </p>
          </div>
        </div>
      );
    }
    function Mountain2() {
      return (
        <div
          className={`mountain-content bg-[url('/mountain-2.jpg')] ${
            activeTab === 2 ? "active" : ""
          } sm:order-4`}
        >
          <div className="schedule">
            <h2>SCHEDULE</h2>
            <p>
              17 Nov 2016 Vestibulum viverra
              <br />
              <br />
              13 Dec 2016 Vestibulum viverra
              <br />
              28 Dec 2016 Vestibulum viverra
              <br />
              <br /> 9 Feb 2017 Vestibulum viverra
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="climb" id="team">
        <div className="px-2 copy-container h-[350px] sm:h-[180px] flex flex-col sm:flex-row sm:items-center w-full justify-center sm:gap-[100px]">
          <div>
            <h2>
              <span className="big-num">02.</span>
              <span className="title left-[140px] bottom-[55px]">CLIMB</span>
            </h2>
          </div>
          <p className="max-w-[625px]">
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac,
            tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
          </p>
        </div>

        {/* mountain tabs */}
        <div className="mountain-tabs sm:hidden">
          <Tab1 />
          <Mountain1 />
          <Tab2 />
          <Mountain2 />
        </div>

        {/* mountain tabs desktop */}
        <div className="mountain-tabs hidden sm:flex flex-col">
          <div className="tabs flex flex-row pl-[19vw]">
            <Tab1 />
            <Tab2 />
          </div>
          <div className="tab-content">
            <Mountain1 />
            <Mountain2 />
          </div>
        </div>
      </div>
    );
  }

  function StickyNav() {
    const [isSticky, setIsSticky] = useState(false);
    const [navPosition, setNavPosition] = useState(450);

    // set sticky positioning trigger based on screen size. done in useEffect when window object is available.
    useEffect(() => {
      if (window?.innerWidth > 640) {
        setNavPosition(826);
      }
    }, []);

    // check if nav should be sticky on scroll
    useEffect(() => {
      const checkStick = () => {
        const windowHeight = window?.scrollY;
        setIsSticky(windowHeight > navPosition);
      };

      window?.addEventListener("scroll", checkStick);

      return () => {
        window?.removeEventListener("scroll", checkStick);
      };
    }, [navPosition]);

    return (
      <div
        className={`sticky-nav w-full bg-white top-0 z-[999] ${
          isSticky ? "fixed top-0 left-0 z-50" : "relative"
        }`}
      >
        <Nav />
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StickyNav />
        <History />
        <Climb />
      </main>
      <Footer />
    </>
  );
}
