// components/BlogCard.jsx
import React from "react";
import "./BlogCard.css";

const BlogCard = ({ title, description, image, author, link }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="blog-author">By {author}</p>
        <a
          href={link}
          className="read-more"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
