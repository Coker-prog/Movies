import React, { useState } from "react";
import { PiTelevision } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { RiMovieFill } from "react-icons/ri";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import MovieAbout from "./MovieAbout";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const MovieDisplay = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevClick) => !prevClick);
  };

  return (
    <React.Fragment>
      <header className="flex  lg:flex-col lg:gap-10 items-center justify-between  lg:items-start px-5">
        <div id="logo" className="lg:fixed z-10">
          <PiTelevision />
          <p>MovieBox</p>
        </div>

        <div
          className="lg:flex lg:justify-start flex-col pt-32 gap-10 pl-6 text-2xl hidden border border-black rounded-r-lg h-screen fixed left-0 w-[280px]"
          id="log"
        >
          <Link to={"/"}>
            <p className="flex items-center gap-2">
              <IoMdHome /> Home
            </p>
          </Link>
          <Link to={"#"}>
            <p className="flex items-center gap-2">
              <RiMovieFill /> Movies
            </p>
          </Link>
          <Link to={"#"}>
            <p className="flex items-center gap-2">
              <PiTelevisionSimpleLight /> Tv Series
            </p>
          </Link>
          <Link to={"#"}>
            <p className="flex items-center gap-2">
              <FaRegCalendarAlt /> Upcoming
            </p>
          </Link>

          <div className="bg-red-600 w-fit h-40">fghjkldkfjh</div>
          <Link to={"#"}>
            <p className="flex items-center gap-2">
              <CiLogin /> Log Out
            </p>
          </Link>
        </div>

        <div className="relative lg:hidden  ">
          <div className=" text-2xl md:text-4xl cursor-pointer">
            {!toggle ? (
              <MdOutlineMenu onClick={handleClick} />
            ) : (
              <IoMdClose onClick={handleClick} />
            )}
          </div>
          {toggle && (
            <div className="absolute h-[50vh] justify-evenly flex flex-col gap-5 text-lg md:text-2xl  w-[100vw] py-4 px-10 right-0 m-0 bg-white">
              <Link to={"/"}>
                <p className="flex items-center gap-2">
                  <IoMdHome /> Home
                </p>
              </Link>
              <Link to={"#"}>
                <p className="flex items-center gap-2">
                  <RiMovieFill /> Movies
                </p>
              </Link>

              <Link to={"#"}>
                <p className="flex items-center gap-2">
                  <PiTelevisionSimpleLight /> Tv Series
                </p>
              </Link>
              <Link to={"#"}>
                <p className="flex items-center gap-2">
                  <FaRegCalendarAlt /> Upcoming
                </p>
              </Link>
              <Link to={"#"}>
                <p className="flex items-center gap-2">
                  <CiLogin /> Log Out
                </p>
              </Link>
            </div>
          )}
        </div>
      </header>
      <MovieAbout />
    </React.Fragment>
  );
};

export default MovieDisplay;
