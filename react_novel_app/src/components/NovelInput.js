import React, { useState } from "react";


function NovelInput() {
  const [text, setText] = useState('');
  const handleChange = (ev) => {
    setText(ev.target.value);
  };

  return(
    <>
      <textarea value={text} onChange={handleChange} style={{ width: '100%', height: '100vh'}} />
      <p>{text}</p>
    </>
  );
}

export default NovelInput;