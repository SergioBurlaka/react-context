import { useState, createContext, useContext } from "react";

import "./App.css";


function App() {

  const { theme, themeHandler } = useTheme()

  return (
    <ThemeProvider>

      <div
        style={{
          backgroundColor: theme ? "lightgray" : "darkgrey",
          margin: "0 auto",
          padding: 100,
        }}
      >
        <button
          onClick={() =>
            themeHandler((theme) => {
              console.log(theme);
              return !theme;
            })
          }
        >
          Theme switcher
        </button>
        <Counter />
      </div>
    </ThemeProvider>

  );
}

const ThemeContext = createContext({});

function useTheme() {

  return useContext(ThemeContext)
}



function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider
      value={{ theme, themeHandler: setTheme }}
    >
      {children}

    </ThemeContext.Provider>
  )
}


function Counter() {
  const [count, setCount] = useState(0);



  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Counter {count}
      </button>
    </div>
  );
}

export default App;
