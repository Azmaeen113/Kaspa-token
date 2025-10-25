import { motion } from "framer-motion";
import { Rocket, Code, TrendingUp } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      icon: Rocket,
      title: "Phase 1: Foundation",
      period: "2025–2026",
      items: [
        "Branding & website launch",
        "Community building",
        "MVP development",
        "Whitepaper release",
      ],
    },
    {
      icon: Code,
      title: "Phase 2: Compute Layer",
      period: "2026–2027",
      items: [
        "Proof-of-Compute protocol",
        "Node network deployment",
        "Beta testing",
        "Token launch",
      ],
    },
    {
      icon: TrendingUp,
      title: "Phase 3: Expansion",
      period: "2028+",
      items: [
        "Strategic partnerships",
        "Compute marketplace",
        "Mainnet launch",
        "Global scaling",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-primary text-glow">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our journey to decentralized compute
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2" />
          
          {/* Timeline line - mobile */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-8 glow-hover group">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <phase.icon className="w-8 h-8 text-background" />
                    </div>
                  </div>
                  
                  <div className="mb-2 text-sm font-semibold text-primary">{phase.period}</div>
                  <h3 className="text-2xl font-bold mb-6">{phase.title}</h3>
                  
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connection dot */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background animate-pulse-glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
