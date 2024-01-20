import React, { useState } from "react";
import axios from "axios";

function TextToEmoji() {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [hidden, setHidden] = useState("hidden");

  const encrypt = async () => {
    const data = { message, password };
    const result = await axios.post("http://localhost:5000/encrypt", data);
    console.log(result);
  };
  return (
    <>
      {/* Form Div */}
      <p>Text to emoji</p>
      <form className="w-full flex justify-center items-center">
        <div className="mt-5 w-3/4 flex flex-col justify-center items-start text-2xl">
          <label htmlFor="message" id="message" className="py-3 px-5">
            Enter any text
          </label>
          <textarea
            type="text"
            id="message"
            rows={1}
            placeholder="Enter Any text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="mx-5 py-3 px-5 flex justify-center items-start bg-inherit border w-full"
          />
          <label htmlFor="password" id="password" className="py-3 mt-5 px-5">
            Enter Password
          </label>
          <input
            type="password"
            id="password"
            rows={1}
            placeholder="Eg:1234"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mx-5 py-3 px-5 flex justify-center items-start bg-inherit border w-full"
          />
          <button
            className="btn flex justify-center items-center gap-1 py-3 px-5 mt-5 bg-blur m-auto w-1/4"
            onClick={(e) => {
              e.preventDefault();
              encrypt();
            }}
          >
            <span className="flex justify-center">
              <ion-icon name="lock-closed-outline" />
            </span>
            Encrypt
          </button>
        </div>
      </form>
      {/* Hidden div */}
      <div
        className={`mt-5 w-3/4 flex flex-col justify-center items-start text-2xl ${hidden}`}
      >
        <label htmlFor="encrpyted Text" className="mx-5 mb-5">
          Encrypted Text
        </label>
        <textarea
          type="text"
          readOnly
          value={encryptedText}
          className="mx-5 py-3 px-5 flex justify-center items-start bg-inherit border w-full"
        />
      </div>
    </>
  );
}

export default TextToEmoji;
