import React,{ useState } from "react";
import { useParams } from "react-router-dom";
import Header from './Header.js';
import NovelInput from "./NovelInput.js";
import SaveButton from "./SaveButton.js";

function ContentEdit(){

  const { chapterId } = useParams();

  return(
    <div>
      <Header title="編集画面" />
      <NovelInput />
      <SaveButton  />
    </div>
  );
};


export default ContentEdit;