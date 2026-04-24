import { motion } from 'motion/react';
import { Database, Truck, Battery, ShieldCheck } from 'lucide-react';
import Section from '../components/Section';

const platforms = [
  {
    id: "bbu",
    title: "IMMERSIO™ BBU Series",
    focus: "AI Data Center Backup",
    spec: "±400V / 800V HVDC",
    value: "World's first HV BBU for NVIDIA Rubin-class workloads.",
    icon: <Database className="text-xing-blue" size={40} />
  },
  {
    id: "ctp",
    title: "IMMERSIO™ CTP & CTC",
    focus: "High Performance EV",
    spec: "3,000 W/kg Density",
    value: "High-output for performance EVs and heavy-duty industrial vehicles.",
    icon: <Truck className="text-xing-blue" size={40} />
  },
  {
    id: "xbe",
    title: "IMMERSIO™ XBE Series",
    focus: "ESS & Marine",
    spec: "10-Year Warranty",
    value: "Safe for indoor, rooftop, and urban proximity-sensitive sites.",
    icon: <Battery className="text-xing-blue" size={40} />
  }
];

export default function Platforms() {
  return (
    <div className="pt-20">
      <Section className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Platforms</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Engineered for Extremes. Built on a decade of immersion-cooling expertise, our platforms replace modular complexity with a holistic, high-performance system.
        </p>
      </Section>

      <Section className="bg-xing-gray">
        <div className="space-y-12">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 items-center p-12 bg-xing-dark border border-white/5 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="mb-8">{platform.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{platform.title}</h2>
                <div className="flex gap-4 mb-8">
                  <span className="px-3 py-1 bg-xing-blue/10 text-xing-blue text-xs font-bold uppercase tracking-widest border border-xing-blue/20">
                    {platform.focus}
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-bold uppercase tracking-widest border border-white/10">
                    {platform.spec}
                  </span>
                </div>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {platform.value}
                </p>
                <button className="xing-button-outline flex items-center gap-2 group">
                  Technical Specs <ShieldCheck size={18} />
                </button>
              </div>
              <div className="flex-1 w-full">
                <img 
                  src={`https://picsum.photos/seed/${platform.id}/800/500`} 
                  alt={platform.title} 
                  className="w-full h-auto object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
