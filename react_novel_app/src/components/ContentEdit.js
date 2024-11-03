import React,{ useState } from "react";
import { useParams } from "react-router-dom";
import Header from './Header.js';
import NovelInput from "./NovelInput.js";
import SaveButton from "./SaveButton.js";

function ContentEdit(){
  const { chapterId } = useParams();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  return(
    <div>
      <Header title="編集画面" />
      <NovelInput title={title} text={text} setTitle={setTitle} setText={setText}/>
      <SaveButton title={title} text={text}/>
    </div>
  );
};


export default ContentEdit;