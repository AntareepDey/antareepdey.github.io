import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { 
  siReact, siNodedotjs, siMysql, siGit,
  siHtml5, siCss3, siJavascript, siTailwindcss,
  siFigma, siGithub, siNextdotjs
} from 'simple-icons';

const SkillIcon = ({ icon }: { icon: any }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="w-12 h-12 glass-card rounded-[20px] flex items-center justify-center hover:bg-white/10 transition-colors"
  >
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  </motion.div>
);

export const SkillsSection = () => {
  const skills = [
    { icon: siFigma },
    { icon: siGithub },
    { icon: siHtml5 },
    { icon: siCss3 },
    { icon: siJavascript },
    { icon: siTailwindcss },
    { icon: siNodedotjs },
    { icon: siMysql },
    { icon: siGit },
    { icon: siNextdotjs },
    { icon: siReact }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-3xl font-bold gradient-heading mb-8">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <SkillIcon key={index} icon={skill.icon} />
        ))}
      </div>
    </motion.section>
  );
};