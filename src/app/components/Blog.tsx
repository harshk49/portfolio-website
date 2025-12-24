"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Explore the best practices and patterns for creating performant, scalable web applications using Next.js 14 and React Server Components.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Web Development",
    slug: "building-scalable-web-apps-nextjs",
  },
  {
    id: 2,
    title: "Mastering GSAP Animations in React",
    excerpt:
      "A comprehensive guide to creating smooth, performant animations in React applications using GSAP and modern best practices.",
    date: "Dec 8, 2024",
    readTime: "12 min read",
    category: "Animation",
    slug: "mastering-gsap-animations-react",
  },
  {
    id: 3,
    title: "The Power of TypeScript in Modern Development",
    excerpt:
      "Discover how TypeScript enhances code quality, improves developer experience, and catches bugs before they reach production.",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    category: "TypeScript",
    slug: "power-of-typescript-modern-dev",
  },
  {
    id: 4,
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt:
      "Learn practical techniques to optimize your React applications, from memo and useMemo to code splitting and lazy loading.",
    date: "Nov 20, 2024",
    readTime: "15 min read",
    category: "Performance",
    slug: "optimizing-react-performance",
  },
  {
    id: 5,
    title: "Tailwind CSS: Utility-First Design Philosophy",
    excerpt:
      "Understanding the utility-first approach to styling and how Tailwind CSS can speed up your development workflow.",
    date: "Nov 12, 2024",
    readTime: "7 min read",
    category: "CSS",
    slug: "tailwind-utility-first-design",
  },
  {
    id: 6,
    title: "State Management in React: A Comprehensive Guide",
    excerpt:
      "Compare different state management solutions for React applications, from Context API to Zustand and beyond.",
    date: "Nov 5, 2024",
    readTime: "14 min read",
    category: "React",
    slug: "state-management-react-guide",
  },
];

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const postsRef = useRef<HTMLDivElement[]>([]);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate each blog post
      postsRef.current.forEach((post, index) => {
        if (post) {
          gsap.from(post, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: post,
              start: "top 90%",
              end: "top 65%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative min-h-screen px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            ref={headingRef}
            className="mb-4 font-['Clash_Grotesk'] text-5xl font-normal md:text-6xl lg:text-7xl"
            style={{ color: "#FF3B30" }}
          >
            Blogs
          </h2>
          <p ref={subtitleRef} className="text-lg text-gray-600 md:text-xl">
            Thoughts on design, development, and everything in between
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              ref={(el) => {
                if (el && !postsRef.current.includes(el as HTMLDivElement)) {
                  postsRef.current.push(el as HTMLDivElement);
                }
                cardsRef.current[index] = el;
              }}
              className="blog-card group cursor-pointer rounded-2xl border-2 border-gray-200 bg-white p-6 relative transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
              onMouseMove={handleCardMouseMove}
              style={{
                background: "white",
              }}
            >
              {/* Category Badge */}
              <div className="mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                {post.category}
              </div>

              {/* Title */}
              <h3 className="mb-3 font-['Clash_Grotesk'] text-xl font-semibold leading-tight md:text-2xl">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-4 line-clamp-3 text-sm text-gray-600 md:text-base">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {post.date}
                </span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {post.readTime}
                </span>
              </div>

              {/* Read More Link */}
              <div
                className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100"
                style={{ color: "#FF3B30" }}
              >
                Read article
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* Modern Button */}
        <div className="mt-16 flex justify-center">
          <button className="modern-btn group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium transition-all duration-300 hover:gap-4">
            <span className="relative z-10">View All Articles</span>
            <svg
              className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .blog-card {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          will-change: transform;
        }

        .blog-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .blog-card::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 1rem;
          padding: 2px;
          background: radial-gradient(
            400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(255, 59, 48, 0.8),
            transparent 40%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .blog-card:hover::before {
          opacity: 1;
        }

        .modern-btn {
          color: #1a1a1a;
          background: transparent;
          border: 1.5px solid #ff3b30;
          overflow: hidden;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modern-btn:hover {
          color: #ffffff;
          background: #ff3b30;
          border-color: #ff3b30;
          box-shadow: 0 10px 30px rgba(255, 59, 48, 0.3),
            0 0 0 1px rgba(255, 59, 48, 0.1);
          transform: translateY(-2px);
        }

        .modern-btn::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s ease;
          z-index: 1;
          pointer-events: none;
        }

        .modern-btn:hover::after {
          left: 100%;
        }
      `}</style>
    </section>
  );
};

export default Blog;
