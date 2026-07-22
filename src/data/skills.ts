import type { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
} from 'react-icons/si'

export interface Skill {
  name: string
  icon: IconType
  color: string
}

export const skills: Skill[] = [
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Redux', icon: SiRedux, color: '#764abc' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
  { name: 'Express', icon: SiExpress, color: '#00ffff' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
]