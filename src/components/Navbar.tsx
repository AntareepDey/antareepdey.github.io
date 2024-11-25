import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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

  const navItems = ['Photography', 'Blog', 'About'];

  if (isMobile) {
    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 p-4 z-50"
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            className="flex items-center justify-between"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-heading bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg rounded-full px-4 py-2"
            >
              AD.
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(!isOpen)}
              className="bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg rounded-full p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </motion.div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg rounded-[20px] p-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-white/80 hover:text-white transition-colors font-semibold"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 p-4 z-50"
    >
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="flex items-center justify-between p-4 rounded-[20px] bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-heading"
          >
            AD.
          </motion.div>
          <div className="space-x-12">
            {navItems.map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.05 }}
                href="#"
                className="text-white/80 hover:text-white transition-colors font-semibold"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};