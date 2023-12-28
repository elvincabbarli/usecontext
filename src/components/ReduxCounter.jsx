import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementCustom } from "../store/counterSlice";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <div className="redux-count">
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementCustom(5))}>+5</button>
    </div>
  );
};

export default ReduxCounter;
