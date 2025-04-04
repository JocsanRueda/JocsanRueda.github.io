import { useCallback, useEffect, useMemo } from "react";
import { Engine, tsParticles } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Slim version of tsparticles
import { useTheme } from "./theme-provider";
import { lightParticlesConfig, darkParticlesConfig } from "@/data/particles/particles-config";

export function ParticlesBackGround() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); 
  }, []);

  const getParticlesConfig = useCallback(() => {
    return theme === "dark" ? darkParticlesConfig : lightParticlesConfig;
  }, [theme]);

  const particlesConfig = useMemo(() => getParticlesConfig(), [getParticlesConfig]);

  useEffect(() => {
    const newConfig = theme === "dark" ? darkParticlesConfig : lightParticlesConfig;
  
    const particlesInstance = tsParticles.domItem(0);
    if (particlesInstance) {
      particlesInstance.options.load(newConfig); 
      particlesInstance.refresh(); 
    }
  }, [theme]);

  return (
    <Particles
      className="particles-background"
      id="tsparticles" 
      init={particlesInit}
      options={particlesConfig}

    />
  );
}

export default ParticlesBackGround;