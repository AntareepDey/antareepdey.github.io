import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ duration: 0.2 }}
    className={`glass-card p-6 rounded-[20px] ${className}`}
  >
    {children}
  </motion.div>
);