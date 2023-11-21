import { useState } from "react";

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

export default Counter;
