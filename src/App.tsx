import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <Portfolio />
      <Footer />
    </main>
  );
}
