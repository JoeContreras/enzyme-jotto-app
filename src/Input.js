import React, { useState } from "react";

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          type="text"
          className="mb-2 mx-sm-3"
          placeholder="Enter guess"
          data-test="input-box"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
