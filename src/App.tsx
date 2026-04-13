/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from '@/components/landing/Hero';
import WineDashboard from '@/components/dashboard/WineDashboard';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');

  return (
    <div className="min-h-screen font-sans selection:bg-gold-500/30">
      <AnimatePresence mode="wait">
        {view === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onGetStarted={() => setView('dashboard')} />
            
            {/* Simple Landing Footer */}
            <footer className="bg-cream-50 py-12 border-t border-wine-800/5">
              <div className="container mx-auto px-6 text-center">
                <div className="text-2xl font-serif text-wine-900 mb-4">
                  Vino<span className="text-gold-500 italic">Metrics</span>
                </div>
                <p className="text-wine-900/40 text-sm font-light">
                  © 2026 VinoMetrics SaaS. All rights reserved. 
                  <br />
                  Designed for the world's most discerning wine professionals.
                </p>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <WineDashboard onBack={() => setView('landing')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
