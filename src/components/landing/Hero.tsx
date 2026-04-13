import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Upload, BarChart3, ShieldCheck } from 'lucide-react';

export default function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-wine-800/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-gold-600 border border-gold-500/30 rounded-full bg-gold-500/5">
            The Future of Professional Wine Procurement
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-wine-900 leading-tight mb-8">
            Vino<span className="text-gold-500 italic">Metrics</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-wine-900/70 font-light leading-relaxed mb-12">
            The intelligent SaaS platform for professional wine buyers. 
            Upload supplier price lists, benchmark against global markets, 
            and secure the best value for your cellar—instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="h-14 px-8 text-base bg-wine-800 hover:bg-wine-900 text-cream-50 rounded-full transition-all duration-300 shadow-xl shadow-wine-900/10"
          >
            Enter Dashboard <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="h-14 px-8 text-base border-wine-800/20 text-wine-800 hover:bg-wine-800/5 rounded-full"
          >
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-wine-800/5 flex items-center justify-center text-wine-800">
              <Upload className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-wine-900">Unified Upload</h3>
            <p className="text-wine-900/60 font-light">
              Drop multiple Excel supplier lists. Our AI parses and normalizes data into a single, elegant view.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-wine-800/5 flex items-center justify-center text-wine-800">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-wine-900">Market Benchmarking</h3>
            <p className="text-wine-900/60 font-light">
              Integrated with Wine-Searcher API to compare supplier quotes against real-time retail market prices.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-wine-800/5 flex items-center justify-center text-wine-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-wine-900">Value Flagging</h3>
            <p className="text-wine-900/60 font-light">
              Instantly identify "Best Value" wines where supplier price is significantly below market average.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
