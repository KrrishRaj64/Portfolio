import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-logo">My Portfolio</h1>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <a href="#about" className="nav-link">About</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="https://mindcanvas-three.vercel.app/realizing-existence" className="nav-link" target="_blank" rel="noopener noreferrer">Blog</a>
      <a href="#contact" className="nav-link">Contact</a>
    </div>
  </nav>
);

const Section = ({ id, title, children, bg = "bg-white" }) => (
  <section id={id} className={`section ${bg}`}>
    {title && <h2 className="section-title">{title}</h2>}
    <div className="section-content">{children}</div>
  </section>
);

const projects = [
  {
    title: "React Blog App",
    img: "/project1.jpg",
    description: "A blog platform built with React and Firebase.",
  },
  // Add more projects here if needed
];

const BlogPost = ({ title, date, excerpt }) => (
  <article className="blog-post">
    <h3 className="blog-post-title">{title}</h3>
    <p className="blog-post-date">{date}</p>
    <p className="blog-post-excerpt">{excerpt}</p>
    <button className="read-more-btn">Read More</button>
  </article>
);

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      date: "May 15, 2023",
      excerpt: "Learn how to use React Hooks to simplify your functional components.",
    },
    {
      id: 2,
      title: "The Power of Tailwind CSS",
      date: "April 28, 2023",
      excerpt: "Discover why Tailwind CSS has become my go-to utility-first CSS framework.",
    },
    {
      id: 3,
      title: "Building a Full-Stack Application",
      date: "March 10, 2023",
      excerpt: "A step-by-step guide to creating a MERN stack application from scratch.",
    },
  ];

  return (
    <div className="blog-page">
      <h2 className="blog-page-title">My Blog</h2>
      <div className="blog-posts-container">
        {blogPosts.map(post => (
          <BlogPost 
            key={post.id}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => (
  <>
    <Section id="home" title="">
      <div className="home-content">
        <div className="home-text">
          <h2 className="home-title">Hi, I'm Alex</h2>
          <p className="home-subtitle">
            A passionate web developer creating elegant and efficient web apps with React and Node.js.
          </p>
        </div>
        <img src="/profile.jpg" alt="Profile" className="profile-image" />
      </div>
    </Section>

    <Section id="about" title="About Me" bg="bg-gray-100">
      <div className="about-content">
        <img src="/about.jpg" alt="About Me" className="about-image" />
        <p className="about-text">
          I'm a full-stack developer with 3+ years of experience. I love working with modern tools like React, Node.js, and Tailwind CSS. I'm driven by clean code, responsive design, and user-focused development.
        </p>
      </div>
    </Section>

    <Section id="projects" title="My Projects">
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.img} alt={proj.title} className="project-image" />
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-description">{proj.description}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section id="contact" title="Contact Me" bg="bg-gray-100">
      <div className="contact-content">
        <p className="contact-text">Feel free to reach out via email or LinkedIn.</p>
        <p><strong>Email:</strong> <a href="mailto:youremail@example.com" className="contact-link">youremail@example.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourname" className="contact-link" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourname</a></p>
      </div>
    </Section>
  </>
);

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <footer className="footer">
        © {new Date().getFullYear()} Alex Dev | All rights reserved
      </footer>
    </div>
  </Router>
);

export default App;
