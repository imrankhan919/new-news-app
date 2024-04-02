import { useReducer } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeStatus = JSON.parse(localStorage.getItem("theme"));

  const initialState = {
    theme: themeStatus,
  };

  const ThemeReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        localStorage.setItem(
          "theme",
          JSON.stringify(state.theme ? false : true)
        );
        return {
          ...state,
          theme: state.theme ? false : true,
        };
    }
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ dispatch, ...state }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
