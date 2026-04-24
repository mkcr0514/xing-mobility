import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Shield, Zap, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const pillars = [
  {
    title: "Intrinsic Safety",
    headline: "Safety by Design.",
    copy: "Conventional systems react to fire; our first-principles architecture suppresses it at the cell level.",
    icon: <Shield className="text-xing-blue" size={32} />
  },
  {
    title: "Out-of-China Resilience",
    headline: "Trusted Supply.",
    copy: "De-risk your programs with high-performance tech engineered and manufactured in Taiwan's secure ecosystem.",
    icon: <Globe className="text-xing-blue" size={32} />
  },
  {
    title: "Strategic Optionality",
    headline: "Future-Proof Choice.",
    copy: "Our cell-agnostic design allows you to plug in future chemistries without a total system redesign.",
    icon: <Cpu className="text-xing-blue" size={32} />
  },
  {
    title: "High-Power Pedigree",
    headline: "A Decade of Extremes.",
    copy: "For over 10 years, we've mastered the toughest high-voltage (800V+) systems—born on the track and proven in the field.",
    icon: <Zap className="text-xing-blue" size={32} />
  }
];

const markets = [
  {
    name: "Mobility",
    desc: "Power without the ceiling. Purpose-built for 800V platforms.",
    image: "https://picsum.photos/seed/ev/800/600"
  },
  {
    name: "AI Data Centers",
    desc: "Backup for the liquid-cooled era. Delivering 1.2 MW per rack.",
    image: "https://picsum.photos/seed/datacenter/800/600"
  },
  {
    name: "ESS & Marine",
    desc: "Safety without compromise. The only BESS 'intrinsically safe' for hospitals.",
    image: "https://picsum.photos/seed/marine/800/600"
  },
  {
    name: "Defense & UAV",
    desc: "Secure tactical energy. Trusted, 'Out-of-China' high-power density.",
    image: "https://picsum.photos/seed/defense/800/600"
  }
];

export default function Home() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/xing/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xing-dark/60 via-transparent to-xing-dark"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1 border border-xing-blue text-xing-blue text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Systems Revolution
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
              This is Not a <br />
              <span className="text-gradient">Chemistry Problem.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Today's high-power apps are throttled by a structural flaw. <br className="hidden md:block" />
              We returned to the First Principle.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/technology" className="xing-button flex items-center gap-2 group">
                Explore Technology <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="xing-button-outline">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Why XING - Four Pillars */}
      <Section className="bg-xing-dark">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Strategic Edge</h2>
          <div className="w-20 h-1 bg-xing-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-xing-gray border border-white/5 hover:border-xing-blue/50 transition-all duration-500 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-xs font-bold text-xing-blue uppercase tracking-widest mb-2">{pillar.title}</h3>
              <h4 className="text-xl font-bold mb-4">{pillar.headline}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{pillar.copy}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Markets Section */}
      <Section className="bg-xing-dark border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Markets & Applications</h2>
            <p className="text-gray-400 text-lg">
              XING doesn't need to win the entire battery market; we dominate the hardest, highest-value segments—a $100B+ annual opportunity.
            </p>
          </div>
          <Link to="/markets" className="text-xing-blue font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
            View All Markets <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {markets.map((market, idx) => (
            <motion.div
              key={market.name}
              whileHover={{ y: -10 }}
              className="relative h-[400px] overflow-hidden group cursor-pointer"
            >
              <img 
                src={market.image} 
                alt={market.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-xing-dark via-xing-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="text-2xl font-bold mb-2">{market.name}</h3>
                <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{market.desc}</p>
                <div className="w-10 h-1 bg-xing-blue group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats / Call to Action */}
      <Section className="bg-xing-blue text-white py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-6xl font-bold mb-2">3,000<span className="text-2xl">W/kg</span></div>
            <p className="uppercase tracking-widest text-sm font-medium opacity-80">Power Density Today</p>
          </div>
          <div>
            <div className="text-6xl font-bold mb-2">10+<span className="text-2xl">Years</span></div>
            <p className="uppercase tracking-widest text-sm font-medium opacity-80">Extended Lifecycle</p>
          </div>
          <div>
            <div className="text-6xl font-bold mb-2">130+</div>
            <p className="uppercase tracking-widest text-sm font-medium opacity-80">Global Patents</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
