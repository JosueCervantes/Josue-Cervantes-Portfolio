import { Atom, Wind, Database, FileCode, FlaskConical, Code, Users, LayoutGrid } from 'lucide-react';
import cliknowImg from '../assets/cliknow.jpg';
import fideapechImg from '../assets/fideapech.png';

export const projects = [
  {
    id: 1,
    title: 'platafide',
    descKey: 'platafide',
    tags: [
      { label: 'React', variant: 'filled' },
      { label: 'Tailwind', variant: 'outline' },
      { label: 'Flask', variant: 'outline' },
      { label: 'SQL Alchemy', variant: 'outline' },
    ],
    gradient: 'linear-gradient(135deg, rgba(21,97,240,0.18), rgba(97,218,251,0.10))',
    coverIcons: [Atom, Wind, Database],
  },
  {
    id: 2,
    title: 'forge fideapech',
    descKey: 'forge',
    tags: [
      { label: 'Typescript', variant: 'filled' },
      { label: 'Flask', variant: 'outline' },
      { label: 'Python', variant: 'outline' },
    ],
    gradient: 'linear-gradient(135deg, rgba(49,120,198,0.18), rgba(56,189,248,0.10))',
    coverIcons: [FileCode, FlaskConical, Code],
  },
  {
    id: 3,
    title: 'Spotlight fideapech',
    descKey: 'spotlight',
    tags: [
      { label: 'React', variant: 'filled' },
      { label: 'Flask', variant: 'outline' },
      { label: 'SQL Alchemy', variant: 'outline' },
      { label: 'Forge', variant: 'outline' },
    ],
    gradient: 'linear-gradient(135deg, rgba(104,160,99,0.18), rgba(247,223,30,0.08))',
    coverIcons: [Atom, Users, Database],
  },
  {
    id: 4,
    title: 'Cliknow AI Virtual Assistants',
    descKey: 'cliknow',
    tags: [
      { label: 'Python', variant: 'filled' },
      { label: 'Open AI', variant: 'outline' },
      { label: 'Make.com', variant: 'outline' },
      { label: 'Manychat', variant: 'outline' },
      { label: 'Wordpress', variant: 'outline' },
    ],
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.18), rgba(21,97,240,0.10))',
    image: cliknowImg,
  },
  {
    id: 5,
    title: 'tracker fideapech',
    descKey: 'tracker',
    tags: [
      { label: 'React', variant: 'filled' },
      { label: 'Flask', variant: 'outline' },
      { label: 'SQL Alchemy', variant: 'outline' },
      { label: 'Forge', variant: 'outline' },
    ],
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.18), rgba(21,97,240,0.10))',
    coverIcons: [Atom, LayoutGrid, FlaskConical],
  },
  {
    id: 6,
    title: 'fideapech sitio web',
    descKey: 'sitio',
    tags: [
      { label: 'React', variant: 'filled' },
      { label: 'Tailwind', variant: 'outline' },
    ],
    gradient: 'linear-gradient(135deg, rgba(21,97,240,0.18), rgba(97,218,251,0.10))',
    image: fideapechImg,
    links: { demo: 'https://www.fideapech.com' },
  },
];