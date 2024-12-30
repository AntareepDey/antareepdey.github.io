import React from 'react';
import { motion } from 'framer-motion';
import { SiLinkedin, SiGithub, SiQuora, SiInstagram } from 'react-icons/si';
import { Footer } from './Footer';
// import { Publication } from './Publication';
import { Project } from './Project';

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

const SocialIcon = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    className="text-gray-400 hover:text-white transition-colors"
    aria-label="Icon"
  >
    <Icon size={24}/>
  </motion.a>
);

const Portfolio = () => {
  // const publications = [
  //   {
  //   title: "Attention is all you need: An introduction to transformers",
  //   date: "Oct 2024",
  //   description: "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms. Through extensive experiments, we demonstrate the effectiveness of this approach in natural language processing tasks.",
  //   image: "https://picsum.photos/800/400?random=1",
  //   githubUrl: "https://github.com/yourusername/transformer-paper",
  //   readUrl: "https://arxiv.org/abs/1706.03762"
  // },
  // {
  //   title: "Understanding Neural Networks: A Comprehensive Guide",
  //   date: "Oct 2024",
  //   description: "An in-depth exploration of neural network architectures and their applications. This paper provides a thorough analysis of various neural network topologies and their practical implementations.",
  //   image: "https://picsum.photos/800/400?random=2",
  //   readUrl: "#paper-link"
  // },
  // {
  //   title: "The Future of Computer Vision",
  //   date: "Oct 2024",
  //   description: "Exploring the latest advancements in computer vision and their real-world applications. We discuss cutting-edge techniques and their potential impact on various industries.",
  //   image: "https://picsum.photos/800/400?random=3",
  //   githubUrl: "https://github.com/yourusername/cv-future",
  //   readUrl: "#paper-link"
  // }
  // ];

  const projects = [
    {
      title: "See-curity",
      year: "2024",
      description: "A system that records surveillance footage based on the presence of human activity.",
      image: "/Surveillence.avif",
      githubUrl: "https://github.com/AntareepDey/Survellience-Footage-Optimization"
    },
    {
      title: "Signal Compression",
      year: "2024",
      description: "Paper Implementation: Hybrid Compression Method for PQD Signals in Active Distribution Networks.",
      image: "/Singnal.avif",
      githubUrl: "https://github.com/AntareepDey/PQD-SignalCompression"
    },
    {
      title: "SymptoCareAI",
      year: "2023",
      description: "A project that harnesses the power of LLM's to provide safe medical advice.",
      image: "/Symptocare.avif",
      githubUrl: "https://github.com/AntareepDey/SymptoCareAI"
    }
];

  const socialIcons = [
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/antareepdey/" },
    { icon: SiGithub, href: "https://github.com/AntareepDey" },
    { icon: SiQuora, href: "https://www.quora.com/profile/Antareep-Dey" },
    { icon: SiInstagram, href: "https://www.instagram.com/deyantareep/" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      <main className="relative px-6 pt-24">
        <motion.div {...fadeIn} className="pt-24 mb-20">
          <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-6 mb-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 rounded-[20px] overflow-hidden ring-2 ring-purple-500/20"
            >
              <img 
                src="/Antareep.avif" 
                alt="Profile" 
                width="96" 
                height="96" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
            <div>
              <h1 className="text-4xl font-bold gradient-heading mb-2">
                Antareep Dey
              </h1>
              <p className="text-gray-400 font-sans">Machine Learning Engineer</p>
            </div>
          </div>

          <p className="text-gray-300 w-full max-w-3xl mb-6 leading-relaxed">
            I'm a third-year Computer Science undergrad student with a fascination for Natural Language Processing and Computer Vision. In my free time, you'll find me cheering for my F1 team, buried in books (and probably surviving on coffee), or capturing life's moments through my camera!
          </p>
          <motion.div className="flex space-x-4 mb-16">
            {socialIcons.map((social, index) => (
              <SocialIcon key={index} icon={social.icon} href={social.href} />
            ))}
          </motion.div>
        </motion.div>

        {/* <motion.section 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeading title="Publications" href="/publications" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Publication {...pub} />
              </motion.div>
            ))}
          </div>
        </motion.section> */}

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
              <motion.div key={index} variants={fadeIn}>
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

export default Portfolio;