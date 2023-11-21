import { useState, createContext, useContext } from "react";

import "./App.css";

import Counter from "./Counter";

type PropsThemContext = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<PropsThemContext>({} as PropsThemContext);

function useTheme() {
  return useContext(ThemeContext);
}

const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  const { theme, setTheme } = useTheme();

  console.log("theme", theme);
  console.log("setTheme", setTheme);

  return (
    <div>
      <ThemeProvider>
        <div
          style={{
            backgroundColor: theme ? "lightgray" : "darkgrey",
            margin: "0 auto",
            padding: 100,
          }}
        >
          <button onClick={() => setTheme((theme) => !theme)}>
            Theme switcher
          </button>
          <Counter />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
