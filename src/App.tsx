import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/navigation/Header';
import { Footer } from './components/navigation/Footer';
import { HomePage } from './pages/Home';
import { WorksPage } from './pages/Works';
import { CaseStudyPage } from './pages/CaseStudy';
import { AboutPage } from './pages/About';
import { ThoughtsPage } from './pages/Thoughts';
import { PlaygroundPage } from './pages/Playground';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [currentProjectId, setCurrentProjectId] = useState<string>('fortune-leadx');

  // Sync state with URL hash
  const parseHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash) {
      setCurrentRoute('home');
      return;
    }

    if (hash.startsWith('case-study')) {
      const parts = hash.split('/');
      setCurrentRoute('case-study');
      if (parts[1]) {
        setCurrentProjectId(parts[1]);
      }
      return;
    }

    const knownRoutes = ['home', 'works', 'about', 'thoughts', 'playground'];
    if (knownRoutes.includes(hash)) {
      setCurrentRoute(hash);
    } else {
      setCurrentRoute('home');
    }
  };

  useEffect(() => {
    parseHash();
    const handleHashChange = () => parseHash();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: string, projectId?: string) => {
    if (route === 'case-study') {
      const targetId = projectId || currentProjectId || 'fortune-leadx';
      setCurrentProjectId(targetId);
      setCurrentRoute('case-study');
      window.location.hash = `/case-study/${targetId}`;
    } else if (route === 'home') {
      setCurrentRoute('home');
      window.location.hash = '/';
    } else {
      setCurrentRoute(route);
      window.location.hash = `/${route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141414] flex flex-col font-sans antialiased selection:bg-[#FD5D07] selection:text-white">
      {/* Editorial Minimal Navigation Header */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Content Area with Framer Motion Page Transition */}
      <main className="flex-1 w-full pb-12">
        <AnimatePresence mode="wait">
          {currentRoute === 'home' && (
            <HomePage key="home" onNavigate={handleNavigate} />
          )}
          {currentRoute === 'works' && (
            <WorksPage key="works" onNavigate={handleNavigate} />
          )}
          {currentRoute === 'case-study' && (
            <CaseStudyPage
              key={`case-study-${currentProjectId}`}
              projectId={currentProjectId}
              onNavigate={handleNavigate}
            />
          )}
          {currentRoute === 'about' && (
            <AboutPage key="about" onNavigate={handleNavigate} />
          )}
          {currentRoute === 'thoughts' && (
            <ThoughtsPage key="thoughts" onNavigate={handleNavigate} />
          )}
          {currentRoute === 'playground' && (
            <PlaygroundPage key="playground" onNavigate={handleNavigate} />
          )}
        </AnimatePresence>
      </main>

      {/* Editorial Contact & Colophon Footer */}
      <Footer />
    </div>
  );
}

export default App;
