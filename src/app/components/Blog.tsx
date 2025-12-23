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

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !postsRef.current.includes(el)) {
      postsRef.current.push(el);
    }
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
            className="mb-4 font-['Clash_Grotesk'] text-5xl font-semibold md:text-6xl lg:text-7xl"
          >
            Blog
          </h2>
          <p ref={subtitleRef} className="text-lg text-gray-600 md:text-xl">
            Thoughts on design, development, and everything in between
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              ref={addToRefs}
              className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-900 hover:shadow-lg"
            >
              {/* Category Badge */}
              <div className="mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                {post.category}
              </div>

              {/* Title */}
              <h3 className="mb-3 font-['Clash_Grotesk'] text-xl font-semibold leading-tight transition-colors group-hover:text-gray-600 md:text-2xl">
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
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-900 opacity-0 transition-opacity group-hover:opacity-100">
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

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-900 px-8 py-4 font-medium transition-all hover:bg-gray-900 hover:text-white">
            View All Articles
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
