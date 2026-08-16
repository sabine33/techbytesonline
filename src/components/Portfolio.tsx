
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import config from '../config.json';

export default function Portfolio() {
  return (
    <section className="py-24 px-6 sm:px-10 md:px-20 bg-slate-50" id="portfolio">
      <h2 className="text-4xl font-bold text-slate-950 mb-16 text-center tracking-tight">Our Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {config.apps.map((app, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -2 }}
            className="p-8 bg-white border border-slate-200 rounded-xl transition-colors hover:border-slate-300"
          >
            <h3 className="text-lg font-semibold text-slate-950 mb-3">{app.title}</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">{app.description}</p>
            <a href={app.link} className="inline-flex items-center text-slate-900 text-sm font-semibold hover:text-slate-600">
              View Details <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
