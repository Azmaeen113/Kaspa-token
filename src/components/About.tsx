import { motion } from "framer-motion";
import { Network, Cpu, Zap } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const floatingIcons = [
    { icon: Network, delay: 0, position: "top-10 left-10" },
    { icon: Cpu, delay: 0.3, position: "top-20 right-20" },
    { icon: Zap, delay: 0.6, position: "bottom-20 left-20" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Animated network lines background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
          <motion.path
            d="M100,100 Q300,200 500,150 T900,100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M150,300 Q400,250 650,300 T950,300"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.path
            d="M200,500 Q500,400 800,500"
            stroke="url(#gradient3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 1.5 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FFB2" stopOpacity="0" />
              <stop offset="50%" stopColor="#00FFB2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00FFB2" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1EE6A8" stopOpacity="0" />
              <stop offset="50%" stopColor="#1EE6A8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1EE6A8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EAFDF7" stopOpacity="0" />
              <stop offset="50%" stopColor="#EAFDF7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EAFDF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: item.delay }}
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <item.icon className="w-8 h-8 text-primary animate-pulse" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-primary text-glow">KASCompute</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12 glow-hover">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              KASCompute is a decentralized compute layer built on top of the Kaspa blockchain. 
              Our goal is to enable trustless, high-speed, and low-cost computing power for the 
              next generation of Web3 applications. By combining Kaspa's DAG-based architecture 
              with distributed computing, KASCompute creates a global network where users can 
              share, rent, and utilize compute resources without relying on centralized providers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
