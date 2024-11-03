import React from "react";
import { Link } from 'react-router-dom';
import Header from './Header.js';
import NewButton from "./NewButton.js";
import ContentEdit from "./ContentEdit";
import NovelList from "./NovelList";

function NovelIndex() {

  return (
    <>
      <Header title="小説一覧" />
      <Link to="/chapter/1">章パート一覧に移動</Link>
      <NovelList />
      <NewButton />
    </>
  );
}

export default NovelIndex;