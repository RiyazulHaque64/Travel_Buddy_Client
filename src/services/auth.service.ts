import { authKey } from "@/constants/authKey";
import { setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = (info: string) => {
  setToLocalStorage(authKey, info);
};
