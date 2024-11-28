import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { SectionHeading } from './SectionHeading';

interface ExperienceCardProps {
  title: string;
  company: string;
  logoUrl: string;
  location: string;
  date: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
}

const ExperienceCard = ({ 
  title, 
  company,
  logoUrl,
  location, 
  date, 
  summary, 
  responsibilities, 
  achievements 
}: ExperienceCardProps) => (
  <Card className="p-8 mb-6">
    <div className="space-y-6">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <img
            src={logoUrl}
            alt={`${company} logo`}
            className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
          />
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400">{company}</p>
          </div>
        </div>
        <span className="text-gray-400">{date}</span>
      </div>
      <p className="text-gray-400">{location}</p>
      <div className="space-y-4">
        <h4 className="text-white font-semibold">Summary:</h4>
        <p className="text-gray-300">{summary}</p>
      </div>
      <div className="space-y-4">
        <h4 className="text-white font-semibold">Responsibilities:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="text-white font-semibold">Achievements:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  </Card>
);

export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Junior Web Developer',
      company: 'Tech Startup',
      logoUrl: 'https://picsum.photos/100/100',
      location: 'Auckland, New Zealand',
      date: '2024 - Present',
      summary: 'Developing and maintaining web applications using JavaScript, HTML, and CSS. Collaborating with the team to implement new features and fix bugs.',
      responsibilities: [
        'Collaborated with senior developers to design and implement web applications using modern JavaScript frameworks.',
        'Assisted in debugging and optimizing front-end code to ensure smooth user experiences.',
        'Participated in code reviews and contributed to improving coding standards within the team.'
      ],
      achievements: [
        'Reduced page load time by 40% through optimization techniques',
        'Implemented new feature that increased user engagement by 25%'
      ]
    },
    {
      title: 'Machine Learning Research Intern',
      company: 'AI Research Lab',
      logoUrl: 'https://picsum.photos/101/101',
      location: 'Remote',
      date: '2023 - 2024',
      summary: 'Conducted research in natural language processing and computer vision, developing innovative solutions for real-world problems.',
      responsibilities: [
        'Developed and implemented machine learning models for text classification',
        'Collaborated with research team on computer vision projects',
        'Published research findings in technical documentation'
      ],
      achievements: [
        'Successfully implemented a new NLP model with 95% accuracy',
        'Contributed to a paper accepted at a major AI conference'
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-3xl font-bold gradient-heading mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};