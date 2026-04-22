import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import CursorGlow from './components/ui/CursorGlow/CursorGlow';
import styles from './App.module.css';

const About = lazy(() => import('./sections/About/About'));
const Skills = lazy(() => import('./sections/Skills/Skills'));
const Projects = lazy(() => import('./sections/Projects/Projects'));
const Contact = lazy(() => import('./sections/Contact/Contact'));

function SectionFallback() {
  return <div className={styles.fallback} aria-hidden="true" />;
}

export default function App() {
  return (
    <div className={styles.app}>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}
