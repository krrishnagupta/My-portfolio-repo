import html from '../assets/svg/html.svg';
import css from '../assets/svg/css.svg';
import javascript from '../assets/svg/javascript.svg';
import react from '../assets/svg/react.svg';
import redux from '../assets/svg/redux.svg';
import bootstrap from '../assets/svg/bootstrap.svg';
import tailwind from '../assets/svg/tailwind.svg';
import vitejs from '../assets/svg/vitejs.svg';
import cplusplus from '../assets/svg/cplusplus.svg';
import python from '../assets/svg/python.svg';
import git from '../assets/svg/git.svg';
import canva from '../assets/svg/canva.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'redux' :
      return redux;
    case 'bootstrap':
      return bootstrap;
    case 'tailwind':
      return tailwind;
    case 'vite':
      return vitejs;
    case 'c++':
      return cplusplus;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'canva':
      return canva;
    default:
      break;
  }
}