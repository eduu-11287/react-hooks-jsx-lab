import React from "react";
import { image } from "../data/data";

function About() {
  return <div id = "about">
    <h2>About Me</h2>
    <p>I made this code work</p>
    <img src = {image} alt = "Imade this"></img>
  </div>;
}

export default About;
