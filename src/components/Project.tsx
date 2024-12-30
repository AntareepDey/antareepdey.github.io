import React from 'react';
import { Card } from './Card';
import { SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  year: string;
  description: string;
  image: string;
  githubUrl?: string;
}

export const Project: React.FC<ProjectProps> = ({
  title,
  year,
  description,
  image,
  githubUrl
}) => (
  <Card>
    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-400 mb-2">{year}</p>
    <p className="text-gray-300 text-sm mb-4">{description}</p>
    {githubUrl && (
      <motion.a 
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
        whileHover={{ x: 2 }}
      >
        <SiGithub size={16} className="group-hover:text-white" />
        <span className="text-sm group-hover:text-white">View on Github</span>
      </motion.a>
    )}
  </Card>
);