import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  href?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, href }) => (
  <div className="flex justify-between items-center mb-8">
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -2 }}
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
        <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          See all
        </span>
        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform text-blue-400" />
      </motion.a>
    )}
  </div>
);