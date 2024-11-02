import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from './Header.js';

function ChapterIndex() {
  const { novelId } = useParams();

  return (
    <div>
      <Header title="章一覧" />
      <h1>章パート一覧</h1>
      <Link to="/edit/1">チャプター編集に移動</Link>
    </div>
  );
}

export default ChapterIndex;