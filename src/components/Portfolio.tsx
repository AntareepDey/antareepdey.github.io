import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Search } from 'lucide-react';
import { Publication } from './Publication';
import { Project } from './Project';
import { SectionHeading } from './SectionHeading';
import { Card } from './Card';
import { Navbar } from './Navbar';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Portfolio = () => {
  const publications = [
    {
      title: "Attention is all you need: An introduction to transformers",
      date: "Oct 2024",
      description: "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms...",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Understanding Neural Networks: A Comprehensive Guide",
      date: "Oct 2024",
      description: "An in-depth exploration of neural network architectures and their applications...",
      image: "/api/placeholder/400/200"
    },
    {
      title: "The Future of Computer Vision",
      date: "Oct 2024",
      description: "Exploring the latest advancements in computer vision and their real-world applications...",
      image: "/api/placeholder/400/200"
    }
  ];

  const projects = [
    {
      title: "HUDN",
      year: "2023",
      description: "A platform to showcase your side projects",
      gradient: "bg-gradient-to-br from-purple-400/20 to-purple-600/20"
    },
    {
      title: "AntiGPT",
      year: "2023",
      description: "A tool to detect AI generated text",
      gradient: "bg-gradient-to-br from-orange-400/20 to-pink-600/20"
    },
    {
      title: "TourX",
      year: "2023",
      description: "TourX is your AI-based personal Guide",
      gradient: "bg-gradient-to-br from-cyan-400/20 to-blue-600/20"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      <Navbar />

      {/* Main Content */}
      <main className="relative px-6 pt-24">
        {/* Profile Section */}
        <motion.div {...fadeIn} className="pt-24 mb-20">
          <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-6 mb-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 rounded-[20px] overflow-hidden ring-2 ring-purple-500/20"
            >
              <img src="/api/placeholder/96/96" alt="Profile" className="w-full h-full object-cover" />
            </motion.div>
            <div>
              <h1 className="text-4xl font-bold animated-gradient mb-2">
                Antareep Dey
              </h1>
              <p className="text-gray-400 font-display">Machine Learning Engineer</p>
            </div>
          </div>

          <motion.p 
            {...fadeIn}
            className="text-gray-300 w-full max-w-3xl mb-8 leading-relaxed"
          >
            I'm a third-year Computer Science student with a deep passion for Machine Learning. 
            I'm particularly fascinated by Natural Language Processing and Computer Vision. Outside of coding, 
            you'll probably catch me cheering for my favorite Formula One team, admiring beautiful architecture, 
            or snapping photos of the world around me.
          </motion.p>

          <motion.div 
            {...fadeIn}
            className="flex space-x-4 mb-16"
          >
            {[Linkedin, Github, Twitter, Search].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Publications Section */}
        <motion.section 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeading title="Publications" href="#" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <Publication {...pub} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeading title="Projects" href="#" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <Project {...project} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-bold">
                  <span className="animated-gradient">Say</span>
                  <span className="animated-gradient ml-4">hi!</span>
                </h2>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:hello@raihankhan.dev"
                  className="animated-gradient block"
                >
                  hello@raihankhan.dev
                </motion.a>
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-white mb-4">Quick Links</h3>
                <div className="flex flex-col space-y-2 items-center md:items-end">
                  {['My Resume', 'Check my Schedule', 'Instagram', 'My Blog'].map((link) => (
                    <motion.a
                      key={link}
                      whileHover={{ x: -5 }}
                      href="#"
                      className="text-gray-400 hover:text-white"
                    >
                      {link}
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
      </main>
    </div>
  );
};

export default Portfolio;