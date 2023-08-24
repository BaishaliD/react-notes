//* useCallback *//

/**
 * Refer to the Parent & Child in React.memo example
 * We passed states from Parent to Child as props
 * To make sure the Child re-render ONLY when it's props are updated by the parent
 * And to prevent unneccessary render of Child when anything in Parent was updated
 * We wrapped Child in React.memo() before exporting
 * 
//? However, this does not work if a FUNCTION is passed form Parent to Child as prop
 * Even if the function does not trigger any state update (event if it simply does a console.log and nothing else)
 * Child will still be rerendered everytime something in Parent is updated
 * Because the function in Parent is called again, and that is considered as a change in the Child's prop 
 * (since we were passing the function in Child)
 //? In this case, we wrap the function in Parent in useCallback
 */

import { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /** Id we passed  uselessFunc to Child as a prop, Child would rerender
   * everytime count state in parent was updated
   */
  function uselessFunc() {
    console.log("I am a useless function");
  }

  /** By using the useless function inside useCallback (which returns a function)
   *  We make sure that Child is not re-rendered unless count2 is updated
   */
  const uselessFuncCallback = useCallback(function () {
    console.log("I am a useless function");
  }, []);

  return (
    <div>
      <h1>I am the parent</h1>
      <Child counter2={counter2} uselessFunc={uselessFuncCallback} />
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
