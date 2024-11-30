import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const navItems = [
    { name: 'Photography', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'About', href: '/about' }
  ];

  if (isMobile) {
    return (
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed top-0 left-0 right-0 p-4 z-50"
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.div className="flex items-center justify-between">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-heading bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg rounded-full px-4 py-2"
            >
              AD.
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(!isOpen)}
              className="bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg rounded-full p-2"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </motion.button>
          </motion.div>

          {isOpen && (
            <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            className="absolute right-4 mt-4"
          >
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg rounded-[20px] py-4 px-8">
              <div className="flex flex-col items-end space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    whileHover={{ x: -5 }}
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors font-semibold whitespace-nowrap"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
    );
  }

  return (
    <motion.nav
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 p-4 z-50"
    >
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="flex items-center justify-between p-4 rounded-[20px] bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >          
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold gradient-heading"
          >
            AD.
          </motion.a>
          <div className="space-x-12">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                whileHover={{ scale: 1.05 }}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors font-semibold"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};