import React, { useState } from "react";

// 保存ボタンコンポーネント
function SaveButton() {
  const handleSave = () => {
    localStorage.setItem('novelTitle', title);
    localStorage.setItem('novelText',text);
    alert('保存されました！');
  };
  

  return(
    <>
    <button onClick={handleSave}>保存</button>
    </>
  );
}

export default SaveButton;