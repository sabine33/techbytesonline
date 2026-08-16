
import { motion } from 'motion/react';
import config from '../config.json';

export default function Hero() {
  return (
    <section className="py-24 px-6 sm:px-10 md:px-20 text-center border-b border-slate-100">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-slate-950 mb-6">
          {config.companyName}
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed">
          {config.tagline}
        </p>
        <div className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-500 text-sm font-medium">
          Developers: {config.developers.join(' • ')}
        </div>
      </motion.div>
    </section>
  );
}
