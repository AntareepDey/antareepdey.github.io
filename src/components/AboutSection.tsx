import React from 'react';
import { motion } from 'framer-motion';

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
              className="w-full aspect-square object-cover rounded-[20px] shadow-xl border-4 border-black/20"
            />
          </motion.div>
        </div>

        {/* Right Column - Text Content */}
        <div className="space-y-6 relative z-30">
          <h1 className="text-3xl font-bold gradient-heading mb-4">About Me:</h1>
          <p className="text-white text-xl mb-8">Thanks for stopping by! Here's a bit about me.</p>
          
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
            When I'm free you might find me cheering on my favorite F1 team (
            <GradientLink href="#">team Mercedes till death do us part</GradientLink>), appreciating
            stunning architecture, or capturing the world through my lens. (Oh, and fueling my curiosity
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