import React from "react";
import { mount, shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import App from "./App";
import { Provider } from "react-redux";

// Activate global mock to make sure that getSecretWord doesn't make network calls
jest.mock("./actions");
import { getSecretWord as mockGetSecretWord } from "./actions";

const setup = () => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

describe("renders without error", () => {
  // Clear the mock calls from previous tests
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });
  test("getSecretWord works on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test("getSecretWord doesnt run on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // Using setProps because wrapper.update() does not trigger useEffect
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
