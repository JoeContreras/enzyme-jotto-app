import { getSecretWord } from "./index";
import moxios from "moxios";
import { storeFactory } from "../../test/testUtils";

// How to test an action creator
/*
describe("correct guess", () => {
  test("returns an action with type 'CORRECT_GUESS'", () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: ActionTypes.CORRECT_GUESS });
  });
});
*/

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("secretWord is returned", () => {
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const secretWord = store.getState().secretWord;
      expect(secretWord).toBe("party");
    });
  });
});
