import { motion } from "framer-motion";
import { Network, Split, Cpu, Coins } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: Network,
      title: "Connect",
      description: "Nodes join the network",
      subtext: "Users contribute their computing power",
      delay: 0,
    },
    {
      number: "02", 
      icon: Split,
      title: "Distribute",
      description: "Tasks are split & verified",
      subtext: "Workload distributed across nodes",
      delay: 0.2,
    },
    {
      number: "03",
      icon: Cpu,
      title: "Process",
      description: "Simultaneous processing",
      subtext: "Maximum efficiency & speed",
      delay: 0.4,
    },
    {
      number: "04",
      icon: Coins,
      title: "Reward",
      description: "Earn rewards",
      subtext: "Get $KAS or $KCT tokens",
      delay: 0.6,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How It <span className="text-primary text-glow">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            KASCompute connects individual nodes that contribute their processing power to a 
            decentralized compute network. Tasks are split, verified, and processed simultaneously 
            across multiple nodes — ensuring maximum efficiency, transparency, and security.
          </p>
        </motion.div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between relative">
            {/* Connection lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: step.delay }}
                className="flex flex-col items-center relative z-10"
              >
                {/* Step number with glow */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 text-background font-bold text-lg glow">
                  {step.number}
                </div>
                
                {/* Step card */}
                <div className="glass rounded-xl p-6 w-64 text-center glow-hover group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-primary font-medium mb-1">{step.description}</p>
                  <p className="text-sm text-muted-foreground">{step.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical stack */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: step.delay }}
              className="flex items-center space-x-4"
            >
              {/* Step number */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background font-bold text-sm glow flex-shrink-0">
                {step.number}
              </div>
              
              {/* Step content */}
              <div className="glass rounded-xl p-4 flex-1 glow-hover group cursor-pointer">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>
                <p className="text-primary font-medium text-sm mb-1">{step.description}</p>
                <p className="text-xs text-muted-foreground">{step.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
