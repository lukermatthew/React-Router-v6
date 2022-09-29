import { useState, useReducer } from "react";

//object to be called as eg:  ACTION.INCREMENT
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  NEW_USER_INPUT: "newUserInput",
  TG_COLOR: "tgColor",
};

//const reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.NEW_USER_INPUT:
      return { ...state, user: action.payload };
    case ACTION.TG_COLOR:
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

const ReducerPage = () => {
  //state and dispatch
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    user: "",
    color: false,
  });
  // const [count, setCount] = useState(0);
  // const [user, setUser] = useState("");
  // const [color, setColor] = useState(true);

  return (
    <div className="App" style={{ color: state.color ? "#333" : "#7928f3" }}>
      <input
        type="text"
        value={state.user}
        onChange={(e) =>
          dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
        }
      />
      <strong>{state.count}</strong>

      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}> + </button>
      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}> - </button>
      <button onClick={() => dispatch({ type: ACTION.TG_COLOR })}>
        Change color
      </button>
      <strong>{state.user}</strong>
    </div>
  );
};

export default ReducerPage;
