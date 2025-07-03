import React from "react";
import "./BlogPage.css";
import BlogCard from "./BlogCard";
import garden from "../assets/garden.jpg";
import write from "../assets/write.jpeg";
import nature from "../assets/nature_woods.jpg";
import detox from "../assets/detox.jpeg"; 
import selflove from "../assets/selflove.jpeg";
import blogHero from '../assets/blog.jpg';

const blogPosts = [
  {
    title: "Mindful Mornings",
    description: "Kickstart your day with 10 mindful minutes. Here's how you can create the habit.",
    image: garden,
    author: "Vanshika Yadav",
    link: "https://medium.com/@vanshika.connects/mindful-mornings-start-your-day-with-10-intentional-minutes-f8f05f98a338", // your blog link
  },
  {
    title: "Journaling Magic",
    description: "Writing your thoughts daily improves emotional clarity. Here's why it works.",
    image: write,
    author: "Riya Garg",
    link: "https://medium.com/@vanshika.connects/%EF%B8%8Fjournaling-magic-how-writing-daily-transforms-your-inner-world-103c54b0b8ad",
  },
  {
    title: "How Nature Heals",
    description: "Discover how spending time in nature improves mental health and focus.",
    image: nature,
    author: "Kartik Rajpurohit",
    link: "https://medium.com/@vanshika.connects/how-nature-heals-the-silent-therapy-we-often-forget-7940761a49fb",
  },
  {
    title: "Digital Detox Day",
    description: "Why logging off can boost your happiness and productivity.",
    image: detox,
    author: "Vansh Deshwal",
    link: "https://medium.com/@vanshika.connects/4364a6f6112f",
  },
  {
    title: "Self-Love Sundays",
    description: "Make Sundays your recharge ritual with this gentle self-care checklist.",
    image: selflove,
    author: "Anushka Tyagi",
    link: "https://medium.com/@vanshika.connects/6caac7a5a740",
  },
];


const BlogPage = () => {
  return (
    <>
      <section className="blog-hero" style={{ backgroundImage: `url(${blogHero})` }}>
          <div className="hero-content">
            <h1>Our Blog</h1>
            <p>Explore insights, tips, and real stories to support your mental wellness journey.</p>
          </div>
      </section>

      <section className="blog-page">
        <h2>Latest Posts</h2>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            description={post.description}
            image={post.image}
            author={post.author}
            link={post.link}
          />
        ))}
      </section>
    </>
  );
};

export default BlogPage;
