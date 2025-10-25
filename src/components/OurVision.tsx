import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OurVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="our-vision" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Animated particles background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Our <span className="text-primary text-glow">Vision</span>
          </h2>
          
          <div className="glass rounded-2xl p-8 md:p-12 glow-hover">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            >
              We believe in a future where computing is as decentralized as money. KASCompute aims 
              to make computation accessible to everyone — from small developers and AI researchers 
              to large-scale blockchain projects — without the limitations of centralized cloud providers.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold mb-4">
                Our mission: to make computing{" "}
                <span className="text-primary text-glow">open</span>,{" "}
                <span className="text-secondary text-glow">borderless</span>, and{" "}
                <span className="text-primary text-glow">unstoppable</span>.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
