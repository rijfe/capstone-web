import { atom, selector } from "recoil";

const userName = atom({
  key: "userName",
  default: "",
});

const getUserName = selector({
  key: "getUserName",
  get: ({ get }) => {
    const state = get(userName);
    return state;
  },
});

export { userName, getUserName };
