import React from 'react';
import { AboutSection } from './AboutSection';
import { ExperienceSection } from './ExperienceSection';
import { SkillsSection } from './SkillsSection';
import { Footer } from './Footer';

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