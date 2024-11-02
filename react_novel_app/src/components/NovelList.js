import React from "react";

const NovelList = ({ novels }) => {
  return(
    <ul>
      {novels.map((novel, index) => (
        <li key={index}>{novel}</li>
      ))};
    </ul>
  );
};

export default NovelList;