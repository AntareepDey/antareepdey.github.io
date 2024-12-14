import React from 'react';
import { motion } from 'framer-motion';
import { siLinkedin, siGithub, siTwitter, siGoogle } from 'simple-icons';
import { Card } from './Card';
import { Footer } from './Footer';

// Integrated SectionHeading Component
const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 transform group-hover:translate-x-1 transition-transform"
  >
    <defs>
      <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="50%" stopColor="#e879f9" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
    <path
      d="M9 6l6 6-6 6"
      stroke="url(#arrow-gradient)"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface SectionHeadingProps {
  title: string;
  href?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, href }) => (
  <div className="flex justify-between items-center mb-8">
    <motion.h2
      initial={{ y: -20 }}
      whileInView={{ y: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      viewport={{ once: true }}
      className="text-3xl font-bold gradient-heading"
    >
      {title}
    </motion.h2>
    {href && (
      <motion.a
        initial={{ x: 20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        href={href}
        className="flex items-center group"
      >
        <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
          See all
        </span>
        <ArrowIcon />
      </motion.a>
    )}
  </div>
);

// Integrated Publication Component
interface PublicationProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

const Publication: React.FC<PublicationProps> = ({
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
      <a 
        href="#github" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="currentColor"
        >
          <path d={siGithub.path} />
        </svg>
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

// Integrated Project Component
interface ProjectProps {
  title: string;
  year: string;
  description: string;
  gradient: string;
  githubUrl?: string;
}

const Project: React.FC<ProjectProps> = ({
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

const fadeIn = {
  initial: { y: 20 },
  animate: { y: 0 },
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
          <SectionHeading title="Publications" href="/publications" />
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
          <SectionHeading title="Projects" href="/projects" />
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

        <Footer />
      </main>
    </div>
  );
};

export default Portfolio;