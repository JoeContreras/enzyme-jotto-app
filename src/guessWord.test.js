import { mount } from "enzyme";
import App from "./App";
import React from "react";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import { Provider } from "react-redux";

// Activate global mock to make sure that getSecretWord doesn't make network calls
jest.mock("./actions");

const setup = (initialState = {}) => {
  // TODO: APPLY STATE
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  //  Add value to input box
  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });
  //  Simulate click on submit button
  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });
  return wrapper;
};

describe("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });

  test("creates GuessedWords table", () => {
    const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe("some words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [
        { guessedWord: "pain", letterMatchCount: 2 },
        { guessedWord: "aim", letterMatchCount: 1 },
        { guessedWord: "pam", letterMatchCount: 2 },
      ],
    });
  });

  test("GuessedWords table has correct number of rows", () => {
    const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
    // 3 from array & 1 from setup function
    expect(guessedWordRows).toHaveLength(4);
  });
});

describe("secret word guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "ham", letterMatchCount: 1 }],
    });

    // enter the correct word on the input
    const inputBox = findByTestAttr(wrapper, "input-box");
    inputBox.simulate("change", { target: { value: "party" } });
    //  Simulate click on submit button
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });

  test("adds row to GuessedWords table", () => {
    const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
    // 1 word from array > 1 from setup function & 1 correct guess
    expect(guessedWordRows).toHaveLength(3);
  });

  test("displays congrats text", () => {
    const congrats = findByTestAttr(wrapper, "component-congrats");
    expect(congrats.text().length).toBeGreaterThan(0);
  });

  test("does not display input component contents", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);

    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.exists()).toBe(false);
  });
});
