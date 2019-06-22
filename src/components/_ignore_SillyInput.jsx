import React, { useRef } from "react";

const Silly = props => {
  const myRef = useRef(null);
  const handler = e => {
    props.innerRef(myRef.current.value);
  };
  return <input type="text" ref={myRef} onChange={handler} />;
};

export default Silly;
