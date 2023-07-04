

import { atom } from "recoil";

const checkLoginAtom = atom({
    key: 'authCheck', 
    default:  localStorage.getItem("authenticated")? localStorage.getItem("authenticated") : 'false', 
  });

const notificationAtom = atom({
  key: "notificationAtom",
  default: [],
});
const notificationCountAtom = atom({
  key: "notificationCountAtom",
  default: 0,
});
const notificationViewAtom = atom({
  key: "notificationViewAtom",
  default: [],
});

export { checkLoginAtom, notificationCountAtom, notificationViewAtom };