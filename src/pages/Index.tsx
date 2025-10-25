import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import ComputeEconomy from "@/components/ComputeEconomy";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import OurVision from "@/components/OurVision";
import Community from "@/components/Community";
import JoinNetwork from "@/components/JoinNetwork";
import Footer from "@/components/Footer";
import SparklesBackground from "@/components/SparklesBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      {/* Sparkles background for all sections below hero */}
      <div className="relative">
        <SparklesBackground />
        <div className="relative z-10">
          <Vision />
          <About />
          <HowItWorks />
          <ComputeEconomy />
          <Tokenomics />
          <Roadmap />
          <OurVision />
          <Community />
          <JoinNetwork />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
