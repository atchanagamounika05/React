import React from "react";

function Hero({ heroName }) {
  console.log("heroname", heroName);
  if (heroName === "Joker") {
    throw new Error("Not a hero");
  }

  return <div>Hai {heroName}</div>;
}

export default Hero;
