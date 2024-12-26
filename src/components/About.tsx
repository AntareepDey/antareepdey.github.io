import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMysql, SiGit, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiFigma, SiGithub, SiNextdotjs } from 'react-icons/si';
import { Footer } from './Footer';

// SectionHeading Component
interface SectionHeadingProps {
  title: string;
  href?: string;
}

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
        {/* Left Column - Images */}
        <div className="relative min-h-[400px] md:min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-0 left-0 w-[80%] z-10"
          >
            <img
              src="https://picsum.photos/800/1000"
              alt="Working on laptop"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover rounded-[20px] shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-0 right-0 w-[80%] z-20"
          >
            <img
              src="https://picsum.photos/800/800"
              alt="Portrait"
              width={800}
              height={800}
              className="w-full aspect-square object-cover rounded-[20px] shadow-xl border-4 border-black/20"
            />
          </motion.div>
        </div>

        {/* Right Column - Text Content */}
        <div className="space-y-6 relative z-30">
          <SectionHeading title="About Me"/>
          <p className="text-white leading-relaxed">
            Hello <span className="text-yellow-400">👋</span>, I'm{' '}
            <GradientLink href="#">Antareep</GradientLink>, a third year Computer Science
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
            My research internship at <GradientLink href="#">IIT Kharagpur</GradientLink> this past
            semester was a fantastic experience, and I'm actively seeking more opportunities to
            contribute to groundbreaking projects in AI and Machine Learning. If you're working on
            something innovative let's chat!
          </p>

          <motion.a
            href="/resume.pdf"
            whileHover={{ scale: 1.05 }}
            className="inline-block text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
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
                  </div>
                </div>
                <span className="text-gray-400">{experience.date}</span>
              </div>
              <p className="text-gray-400">{experience.location}</p>
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Summary:</h4>
                <p className="text-gray-300">{experience.summary}</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {experience.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Achievements:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
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
    { icon: SiFigma },
    { icon: SiGithub },
    { icon: SiHtml5 },
    { icon: SiCss3 },
    { icon: SiJavascript },
    { icon: SiTailwindcss },
    { icon: SiNodedotjs },
    { icon: SiMysql },
    { icon: SiGit },
    { icon: SiNextdotjs },
    { icon: SiReact }
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <SectionHeading title="Skills"/>
      <div className="flex flex-wrap gap-4">
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