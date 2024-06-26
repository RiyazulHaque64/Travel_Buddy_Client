export const setToLocalStorage = (key: string, value: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  } else {
    localStorage.setItem(key, value);
  }
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === undefined) {
    console.log("inside if");
    return "";
  } else {
    return localStorage.getItem(key);
  }
};

export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  } else {
    localStorage.removeItem(key);
  }
};
