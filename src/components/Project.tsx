import React from 'react';
import { Card } from './Card';
import { siGithub } from 'simple-icons';

interface ProjectProps {
  title: string;
  year: string;
  description: string;
  gradient: string;
  githubUrl?: string;
}

export const Project: React.FC<ProjectProps> = ({
  title,
  year,
  description,
  gradient,
  githubUrl
}) => (
  <Card>
    <div className={`${gradient} rounded-lg p-8 mb-4`}>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-sm text-gray-400 mb-2">{year}</p>
    <p className="text-gray-300 mb-4">{description}</p>
    {githubUrl && (
      <a 
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-gray-400 hover:text-white transition-colors"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
        >
          <path d={siGithub.path} />
        </svg>
      </a>
    )}
  </Card>
);