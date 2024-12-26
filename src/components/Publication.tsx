import React from 'react';
import { SiGithub } from 'react-icons/si';
import { Card } from './Card';

interface PublicationProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

export const Publication: React.FC<PublicationProps> = ({
  title,
  date,
  description,
  image
}) => (
  <Card>
    <img src={image} alt={title} width="400" height="225" className="w-full rounded-[20px] mb-4" />
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{date}</p>
    <p className="text-gray-500 text-sm mb-4">{description}</p>
    <div className="flex items-center space-x-4">
      <a 
        href="#github" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <SiGithub size={16} />
      </a>
      <a 
        href="#read" 
        className="text-gray-400 hover:text-white transition-colors text-sm"
      >
        Read
      </a>
    </div>
  </Card>
);