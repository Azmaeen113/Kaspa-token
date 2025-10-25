import { motion } from "framer-motion";
import { FileText, Send, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import NetworkBackground from "./NetworkBackground";
// Using favicon.png from public folder

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <NetworkBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img 
              src="/favicon.png" 
              alt="KASCompute Logo" 
              className="w-32 h-32 mx-auto mb-4 animate-pulse-glow" 
            />
            <span className="text-2xl font-bold text-primary text-glow">$KCT</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turning idle{" "}
            <span className="text-primary text-glow">GPUs & CPUs</span>
            <br />
            into decentralized compute power
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Decentralized Compute Power — Powered by Kaspa
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg glow-hover transition-all group"
            >
              <FileText className="mr-2 group-hover:rotate-12 transition-transform" />
              Read Whitepaper
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg glow-hover transition-all group"
              onClick={() => window.open("https://t.me/KASCompute", "_blank")}
            >
              <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
              Join Telegram
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-lg glow-hover transition-all group"
            >
              <Cpu className="mr-2 group-hover:scale-110 transition-transform" />
              Become a Provider
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
