import React, { useReducer} from "react";

function reducer(state, action) {
  const { type } = action;

  switch (type) {
    case "h1": {
      //   state.newvalue;
      let selectedValue = window.getSelection().toString();
      let newElement = document.createElement('span')
      newElement.innerHTML = selectedValue
      newElement.style.fontWeight = 'bold'
      let textA = document.getElementById('textA')
      selectedValue = newElement
      textA.value = selectedValue
      // console.log(selectedValue)
      return {
        newvalue: [newElement.outerHTML]
      };
    }

    case "h2": {
      return {
        newvalue: "dfdfw",
      };
    }

    case "bold": {
      return {
        newvalue: "dsf",
      };
    }

    case "italic": {
      return {
        newvalue: "dsf",
      };
    }

    default:
      return state;
  }
}

const Selected = () => {
  const selectedText = () => {
    const selectedValue = window.getSelection().toString();
  };

  const [state, dispatch] = useReducer(reducer, {
    newvalue: []
  });

  console.log('State',state.newvalue[0])

  return (
    <div className="selected-comp">
      <div className="btns">
        <button onClick={() => dispatch({type: 'h1'})}>H1</button>
        <button>H2</button>
        <button>Bold</button>
        <button>İtalic</button>
      </div>
      <textarea onMouseUp={selectedText} name="" id="textA"></textarea>
      {/* <div>{state.newvalue[0]}</div> */}
      <div dangerouslySetInnerHTML={{__html: state.newvalue[0]}}></div>
    </div>
  );
};

export default Selected;
