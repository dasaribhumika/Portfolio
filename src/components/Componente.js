import { siReact, siHtml5, siC, siCplusplus, siPython, siPhp, siCss3, siJavascript, siMysql, siFlask, siStreamlit, siAngular, siExpress, siNodedotjs, siMongodb, siGit, siBitbucket, siJenkins, siDocker, siPowerbi, siHaskell, siGithub } from 'simple-icons'
import React from 'react'
import { Cloud, renderSimpleIcon } from 'react-icon-cloud'


const tagCanvasOptions = {
  outlineColour: 'transparent',
  imageMode: "both",
  shape: 'hcylinder',
  lock: 'x',
  imagePosition: "top",
  initial: [0, -0.1],
  fadeIn: 3000,
  zoom: 0.9,
  wheelZoom: false,
  pinchZoom: true,
  shuffleTags: true,
  frontSelect: true,
  textHeight: 18,
  reverse: true,
  depth: 0.5,
  maxSpeed: 0.04,
  minSpeed: 0.02
}

const iconData = [
  { name: 'HTML5', icon: siHtml5 },
  { name: 'React', icon: siReact },
  { name: 'C', icon: siC },
  { name: 'C++', icon: siCplusplus },
  { name: 'Python', icon: siPython },
  { name: 'Php', icon: siPhp },
  { name: 'CSS3', icon: siCss3 },
  { name: 'JavaScript', icon: siJavascript },
  { name: 'MySql', icon: siMysql },
  { name: 'Flask', icon: siFlask },
  { name: 'Streamlit', icon: siStreamlit },
  { name: 'Angular', icon: siAngular },
  { name: 'Express', icon: siExpress },
  { name: 'Node.JS', icon: siNodedotjs },
  { name: 'MongoDB', icon: siMongodb },
  { name: 'Git', icon: siGit },
  { name: 'GitHub', icon: siGithub },
  { name: 'Jenkins', icon: siJenkins },
  { name: 'Docker', icon: siDocker },
  { name: 'BitBucket', icon: siBitbucket },
  { name: 'PowerBI', icon: siPowerbi },
  { name: 'Haskell', icon: siHaskell },

];

const icons = iconData.map(({ name, icon }) => (
  <div key={name}>
    {renderSimpleIcon({
      icon,
      size: 150,
      aProps: {
        onClick: (e) => e.preventDefault()
      }

    })}
    {name}
  </div>


));

const IconCloud = () => {

  return (
    <Cloud options={tagCanvasOptions}  >
      {icons}
    </Cloud>
  );
}

export default IconCloud;




// import React from "react";
// import allIcons from 'simple-icons';
// import { v4 } from "uuid";
// import { IconCloud } from "react-icon-cloud";

// const Componente = () => {
//   const tagCanvasOptions = {
//     // activateAudio: string
//     // activeCursor: string
//     // altImage: boolean
//     // animTiming: 'Smooth' | 'Linear'
//     // audioIcon: boolean
//     // audioIconDark: boolean
//     // audioIconSize: number
//     // audioIconThickness: number
//     // audioVolume: number
//     // bgColor: null | string
//     // bgOutlineThickness: number
//     // bgRadius: number
//     // centreFunc: any
//     // centreImage: any
//     clickToFront: 500,
//     // decel: number
//      depth: 1,
//     // dragControl: boolean
//     // dragThreshold: number
//     // fadeIn: number
//     // freezeActive: boolean
//     // freezeDecel: boolean
//     // frontSelect: boolean
//     // hideTags: boolean
//     // imageAlign: 'centre' | 'left' | 'right'
//     // imageMode: null | 'image' | 'text' | 'both'
//     // imagePadding: number
//     // imagePosition: 'top' | 'bottom' | 'left' | 'right'
//     // imageRadius: number | string
//     imageScale: 2,
//     // imageVAlign: 'top' | 'bottom' | 'middle'
//     initial: [0.1, -0.1],
//     // interval: number
//     // lock: null | 'x' | 'y' | 'xy'
//     // maxBrightness: number
//     // maxSpeed: number
//     // minBrightness: number
//     // minSpeed: number
//     // minTags: 0 - 200
//     // noMouse: boolean
//     // noSelect: boolean
//     // noTagsMessage: string
//     // offsetX: number
//     // offsetY: number
//     outlineColour: '#0000',
//     // outlineDash: number
//     // outlineDashSpace: number
//     // outlineIncrease: number
//     // outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
//     // outlineOffset: number
//     // outlineRadius: number
//     // outlineThickness: number
//     // padding: number
//     // pinchZoom: boolean
//     // pulsateTime: number
//     // pulstateTo: number
//     // radiusX: number
//     // radiusY: number
//     // radiusZ: number
//     // repeatTagsTags: 0 - 64
//      reverse: true,
//     // scrollPause: boolean
//     // shadow: string
//     // shadowBlur: number
//     // shadowOffset: [number,number] | number[]
//     // shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring'
//     // shuffleTags: boolean
//     // splitWidth: number
//     // stretchX: number
//     // stretchY: number
//     // textAlign: 'centre' | 'left' | 'right'
//     // textColour: string
//     // textFont: string
//     // textHeight: number
//     // textVAlign: 'top' | 'bottom' | 'middle'
//     tooltip: 'native', // null | 'div'
//     // tooltipClass: string
//     tooltipDelay: 0,
//     // txtOpt: boolean
//     // txtScale: number
//     // weight: boolean
//     // weightFrom: any
//     // weightGradient: any
//     // weightMode: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline'
//     // weightSize: number
//     // weightSizeMax: number | null
//     // weightSizeMin: number | null
//     wheelZoom: false,
//     // zoom: number
//     // zoomMax: number
//     // zoomMin: number
//     // zoomStep: number
//   }
//   const iconSlugs = [
//     "typescript",
//     "javascript",
//     "dart",
//     "java",
//     "react",
//     "flutter",
//     "android",
//     "html5",
//     "css3",
//     "nodedotjs",
//     "express",
//     "nextdotjs",
//     "prisma",
//     "amazonaws",
//     "postgresql",
//     "firebase",
//     "nginx",
//     "vercel",
//     "testinglibrary",
//     "jest",
//     "cypress",
//     "docker",
//     "git",
//     "jira",
//     "github",
//     "gitlab",
//     "visualstudiocode",
//     "androidstudio",
//     "sonarqube",
//     "figma"
//   ];
//   const iconTags = iconSlugs.map((slug) => ({
//     id: slug,
//     simpleIcon: allIcons.Get(slug)
//   }));
//   return (
//     <div>
//       <IconCloud
//       key={v4()}
//         id={"icon"}
//         minContrastRatio={1}
//         iconSize={50}
//         backgroundHexColor={"#fff"}
//         fallbackHexColor={"#000"}
//         tags={iconTags}
//         tagCanvasOptions={tagCanvasOptions}
//       />
//     </div>
//   );
// };

// export default Componente;
