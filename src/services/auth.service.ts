import { authKey } from "@/constants/authKey";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";
import { jwtDecode } from "jwt-decode";

type TDecodedInfo = {
  id: string;
  email: string;
  role: "USER" | "ADMIN";
  iat: number;
  exp: number;
};

export const storeUserInfo = (info: string) => {
  setToLocalStorage(authKey, info);
};

export const getUserInfo = () => {
  const token = getFromLocalStorage(authKey);
  if (token) {
    const decodedInfo: TDecodedInfo = jwtDecode(token);
    return {
      ...decodedInfo,
      role: decodedInfo.role.toLowerCase(),
    };
  } else {
    return null;
  }
};

export const removeUserInfo = () => {
  removeFromLocalStorage(authKey);
};
