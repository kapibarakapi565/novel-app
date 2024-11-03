import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NovelList(){
  const [titles, setTitles] = useState([]);

  useEffect(()=>{
    const savedTitles = JSON.parse(localStorage.getItem('titles')) || [];
    setTitles(savedTitles);
  },[]);

  return (
    <>
    <ul>
      {titles.map((title,index) => (
        <li key={index}>
          <Link to={`/edit/${index}`}>{title}</Link>
          </li>
      ))}
    </ul>
    </>
  );
}

export default NovelList;