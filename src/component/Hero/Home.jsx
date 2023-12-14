import React, { useState } from "react";
import { PiTelevisionDuotone } from "react-icons/pi";
import { FiAlignJustify } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { useRef } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { FcRating } from "react-icons/fc";
import { AiFillPlayCircle } from "react-icons/ai";
import Movie from "./Movie";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { get_datas, isError } from "../../features/movieSlice";
import { useEffect } from "react";

const Home = () => {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");

  const { datas, isLoading, error } = useSelector((state) => state.movieSlice);
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setMovies(datas);
  }, [datas]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b2a94a788bb4a0469f5295f047a3fa3b"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "couldn't fetch movie data from server due to network error"
          );
        }
        return res.json();
      })
      .then((res) => {
        dispatch(get_datas(res.results));
      })
      .catch((error) => {
        dispatch(isError(error.message));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (search !== "") return;

    setMovies(datas);
  }, [search, datas]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const handleSubmit = () => {
    if (search === "") {
      alert("yet to work on this section ");
    }

    setMovies([
      ...datas.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase())
      ),
    ]);
  };
  return (
    <React.Fragment>
      <header className="bg-hero-image lg:h-[100vh] md:h-[70vh] bg-center bg-cover object-cover ">
        <div className=" w-[90%] m-[auto]">
          <div id="home" className="flex items-center justify-between">
            <div id="logo" className="flex">
              <PiTelevisionDuotone className="text-3xl md:text-3xl" />
              <p
                className="md:ml-5 sm:ml-1 sm:text-xl md:text-2xl text-floralWhite lg:text-floralWhite md:text-black
                             sm:text-black"
              >
                Movie Box
              </p>
            </div>
            <div id="movie_search" style={{ position: "relative" }}>
              {/* <form onSubmit={handleSubmit}> */}
              <input
                id="input_header"
                ref={inputRef}
                type="text"
                placeholder="What do you want to watch?"
                value={search}
                onChange={handleChange}
                onKeyDown={function (event) {
                  if (event.keyCode === 13) {
                    handleSubmit();
                  }
                }}
                className="bg-transparent border-black rounded-lg pl-9 py-[5px]
                            xl:w-[500px] lg:w-[500px] md:w-[300px] sm:hidden md:block "
              />
              <GoSearch
                onClick={() => {
                  inputRef.current.focus();
                }}
                className=" text-xl absolute top-2 left-2 sm:hidden md:block"
              />
              {/* </form> */}
            </div>
            <div id="sign" className="flex items-center">
              <p
                className="sm:mr-2 md:mr-5  sm:text-xl md:text-2xl lg:text-floralWhite md:text-black sm:text-black md:ml-5 
                            "
              >
                Sign in
              </p>
              <FiAlignJustify className="text-2xl md:text-3xl" />
            </div>
          </div>
          <section className="h-[70vh] flex flex-col justify-center">
            <div
              id="header_body"
              style={{ lineHeight: "1.3em" }}
              className="text-floralWhite lg:text-5xl md:text-4xl sm:text-2xl 
                        font-medium pb-5"
            >
              <h1>Spider Man:</h1>
              <h1> Across The Spider-Verse</h1>
            </div>
            <div
              id="movie_logo"
              className="flex items-center pb-3  md:text-base"
            >
              <RiMovie2Line className="text-2xl" />
              <span>
                <p className="ml-3 text-floralWhite lg:text-xl font-light">
                  86.0/100
                </p>
              </span>
              <FcRating className="ml-5 text-2xl" />
              <span>
                <p className="ml-3 text-floralWhite lg:text-xl font-light">
                  94%
                </p>
              </span>
            </div>
            <div
              id="header_text"
              style={{ lineHeight: "1.7em" }}
              className="text-floralWhite lg:max-w-[850px] md:max-w-[550px]
                         lg:text-1xl sm:text-lg font-medium pb-5"
            >
              <p>
                Miles Morales catapults across the Multiverse, where he
                encounters a team of Spider-People charged with protecting its
                very existence. When the heroes clash on how to handle a new
                threat, Miles must redefine what it means to be a hero.
              </p>
            </div>
            <div id="link">
              <button className="flex items-center text-floralWhite bg-Rose py-2 px-4 lg:text-lg rounded-lg">
                {" "}
                <AiFillPlayCircle style={{ fontSize: "1.5rem" }} /> WATCH
                TRAILER
              </button>
            </div>
          </section>
        </div>
      </header>
      <Movie datas={movies} isLoading={isLoading} error={error} />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
