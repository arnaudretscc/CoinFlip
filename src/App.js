import { useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./styles.css";
import images from "./images";

const animationsClasses = ["heads", "tails"];
const chooseCoinFlip = () => animationsClasses[Math.floor(Math.random() * 2)];

function App() {
  const [animation, setAnimation] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [tries, setTries] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);

  const handleButtonClick = () => {
    setTries((currentTries) => currentTries + 1);
    const nextAnimation = chooseCoinFlip();
    setAnimation(nextAnimation);
    setIsAnimating(true);
    setTimeout(() => {
      nextAnimation === "tails"
        ? setTails((currentTails) => currentTails + 1)
        : setHeads((currentHeads) => currentHeads + 1);
      setIsAnimating(false);
    }, 1000);
  };

  const reset = () => {
    setHeads(0);
    setTails(0);
  };
  return (
    <div className={`app ${animation}`}>
      <div className="game">
        <div key={`coin_wrapper_${tries}`}>
          <img
            className="head"
            src={images.heads}
            alt="Head part of the coin"
            width="150px"
          />
          <img
            className="tail"
            src={images.tails}
            alt="Tail part of the coin"
            width="150px"
          />
        </div>
        <div className="infos">
          <div className="results">
            <p>Heads: {heads} </p>
            <p>Tails: {tails} </p>
          </div>
          <div className="buttons">
            <Button
              type="primary"
              size={"large"}
              onClick={() => handleButtonClick()}
              disabled={isAnimating}
            >
              FLIP
            </Button>
            <Button
              type="primary"
              size={"large"}
              onClick={reset}
              disabled={isAnimating}
            >
              RESET
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
