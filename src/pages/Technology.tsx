import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, Shield, Thermometer } from 'lucide-react';
import Section from '../components/Section';

export default function Technology() {
  return (
    <div className="pt-20">
      <Section className="min-h-[70vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xing-blue font-bold tracking-widest uppercase text-sm mb-4 block">The First Principle</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Moving from <br />
              <span className="text-gradient">"Chemistry" to "Systems."</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Most battery systems today are built on a flawed foundation: Indirect Cooling. 
              We treat dielectric coolant as the system's "bloodstream," ensuring uniform cell temperatures of 25–27°C under extreme loads.
            </p>
            <div className="flex gap-4">
              <button className="xing-button">Download Whitepaper</button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-xing-gray border border-white/10 rounded-full flex items-center justify-center p-12 overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-xing-blue/20 rounded-full"
              ></motion.div>
              <img 
                src="https://picsum.photos/seed/tech/600/600" 
                alt="Technology Illustration" 
                className="relative z-10 w-full h-full object-cover rounded-full opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* The Revolution */}
      <Section className="bg-xing-gray">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">The IMMERSIO™ Revolution</h2>
          <p className="text-gray-400 text-lg">
            XING Mobility's IMMERSIO™ platform is a total rethink of battery physics. We have moved from a collection of parts to a holistic system where the coolant is the "bloodstream" of the battery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "100% Thermal Contact",
              desc: "By fully submerging every cell in a proprietary, non-conductive dielectric fluid, we remove heat directly at the source.",
              icon: <Thermometer className="text-xing-blue" />
            },
            {
              title: "Uniform Harmony",
              desc: "Maintains a uniform temperature of 25–27°C across the entire pack, even during extreme high-load discharge.",
              icon: <Zap className="text-xing-blue" />
            },
            {
              title: "Structural Coolant",
              desc: "Our architecture uses the fluid channels as part of the structural integrity, reducing weight while maximizing surface area.",
              icon: <Shield className="text-xing-blue" />
            }
          ].map((item, idx) => (
            <div key={idx} className="p-10 border border-white/5 bg-xing-dark">
              <div className="w-12 h-12 bg-xing-blue/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="p-12 bg-xing-dark">
            <h3 className="text-2xl font-bold mb-8 text-gray-500 uppercase tracking-widest text-sm">Traditional (Cold Plate)</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400">
                <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
                <span>Indirect contact creates "thermal bottlenecks"</span>
              </li>
              <li className="flex items-start gap-4 text-gray-400">
                <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
                <span>Power throttling required to prevent damage</span>
              </li>
              <li className="flex items-start gap-4 text-gray-400">
                <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
                <span>Reactive safety: responds after fire starts</span>
              </li>
            </ul>
          </div>
          <div className="p-12 bg-xing-gray relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-xing-blue/10 blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-8 text-xing-blue uppercase tracking-widest text-sm">XING (Integral Immersion)</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-xing-blue mt-1 flex-shrink-0" size={20} />
                <span>100% thermal contact at the source</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-xing-blue mt-1 flex-shrink-0" size={20} />
                <span>Sustained high-power output without throttling</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-xing-blue mt-1 flex-shrink-0" size={20} />
                <span>Active suppression: fire extinguisher from inside out</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

function X({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  );
}
