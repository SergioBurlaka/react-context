import {
  useState,
  createContext,
  PropsWithChildren,
  FC,
  useContext,
} from "react";

type PropsCounterContext = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CounterContext = createContext<PropsCounterContext>(
  {} as PropsCounterContext
);

// eslint-disable-next-line react-refresh/only-export-components
export const useCounterContext = () => useContext(CounterContext);

export const CounterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
