import React, { useReducer } from "react";

function reducer(state, action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum Reached" : null,
      };
    }

    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum Reached" : null,
      };
    }

    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>{state.error}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
    </div>
  );
};

export default Counter;
