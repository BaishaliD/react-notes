//* React.memo *//

/**
 * React.memo is used when exporting a child component
 * So that it re-renders only when it's props are updated
 * But not when anything else on the parent component is updated
 */

import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <div>
      <h1>I am the parent</h1>
      <Child counter2={counter2} />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Parent Counter : {counter}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        Increment Child counter
      </button>
    </div>
  );
}
