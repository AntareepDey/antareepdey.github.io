import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  href?: string;
}

const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 transform group-hover:translate-x-1 transition-transform"
  >
    <defs>
      <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="50%" stopColor="#e879f9" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
    <path
      d="M9 6l6 6-6 6"
      stroke="url(#arrow-gradient)"
      fill="1"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, href }) => (
  <div className="flex justify-between items-center mb-8">
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      viewport={{ once: true }}
      className="text-3xl font-bold gradient-heading"
    >
      {title}
    </motion.h2>
    {href && (
      <motion.a
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        href={href}
        className="flex items-center group"
      >
        <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
          See all
        </span>
        <ArrowIcon />
      </motion.a>
    )}
  </div>
);