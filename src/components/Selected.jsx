import React, { useReducer } from "react";

function reducer(state, action) {
  const { type } = action;
  let selectedValue = window.getSelection().toString();
  let newElement = document.createElement("span");
  newElement.innerHTML = selectedValue;

  switch (type) {
    case "h1": {
      newElement.style.fontWeight = "bold";
      newElement.style.fontSize = "34px";
      selectedValue = newElement;
      return {
        newvalue: [newElement.outerHTML],
      };
    }

    case "h2": {
      newElement.style.fontWeight = "bold";
      newElement.style.fontSize = "30px";
      selectedValue = newElement;
      return {
        newvalue: [newElement.outerHTML],
      };
    }

    case "bold": {
      newElement.style.fontWeight = "bolder";
      newElement.style.fontSize = "16px";
      selectedValue = newElement;
      return {
        newvalue: [newElement.outerHTML],
      };
    }

    case "italic": {
      newElement.style.fontStyle = "italic";
      newElement.style.fontSize = "16px";
      selectedValue = newElement;
      return {
        newvalue: [newElement.outerHTML],
      };
    }

    default:
      return state;
  }
}

const Selected = () => {
  const selectedText = () => {
    const selectedValue = window.getSelection().toString();
    console.log(selectedValue)
  };
  

  const [state, dispatch] = useReducer(reducer, {
    newvalue: [],
  });

  return (
    <>
      <div className="selected-comp">
        <div className="btns">
          <button onClick={() => dispatch({ type: "h1" })}>H1</button>{" "}
          &nbsp;&nbsp;
          <button onClick={() => dispatch({ type: "h2" })}>H2</button>{" "}
          &nbsp;&nbsp;
          <button onClick={() => dispatch({ type: "bold" })}>Bold</button>{" "}
          &nbsp;&nbsp;
          <button onClick={() => dispatch({ type: "italic" })}>İtalic</button>
        </div>
        <textarea onMouseUp={selectedText} name="" id="textA"></textarea>
      </div>
      <div
        style={{ justifySelf: "left" }}
        dangerouslySetInnerHTML={{ __html: state.newvalue[0] }}
      ></div>
    </>
  );
};

export default Selected;
