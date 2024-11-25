import React from 'react';
import { Card } from './Card';

interface ProjectProps {
  title: string;
  year: string;
  description: string;
  gradient: string;
}

export const Project: React.FC<ProjectProps> = ({
  title,
  year,
  description,
  gradient
}) => (
  <Card>
    <div className={`${gradient} rounded-lg p-8 mb-4`}>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-sm text-gray-400 mb-2">{year}</p>
    <p className="text-gray-300">{description}</p>
  </Card>
);