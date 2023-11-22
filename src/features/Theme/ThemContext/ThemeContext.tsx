import React, {
  createContext,
  useContext,
} from "react";


type PropsThemContext = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<PropsThemContext>({} as PropsThemContext);

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext)

