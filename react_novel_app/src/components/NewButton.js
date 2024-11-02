import React from "react";
import { useNavigate } from "react-router-dom";


function NewButton() {
  const navigate = useNavigate();
  const goToContentEdit = () =>{
    navigate('/edit/:chapterId');
  }
  return(
    <button onClick={goToContentEdit}>+</button>
  );
}

export default NewButton;