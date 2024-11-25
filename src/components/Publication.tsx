import React from 'react';
import { Github } from 'lucide-react';
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
    <img src={image} alt={title} className="w-full rounded-[20px] mb-4 hover:opacity-90 transition-opacity" />
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{date}</p>
    <p className="text-gray-500 text-sm mb-4">{description}</p>
    <div className="flex items-center space-x-4">
      <a href="#github" className="text-gray-400 hover:text-white transition-colors">
        <Github className="w-4 h-4" />
      </a>
      <a href="#read" className="text-gray-400 hover:text-white transition-colors text-sm">
        Read
      </a>
    </div>
  </Card>
);