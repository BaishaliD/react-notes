//* useMemo hook *//

/**
 //? The useMemo hook in react returns a memoized value
 * This means, this value is cached so that it does not have to be recalculated
 * unless the parameters in the dependency array changes
 //? The useMemo Hook only runs when one of its dependencies update.
 */

import { useMemo, useState } from "react";

export default function Memoization() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function counterOneIntoHundred() {
    console.log("function increment 1 called");
    return count1 * 100;
  }

  const memoizedIncrement1 = useMemo(counterOneIntoHundred, [count1]);

  function randomFunction() {
    console.log("random function called");
    return "Hello world!";
  }

  return (
    <>
      <button
        onClick={() => {
          setCount1((prev) => ++prev);
        }}
      >
        Counter 1 - {count1}
      </button>
      <br />
      {/* By using useMemo, we are memoizing the counterOneIntoHundred function 
          And passing only counter1 as a dependency
          Hence, using memoizedIncrement1, counterOneIntoHundred function will be run only when counter1 value is updated (if button1  is clicked)
          It will not run if button 2 is clicked 
      */}
      <br />
      {memoizedIncrement1}
      <br />
      {/* This function will be called even when button 2 clicked */}
      {/* {counterOneIntoHundred()}  */}
      <br />
      {randomFunction()}
      {/* This randomFunction is called every time any of the states (count1 or count2) updates
        Despite not being dependent on any of the states
        We can memoize this function to run only once, by using useMemo and passing a blank dependency array
      */}

      <button
        onClick={() => {
          setCount2((prev) => ++prev);
        }}
      >
        Counter 2 - {count2}
      </button>
    </>
  );
}
