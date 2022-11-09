import React from "react";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="app__header ">
        <div className="home__header">
          <p className="home__header--title"> Welcome to</p>
          <h1 className=" home__header--inter">Sithabile`s</h1>
          <h2 className="home__header--goudy">
            <em>Portfolio</em>
          </h2>
          <p className="home__header--intro">
            Hello this is my personal website where you can find more about me,
            what I do, what I like and how to get in touch; feel free to do it
            always, I’m a very friendly person.
          </p>
        </div>
        <div className="home__images">
          <img
            className="home__images--1"
            src="https://images.unsplash.com/photo-1618254170747-35f7ba2f9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="Coding Setup"
          />
          <img
            className="home__images--2"
            src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Coder infromnt of screen"
          />
          <img
            className="home__images--3"
            src="https://images.unsplash.com/photo-1641499303667-edde8e7567d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="DSLR camera on top of log"
          />
        </div>

        <div className="home__about">
          <div className="home__about--image">
            <img src="" alt="" />
          </div>
          <div className="home__about--text">
            <h3>About Me</h3>
            <p>
              Hi there! This is Sithabile Mananga, a Front End Web Developer
              that loves people, cultures and diversity.
            </p>
            <p>
              As a Developer I love to Work on digital products that meet
              current market requirements.
            </p>

            <div className="quote-block">
              I’M A PASSIONATE DESIGNER WITH LOTS OF DREAMS
            </div>
            <p>
              I have a strong background in a variety of industrial companies,
              focus on innovation and cutting edge technologies.
            </p>

            <div className="signature">
              <img src={images.signature} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
