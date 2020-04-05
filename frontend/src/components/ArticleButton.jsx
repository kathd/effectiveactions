import React from "react";

const ArticleButton = ({ title, icon }) => {
  return (
    <div className="article-btn">
      <h4>{title}</h4>
      <img src={icon} alt={title} />
    </div>
  );
};

export default ArticleButton;
