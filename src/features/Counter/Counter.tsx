import { useCounterContext } from "./CounterContext/CounterProvider";

function Counter() {
  const { setCount, count } = useCounterContext();
  console.log('Counter fire')


  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        Counter {count}
      </button>
    </div>
  );
}

export default Counter;
