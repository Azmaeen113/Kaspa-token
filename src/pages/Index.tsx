import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import ComputeEconomy from "@/components/ComputeEconomy";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Community from "@/components/Community";
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
          <ComputeEconomy />
          <Tokenomics />
          <Roadmap />
          <Community />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
