import React from 'react';
import { motion } from 'framer-motion';
import { siLinkedin, siGithub, siTwitter, siGoogle } from 'simple-icons';
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

const SocialIcon = ({ path, href }: { path: string; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    className="text-gray-400 hover:text-white transition-colors"
  >
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="currentColor"
    >
      <path d={path} />
    </svg>
  </motion.a>
);

const Portfolio = () => {
  const publications = [
    {
      title: "Attention is all you need: An introduction to transformers",
      date: "Oct 2024",
      description: "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms...",
      image: "/src/p1.png"
    },
    {
      title: "Understanding Neural Networks: A Comprehensive Guide",
      date: "Oct 2024",
      description: "An in-depth exploration of neural network architectures and their applications...",
      image: "/src/p2.png"
    },
    {
      title: "The Future of Computer Vision",
      date: "Oct 2024",
      description: "Exploring the latest advancements in computer vision and their real-world applications...",
      image: "/src/p3.png"
    }
  ];

  const projects = [
    {
      title: "Resnet20",
      year: "2023",
      description: "Deep Convolutional Neural network for object recognition",
      gradient: "bg-gradient-to-br from-purple-400/20 to-purple-600/20",
      githubUrl: "#href"
    },
    {
      title: "AntiGPT",
      year: "2023",
      description: "A tool to detect AI generated text",
      gradient: "bg-gradient-to-br from-orange-400/20 to-pink-600/20",
      githubUrl: "#href"
    },
    {
      title: "DanceGPT",
      year: "2023",
      description: "DanceGPT is your AI-based personal dance guide",
      gradient: "bg-gradient-to-br from-cyan-400/20 to-blue-600/20",
      githubUrl: "#href"
    }
  ];

  const socialIcons = [
    { icon: siLinkedin, href: "#linkedin" },
    { icon: siGithub, href: "#github" },
    { icon: siTwitter, href: "#twitter" },
    { icon: siGoogle, href: "#google" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      <Navbar />

      <main className="relative px-6 pt-24">
        <motion.div {...fadeIn} className="pt-24 mb-20">
          <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-6 mb-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 rounded-[20px] overflow-hidden ring-2 ring-purple-500/20"
            >
              <img src="/src/Antareep.png" alt="Profile" className="w-full h-full object-cover" />
            </motion.div>
            <div>
              <h1 className="text-4xl font-bold gradient-heading mb-2">
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

          <motion.div className="flex space-x-4 mb-16">
            {socialIcons.map((social, index) => (
              <SocialIcon key={index} path={social.icon.path} href={social.href} />
            ))}
          </motion.div>
        </motion.div>

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
                  <span className="gradient-heading">Say</span>
                  <span className="gradient-heading ml-4">hi!</span>
                </h2>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:antareep2018@gmail.com"
                  className="animated-gradient block"
                >
                  antareep2018@gmail.com
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