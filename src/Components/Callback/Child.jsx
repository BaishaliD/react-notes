import React, { useEffect } from "react";

function Child({ counter2, uselessFunc }) {
  useEffect(() => {
    console.log("Child rendered");
  });
  return (
    <div style={{ border: "1px solid white", padding: "1rem", margin: "1rem" }}>
      <h3>I am the child!</h3>
      <h3>Child counter : {counter2}</h3>
      <button onClick={uselessFunc}>Hit me!</button>
    </div>
  );
}

/**
 * If we did not use React.memo, the Child component would have been rendered everytime
 * the counter in Parent was updated also
 * By using React.memo, we can render the Child only when any of its props changes,
 * ie. only when the count2 state is updated by the Parent
 */
// export default Child

export default React.memo(Child);
