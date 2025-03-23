import type { ISourceOptions } from "tsparticles-engine";

const commonParticlesConfig=(bgColor:string,pColor:string,lColor:string) : ISourceOptions=>{
  return {

    background: {
      color: {
        value: bgColor,
      },
      
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: false,
      },
      modes: {
        push: {
          quantity: 2,
        },
        grab: {
          distance: 100,
          duration: 1,
        },
      
      },
      detect_on: "window",
 
    },
    particles: {
      
      color: {
        value: pColor
      },
      links: {
        color: lColor,
        distance:120,
        enable: true,
        opacity: 0.3,
        width: 0.5,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.14,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: {
          min: 0.3,
          max: 0.9,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.1, max: 2 },
      },
    },
    detectRetina: true,
  }
}

export const darkParticlesConfig : ISourceOptions =  commonParticlesConfig("#000","#ffffff","#ffffff") 

export const lightParticlesConfig : ISourceOptions = commonParticlesConfig("#ffffff","#3c3434","#3c3434") 