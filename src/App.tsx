import "./App.css";

import {
  CounterProvider,
} from "./features/Counter/CounterContext/CounterProvider";

import ThemeSwitcher from "./features/Theme/ThemeSwitcher";
import Counter from "./features/Counter/Counter";
import ThemeProvider from "./features/Theme/ThemContext/ThemeProvider";

function App() {

  return (
    <div>
      <ThemeProvider>
        <CounterProvider>
          <ThemeSwitcher />
          <Counter />
        </CounterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
