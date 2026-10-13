import { useState } from "react";
import { CountDisplay } from "./CountDisplay";
import { CountButton } from "./CountButton";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div>
      <h2>カウンターアプリ</h2>
      <CountDisplay count={count} />
      <CountButton label="+" onClick={increment} disabled={count >= 10} />
      <CountButton label="-" onClick={decrement} disabled={count <= 0} />
    </div>
  );
}
