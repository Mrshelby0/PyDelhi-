import React from 'react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Getting Started with Python for Data Science',
    excerpt: 'Learn the fundamentals of Python and how to get started with data analysis using popular libraries like NumPy and Pandas.',
    category: 'Data Science',
    date: 'Nov 15, 2025',
    author: 'Raj Kumar',
    image: '📊',
  },
  {
    id: 2,
    title: 'Building Web Apps with Django',
    excerpt: 'A comprehensive guide to building scalable web applications using Django and best practices for production deployment.',
    category: 'Web Dev',
    date: 'Nov 12, 2025',
    author: 'Priya Singh',
    image: '🌐',
  },
  {
    id: 3,
    title: 'Python Performance Optimization Tips',
    excerpt: 'Discover powerful techniques to optimize your Python code and improve application performance dramatically.',
    category: 'Performance',
    date: 'Nov 10, 2025',
    author: 'Arun Patel',
    image: '⚡',
  },
  {
    id: 4,
    title: 'AI and Machine Learning with TensorFlow',
    excerpt: 'Explore the world of artificial intelligence and build intelligent systems using TensorFlow and Keras.',
    category: 'AI/ML',
    date: 'Nov 8, 2025',
    author: 'Neha Gupta',
    image: '🤖',
  },
  {
    id: 5,
    title: 'Async Programming in Python',
    excerpt: 'Master asynchronous programming patterns in Python with asyncio and improve your application\'s concurrency.',
    category: 'Advanced',
    date: 'Nov 5, 2025',
    author: 'Vikram Sharma',
    image: '⚙️',
  },
  {
    id: 6,
    title: 'DevOps Best Practices for Python Projects',
    excerpt: 'Learn Docker, Kubernetes, and CI/CD pipelines to deploy Python applications like a professional.',
    category: 'DevOps',
    date: 'Nov 1, 2025',
    author: 'Sneha Verma',
    image: '🚀',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 px-4 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="badge mb-4">📚 Knowledge Hub</span>
          <h2 className="text-gradient text-4xl md:text-5xl font-bold mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Articles, tutorials, and insights from the PyDelhi community
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <article
              key={post.id}
              className="card group cursor-pointer"
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
                animationDelay: `${idx * 100}ms`,
                opacity: 0,
              }}
            >
              {/* Image/Icon */}
              <div className="w-16 h-16 rounded-lg bg-gradient-subtle flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {post.image}
              </div>

              {/* Category Badge */}
              <span className="inline-block badge badge-light mb-3 text-xs">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">By {post.author}</span>
                </div>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>

              {/* Read More */}
              <button className="mt-4 w-full py-2 rounded-lg bg-gradient-subtle text-primary font-600 hover:bg-primary hover:text-white transition-all">
                Read Article
              </button>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a href="#" className="pill">
            <span>📖</span>
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
