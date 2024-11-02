import React, { useState } from "react";

function NovelTitleInput() {
  const [title, setTitle] = useState('');
  const handleChange = (ev) => {
    setTitle(ev.target.value);
  };

  return(
    <>
     <input type="text" value={title} onChange={handleChange} />
    </>
  );
}

export default NovelTitleInput;