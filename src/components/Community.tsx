import { motion } from "framer-motion";
import { Send, Twitter, Instagram, ExternalLink } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/KASCompute",
      color: "from-[#0088cc] to-[#00a0e9]",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/KASCompute",
      color: "from-[#1DA1F2] to-[#0d8bd9]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/kascompute/",
      color: "from-[#E1306C] to-[#C13584]",
    },
    {
      name: "Kaspa Official",
      icon: ExternalLink,
      url: "https://kaspa.org",
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Join the <span className="text-primary text-glow">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of the decentralized compute revolution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 text-center glow-hover group cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <social.icon className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-xl font-bold">{social.name}</h3>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-2xl mx-auto glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest news, updates, and announcements from KASCompute
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg glow-hover transition-all"
            onClick={() => window.open("https://t.me/KASCompute", "_blank")}
          >
            <Send className="mr-2" />
            Join Our Telegram
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
