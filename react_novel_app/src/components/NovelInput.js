import React, { useState } from "react";


function NovelInput() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const handleChange = (ev) => {
    const { name, value } = ev.target;

    if (name === 'text'){
      setText(value);
    } else if(name === 'title') {
      setTitle(value);
    }
  };

  return(
    <>
      <input type="text" value={title} name="title" onChange={handleChange} />
      <textarea value={text} name="text" onChange={handleChange} style={{ width: '100%', height: '100vh'}} />
      
    </>
  );
}

export default NovelInput;