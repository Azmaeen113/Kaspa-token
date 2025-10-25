import { SparklesCore } from "@/components/ui/sparkles";

const SparklesBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <SparklesCore
        id="tsparticles"
        background="transparent"
        minSize={0.4}
        maxSize={1.2}
        particleDensity={80}
        className="w-full h-full"
        particleColor="#00FFB2"
        speed={0.5}
      />
    </div>
  );
};

export default SparklesBackground;
