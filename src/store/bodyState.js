import { atom, selector } from "recoil";

const bodyState = atom({
  key: "bodyState",
  default: false,
});

const getBodyState = selector({
  key: "getBodyState",
  get: ({ get }) => {
    const state = get(bodyState);
    return state;
  },
});

export { bodyState, getBodyState };
