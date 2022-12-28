import { createContext } from "react";

export const LoadingContext = createContext({
  loading: false,
  message: "",
  showLoading: (message: string) => {},
  hideLoading: () => {},
});
