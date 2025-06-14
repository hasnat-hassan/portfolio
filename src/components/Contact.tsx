'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <FaEnvelope size={20} />,
      url: 'mailto:hasnathassan397@gmail.com',
      label: 'hasnathassan397@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      url: 'https://linkedin.com/in/hasnat-hassan',
      label: 'Hasnat Hassan',
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp size={20} />,
      url: 'https://wa.me/923079114060',
      label: '+92 307 9114060',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={20} />,
      url: 'https://github.com/hasnat-hassan',
      label: 'hasnat-hassan',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <div className="bg-background rounded-lg p-6 shadow-lg h-full">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {socialLinks.map((link, index) => (
                    <motion.div 
                      key={link.name}
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {link.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{link.name}</h4>
                        <Link 
                          href={link.url} 
                          target={link.name !== 'Email' ? '_blank' : undefined} 
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <h4 className="font-medium mb-4">Preferred Working Hours</h4>
                  <p className="text-foreground/70">Monday - Friday: 11:00 AM - 8:00 PM (PKT)</p>
                  <p className="text-foreground/70">These working hours can be changed</p>
                </div>
                
                <motion.div 
                  className="mt-12 p-4 bg-primary/5 rounded-lg border border-primary/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-medium mb-2">Looking for a dedicated developer?</h4>
                  <p className="text-foreground/70 mb-4">I'm open to freelance opportunities and full-time positions.</p>
                  <Link 
                    href="mailto:hasnathassan397@gmail.com?subject=Job%20Opportunity" 
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Let's discuss <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}