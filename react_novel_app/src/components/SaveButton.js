import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 保存ボタンコンポーネント
function SaveButton({ title, text}) {
  const navigate = useNavigate();
  const handleSave = () => {
    const currentTitles = JSON.parse(localStorage.getItem("titles")) || [];
    const updatedTitles = [...currentTitles, title];
    
    localStorage.setItem("titles", JSON.stringify(updatedTitles));
    localStorage.setItem('novelText',text);

    alert('保存されました！');
    navigate('/');
  };
  

  return(
    <>
    <button onClick={handleSave}>保存</button>
    </>
  );
}

export default SaveButton;