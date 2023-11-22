import { useTheme } from "./ThemContext/ThemeContext";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme ? "lightgray" : "darkgrey",

        margin: "0 auto",
        padding: 100,
      }}
    >
      <button onClick={() => setTheme(!theme)}>Theme switcher</button>
    </div>
  );
}

export default ThemeSwitcher;
