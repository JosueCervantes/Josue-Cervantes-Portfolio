import {
  Atom, FileCode, Code2, Triangle, Wind, Layers,
  ShoppingBag, Frame, LayoutDashboard,
  Hexagon, Code, FlaskConical, Lock, Zap, Flame, Server, Globe,
  Smartphone, Braces, Monitor,
  Database, HardDrive, Cloud,
  GitBranch, PenTool, Users, Bot, Layout, Shield,
  MonitorCheck, TrendingUp,
} from 'lucide-react';

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#61dafb',
    TabIcon: Monitor,
    skills: [
      { name: 'React',       Icon: Atom,      color: '#61dafb' },
      { name: 'TypeScript',  Icon: FileCode,  color: '#3178c6' },
      { name: 'JavaScript',  Icon: Code2,     color: '#f7df1e' },
      { name: 'Angular',     Icon: Triangle,  color: '#dd0031' },
      { name: 'Tailwind',    Icon: Wind,      color: '#06b6d4' },
      { name: 'Next.js',     Icon: Layers,    color: '#e5e5e5' },
      { name: 'Shopify',     Icon: ShoppingBag, color: '#96bf48' },
      { name: 'Webflow',     Icon: LayoutDashboard, color: '#4353ff' },
      { name: 'Framer',      Icon: Frame,     color: '#0066ff' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#68a063',
    TabIcon: Server,
    skills: [
      { name: 'Node.js',  Icon: Hexagon,      color: '#68a063' },
      { name: 'Python',   Icon: Code,         color: '#3776ab' },
      { name: 'Flask',    Icon: FlaskConical, color: '#e5e5e5' },
      { name: 'Django',   Icon: Lock,         color: '#44b78b' },
      { name: 'FastAPI',  Icon: Zap,          color: '#009688' },
      { name: 'Laravel',  Icon: Flame,        color: '#ff2d20' },
      { name: 'Express',  Icon: Server,       color: '#e5e5e5' },
      { name: 'ASP.NET',  Icon: Globe,        color: '#7b2fbe' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    color: '#3ddc84',
    TabIcon: Smartphone,
    skills: [
      { name: 'Flutter',        Icon: Smartphone, color: '#54c5f8' },
      { name: 'Kotlin',         Icon: Braces,     color: '#7f52ff' },
      { name: 'Android Studio', Icon: Monitor,    color: '#3ddc84' },
    ],
  },
  {
    id: 'cloud',
    label: 'Database & Cloud',
    color: '#ff9900',
    TabIcon: Cloud,
    skills: [
      { name: 'SQL',      Icon: Database,  color: '#336791' },
      { name: 'MongoDB',  Icon: HardDrive, color: '#47a248' },
      { name: 'Firebase', Icon: Flame,     color: '#ffca28' },
      { name: 'AWS',      Icon: Cloud,     color: '#ff9900' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & IT',
    color: '#f05032',
    TabIcon: Users,
    skills: [
      { name: 'Git',       Icon: GitBranch, color: '#f05032' },
      { name: 'Figma',     Icon: PenTool,   color: '#f24e1e' },
      { name: 'WordPress', Icon: Layout,    color: '#21759b' },
      { name: 'Scrum',     Icon: Users,     color: '#4a90e2' },
      { name: 'Claude',        Icon: Bot,          color: '#cc785c' },
      { name: 'Fortinet',      Icon: Shield,       color: '#ee3124' },
      { name: 'Google DevTools', Icon: MonitorCheck, color: '#4285f4' },
      { name: 'SEO',           Icon: TrendingUp,   color: '#34a853' },
    ],
  },
];

// Flat list (used only if needed elsewhere)
export const skills = skillCategories.flatMap(c => c.skills);