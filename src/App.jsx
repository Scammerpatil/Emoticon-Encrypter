import { useEffect, useState } from "react";
import "./index.css";
import Arrow from "./components/Arrow";
import TextToEmoji from "./components/TextToEmoji";
import EmojiToText from "./components/EmojiToText";
function App() {
  const [arrowDirection, setArrowDirection] = useState("left");
  const [page, setPage] = useState("TextToEmoji"); // ["textToEmoji", "emojiToText"
  const updateRightArrow = () => {
    setArrowDirection("right");
  };
  const updateLeftArrow = () => {
    setArrowDirection("left");
  };
  const [selectedBtn, setSelectedBtn] = useState("encrypt");
  const updateSelectedBtn = () => {
    console.log(page);
    if (selectedBtn === "encrypt") {
      setSelectedBtn("decrypt");
      setPage("TextToEmoji");
    } else {
      setSelectedBtn("encrypt");
      setPage("EmojiToText");
    }
  };

  return (
    <div className="center flex flex-col justify-center items-center h-screen bg-background-center text-white font-family-roboto">
      <video autoPlay muted loop id="myVideo" className="video-background">
        <source src="https://i.imgur.com/bfrUvdb.mp4" type="video/mp4" />
      </video>
      {/* Main Div which holds all components under the Text */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        {/* TEXT => Emoji Div */}
        <div className="text-6xl header flex justify-center items-start gap-5">
          <h1 className="font-family-roboto">Text</h1>
          <span className="flex justify-center items-center">
            <Arrow direction={arrowDirection} />
          </span>
          <h1 className="font-family-roboto">Emojis</h1>
        </div>
        {/* Button Div */}
        <div className="mt-5 text-3xl gap-3 flex flex-row justify-center bg-blur py-3 px-7 w-2/4">
          <button
            className="btn flex justify-center items-center py-3 px-5 mx-1.5 w-1/2"
            onClick={() => {
              updateLeftArrow();
              updateSelectedBtn();
            }}
          >
            <span className="flex justify-center items-center">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>{" "}
            Encrypt
          </button>
          <button
            className=" btn flex justify-center items-center py-3 px-5 mx-1.5 w-1/2"
            onClick={updateRightArrow}
          >
            <span className="flex justify-center items-center">
              <ion-icon
                name="lock-open-outline"
                className="flex justify-center items-center"
              ></ion-icon>
            </span>{" "}
            Decrypt
          </button>
        </div>
        {page === "TextToEmoji" ? <TextToEmoji /> : <EmojiToText />}
      </div>
    </div>
  );
}

export default App;
