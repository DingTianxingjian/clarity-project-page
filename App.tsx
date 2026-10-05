import React from 'react';
import { Hero } from './components/Hero';
import { Abstract } from './components/Abstract';
import { Teaser, Methodology, Results } from './components/ContentBlock';
import { Resources } from './components/Resources';
import { BibTeX } from './components/BibTeX';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Teaser />
      <Abstract />
      <Methodology />
      <Results />
      <Resources />
      <BibTeX />
      <Footer />
    </div>
  );
};

export default App;
