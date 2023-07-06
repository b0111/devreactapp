

import { atom } from "recoil";

const checkLoginAtom = atom({
    key: 'checkLoginAtom', 
    default:  localStorage.getItem("authenticated")? localStorage.getItem("authenticated") : 'false', 
  });


export { checkLoginAtom  };