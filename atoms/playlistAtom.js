import { atom } from "recoil";

export const playlistState = atom({
  key: "playlistState",
  default: null,
});

export const playlistIdState = atom({
  key: "playlistIdState",
  //favorite playlist id
  default: "5SOABOtEIof36Pz2nnwrHS",
});
