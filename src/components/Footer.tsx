import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';

export const Footer = () => {
  const quickLinks = [
    {
      title: 'My Resume',
      href: '/src/assets/resume.pdf'
    },
    {
      title: 'Check my Schedule',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1v8mKAXDoxF4MS_oihkbfX-z4AdNG8L0EIAwvqyEVj25AKlB6TN9B8J10dGkKGN2K9jnvDL3dq?gv=true'
    },
    {
      title: 'Goodreads',
      href: 'https://www.goodreads.com/antareepdey'
    },
    {
      title: 'My Notes',
      href: 'https://antareepdey.notion.site/Machine-Learning-Basics-c07f40e29dfe4664af5a0fda0b89407e'
    }
  ];
  return (
    <motion.section
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <Card className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-heading">Say</span>
              <span className="gradient-heading ml-4">hi!</span>
            </h2>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:antareep2018@gmail.com"
              className="gradient-heading block"
            >
              antareep2018@gmail.com
            </motion.a>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2 items-center md:items-end">
              {quickLinks.map(({ title, href }) => (
                <motion.a
                  key={title}
                  whileHover={{ x: -5 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  {title}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:text-right text-gray-400">
          <p>Antareep Dey@2024</p>
        </div>
      </Card>
    </motion.section>
  );
};