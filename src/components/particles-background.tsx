import { useCallback, useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { useTheme } from "./theme-provider";
import { lightParticlesConfig,darkParticlesConfig } from "@/common/particles-config";



export function ParticlesBackGround(){

  const {theme}=useTheme()


  const [currentConfig, setCurrentConfig] = useState(theme === 'dark' ? darkParticlesConfig : lightParticlesConfig);

  useEffect(() => {
    setCurrentConfig(theme === 'dark' ? darkParticlesConfig : lightParticlesConfig);
  }, [theme]);

  
  const particlesInit = useCallback(async (engine: Engine) => {
  

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);
 
  const particlesLoaded = useCallback(async () => {

  }, []);
  return (
    <Particles
      className="particles-background"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={ currentConfig}
    />
  );
};

export default ParticlesBackGround;