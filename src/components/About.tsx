import React from 'react';
import { motion } from 'framer-motion';
import {SiPandas,SiPytorch,SiTensorflow,SiPython, SiCplusplus,SiPlotly,SiGnubash,SiAstro,SiMysql,SiReact,SiGit,SiTailwindcss } from 'react-icons/si';
import { Footer } from './Footer';

// SectionHeading Component
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
  </div>
);

// About Section Component
export const AboutSection = () => {
  const GradientLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      className="font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity inline-block"
    >
      {children}
    </motion.a>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-20 mt-10"
      data-scroll
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.8fr,1.2fr] gap-8 md:gap-16 items-start">
        {/* Updated Left Column - Images */}
        <div className="relative min-h-[400px] md:min-h-[630px] mb-16 md:mb-12 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ 
              rotate: 0, 
              scale: 1.05, 
              zIndex: 40,
              transition: { duration: 0.3 }
            }}
            whileTap={{
              scale: 1.05,
              zIndex: 40,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-5 left-0 w-[70%] md:w-[65%] z-10 cursor-pointer"
          >
            <img
              src="/9-16.avif"
              alt="Working on laptop"
              width={900}
              height={1600}
              className="w-full aspect-[9/16] object-cover rounded-[20px] shadow-xl transform transition-all duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20, rotate: 15 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ 
              rotate: 0, 
              scale: 1.05, 
              zIndex: 40,
              transition: { duration: 0.3 }
            }}
            whileTap={{
              scale: 1.05,
              zIndex: 40,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-[50%] right-0 w-[70%] md:w-[65%] z-20 cursor-pointer"
          >
            <img
              src="/5-4.avif"
              alt="Portrait"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover rounded-[20px] shadow-xl  transform transition-all duration-300"
            />
          </motion.div>
          {/* Third image - only visible on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ 
              rotate: 0, 
              scale: 1.05, 
              zIndex: 40,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-[80%] left-5 w-[65%] z-30 hidden lg:block cursor-pointer"
          >
            <img
              src="/1-1.avif"
              alt="Another perspective"
              width={600}
              height={600}
              className="w-full aspect-square object-cover rounded-[20px] shadow-xl  transform transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Right Column - Text Content */}
        <div className="space-y-5 relative md:order-2">
          <br></br>
          <SectionHeading title="About Me"/>
          <p className="text-white leading-relaxed">
            Hello <span className="text-yellow-400">👋</span>, I'm{' '}
            Antareep, a third year Computer Science
            undergraduate. My journey with code started with solving simple problems, but it quickly
            accelerated into a full-fledged passion for Machine Learning and AI research. I'm fascinated
            by the way machines can learn and make decisions, and I'm constantly trying to push the
            boundaries of what's possible.
          </p>

          <p className="text-white leading-relaxed">
            I've got a thing for NLP and computer vision. It's like magic, watching a machine understand
            human language or recognize objects in images. I've dabbled in a few projects, and I've
            learned a ton.
          </p>

          <p className="text-white leading-relaxed">
            When I'm free you might find me cheering on my favorite F1 team,
            appreciating stunning architecture, or capturing the world through my lens. (Oh, and fueling my curiosity
            with a constant stream of caffeine... because, student life!)
          </p>

          <p className="text-white leading-relaxed">
            I'm actively seeking more opportunities to contribute
             to groundbreaking projects in AI and Machine Learning. If you're working on
            something innovative let's chat!
          </p>

          <motion.a
            href="/resume.pdf"
            whileHover={{ scale: 1.05 }}
            className="inline-block text-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Resume
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

// Experience Section Component
export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Research Intern',
      company: 'Indian Institute of Technology, Kharagpur',
      logoUrl: '/iitkgplogo.avif',
      date: 'Oct 2024 - Present',
      summary: 'Conducted research on computer vision and studied the impact of synthetic data on vision models under Professor Abir Das at IIT Kharagpur.Developed and optimized AI systems to create enhanced training datasets while analyzing their effectiveness through various experiments.',
      responsibilities: [
        'Designed a computer vision pipeline integrating BLIP-2 vision-language model and Stable Diffusion to synthesize a 5x augmented Tiny-ImageNet dataset (650,000 images).',
        'Optimized the dataset generation process using multi-threading, and data parallelism on a multi-GPU cluster, reducing time by 71%',
        'Analyzed CNN architectures (ResNet-18/50) to quantify performance metrics across synthetic-to-real data ratios, demonstrating the efficacy of synthetic data in mitigating class imbalance'
      ]
    },
    {
      title: 'Student Instructor',
      company: 'Code in Place, Stanford University',
      logoUrl: '/stanford.avif',
      date: 'April 2023 - June 2023',
      summary: 'Served as a Teaching Assistant for Stanford\'s CS106A-based programming course, leading weekly sessions and providing instruction to students through interactive lessons and problem-solving.',
      responsibilities: [
        'Led a group of 10-15 students from around the world through a 7-week course covering Python , console programming, and graphics programming',
        'Prepared and delivered 50-minute lessons on a weekly basis using provided lesson plans based on Stanford\'s CS106A course  and answering student questions'
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
      <SectionHeading title="Experience"/>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <Card key={index}>
            <div className="space-y-6">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={experience.logoUrl}
                    alt={`${experience.company} logo`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                    <p className="text-gray-400">{experience.company}</p>
                    <span className="text-gray-400">{experience.date}</span>
                  </div>
                </div>
                
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">Summary:</h4>
                <p className="text-gray-300">{experience.summary}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold">Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {experience.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
};

// Skills Section Component
export const SkillsSection = () => {
  const skills = [
      { icon: SiPandas },
      { icon: SiPytorch },
      { icon: SiTensorflow },
      { icon: SiPython },
      { icon: SiCplusplus },
      { icon: SiPlotly },
      { icon: SiGnubash },
      { icon: SiAstro },
      { icon: SiMysql },
      { icon: SiReact },
      { icon: SiGit },
      { icon: SiTailwindcss }
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <SectionHeading title="Skills"/>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillIcon key={index} icon={skill.icon} />
        ))}
      </div>
    </motion.section>
  );
};

// Card Component (used by Experience Section)
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ duration: 0.2 }}
    className={`bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl p-6 rounded-[20px] ${className}`}
  >
    {children}
  </motion.div>
);

// Skill Icon Component (used by Skills Section)
const SkillIcon = ({ icon: Icon }: { icon: any }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="w-12 h-12 glass-card rounded-[20px] flex items-center justify-center hover:bg-white/10 transition-colors"
  >
    <Icon className="w-6 h-6" />
  </motion.div>
);

// Main About Content Component
const AboutContent = () => {
  return (
    <main className="relative px-6 pt-24">
      <div className="max-w-3xl mx-auto">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <Footer />
      </div>
    </main>
  );
};

export default AboutContent;