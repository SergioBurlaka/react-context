import { useState, FC, PropsWithChildren } from "react";

import { ThemeContext } from "./ThemeContext";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
