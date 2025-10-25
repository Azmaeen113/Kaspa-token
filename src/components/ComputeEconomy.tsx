import { motion } from "framer-motion";
import { Cpu, Globe, Brain, ShieldCheck } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ComputeEconomy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Cpu,
      title: "Earn $KCT",
      description: "Share idle hardware and earn rewards",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access GPU/CPU resources worldwide",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Brain,
      title: "AI & Research",
      description: "Power AI, rendering, and research workloads",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: ShieldCheck,
      title: "Verified",
      description: "Transparent blockchain-based verification",
      gradient: "from-secondary/20 to-secondary/5",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            The Compute <span className="text-primary text-glow">Economy</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            What KASCompute brings to users
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-2xl p-8 glow-hover group cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <feature.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComputeEconomy;
