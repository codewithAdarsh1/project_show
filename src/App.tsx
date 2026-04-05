/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import GhostGrid from './components/GhostGrid';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { projects } from './data';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-tertiary-fixed selection:text-white overflow-hidden">
      <div className="noise"></div>
      <CustomCursor />
      <GhostGrid />
      <Navbar />
      <Gallery onIndexChange={setActiveIndex} />
      <Footer activeIndex={activeIndex} total={projects.length} />
    </div>
  );
}


