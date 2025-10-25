import { motion } from "framer-motion";
import { Users, FileText, Twitter, MessageCircle, Instagram } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const JoinNetwork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ctaButtons = [
    {
      title: "Join Our Community",
      icon: Users,
      href: "https://t.me/KASCompute",
      variant: "primary" as const,
      description: "Connect with the community",
    },
    {
      title: "Read the Whitepaper",
      icon: FileText,
      href: "#",
      variant: "secondary" as const,
      description: "Learn about our technology",
    },
    {
      title: "Follow Us",
      icon: Twitter,
      href: "https://x.com/KASCompute",
      variant: "tertiary" as const,
      description: "Stay updated",
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/KASCompute", label: "Twitter" },
    { icon: MessageCircle, href: "https://t.me/KASCompute", label: "Telegram" },
    { icon: Instagram, href: "https://www.instagram.com/kascompute/", label: "Instagram" },
  ];

  return (
    <section id="join-network" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Animated network pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <motion.path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#networkGradient)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, delay: 0.5 }}
          />
          <motion.path
            d="M0,200 Q400,100 800,200 T1200,200"
            stroke="url(#networkGradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.path
            d="M0,600 Q400,500 800,600 T1200,600"
            stroke="url(#networkGradient3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, delay: 1.5 }}
          />
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FFB2" stopOpacity="0" />
              <stop offset="50%" stopColor="#00FFB2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00FFB2" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="networkGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1EE6A8" stopOpacity="0" />
              <stop offset="50%" stopColor="#1EE6A8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1EE6A8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="networkGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EAFDF7" stopOpacity="0" />
              <stop offset="50%" stopColor="#EAFDF7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EAFDF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Join the <span className="text-primary text-glow">Network</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Be part of the next big step in decentralized technology.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect your node, contribute your power, and earn rewards while supporting the Kaspa ecosystem.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ctaButtons.map((button, index) => (
            <motion.a
              key={button.title}
              href={button.href}
              target={button.href.startsWith('http') ? '_blank' : undefined}
              rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass rounded-xl p-6 text-center glow-hover group cursor-pointer transition-all duration-300 ${
                button.variant === 'primary' 
                  ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30' 
                  : button.variant === 'secondary'
                  ? 'border border-primary/50 hover:border-primary'
                  : 'border border-muted-foreground/30 hover:border-muted-foreground'
              }`}
            >
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                button.variant === 'primary' 
                  ? 'bg-gradient-to-br from-primary to-secondary text-background' 
                  : 'bg-primary/10 text-primary'
              } group-hover:scale-110 transition-transform`}>
                <button.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{button.title}</h3>
              <p className="text-sm text-muted-foreground">{button.description}</p>
              {button.variant === 'primary' && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary/5"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">Follow us on social media</p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-all glow-hover"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinNetwork;
