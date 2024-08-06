//este componente usa un custom hook
import useCounter from "./useCounter.jsx";

const CustomHook = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={increment}>incrementar</button>
      <button onClick={decrement}>decrementar</button>
      <button onClick={reset}>reiniciar</button>
    </>
  );
};

export default CustomHook;
