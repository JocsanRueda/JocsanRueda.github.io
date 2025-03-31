import { useCallback, useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { useTheme } from "./theme-provider";
import { lightParticlesConfig,darkParticlesConfig } from "@/common/particles-config";

export function ParticlesBackGround(){

  const {theme}=useTheme()

  const [currentConfig, setCurrentConfig] = useState(theme === "dark" ? darkParticlesConfig : lightParticlesConfig);

  useEffect(() => {
    setCurrentConfig(theme === "dark" ? darkParticlesConfig : lightParticlesConfig);
  }, [theme]);
  
  const particlesInit = useCallback(async (engine: Engine) => {
   
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="particles-background"
      id="tsparticles"
      init={particlesInit}
      options={ currentConfig}
    />
  );
};

export default ParticlesBackGround;