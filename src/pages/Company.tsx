import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const history = [
  { year: "2015", event: "Founding by Royce YC Hong and Azizi Tucker." },
  { year: "2017", event: "Miss R launch—proving immersion cooling in mud and salt." },
  { year: "2023", event: "Strategic investment from Kubota." },
  { year: "2025", event: "SC 25 Launch of 800V BBU and Paradigm Factory inauguration." }
];

export default function Company() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl">
          <span className="text-xing-blue font-bold tracking-widest uppercase text-sm mb-4 block">History & Vision</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            More Than a Battery. <br />
            <span className="text-gradient">A Movement in Progress.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            Founded in 2015 by Royce YC Hong and Azizi Tucker, XING began with the "crazy dream" of building Miss R—a 1,300 HP electric supercar that served as the ultimate testbed for immersion cooling. Racing was our lab for durability.
          </p>
        </div>
      </Section>

      {/* Founders Journey */}
      <Section className="bg-xing-gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/founders/800/1000" 
              alt="Founders" 
              className="w-full h-auto border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Founders' Journey</h2>
            <blockquote className="text-2xl font-light italic text-gray-300 mb-8 border-l-4 border-xing-blue pl-8">
              "You can't connect the dots looking forward; you can only connect them looking backwards. The crazy dream of building an electric supercar was the only way to find the battery limits we needed to break."
            </blockquote>
            <p className="font-bold text-xing-blue uppercase tracking-widest">— Royce YC Hong, Founder & CEO</p>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">A Decade of Extremes</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {history.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 md:text-right">
                  {idx % 2 === 0 && (
                    <>
                      <span className="text-4xl font-bold text-xing-blue mb-2 block">{item.year}</span>
                      <p className="text-gray-400">{item.event}</p>
                    </>
                  )}
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-xing-blue rounded-full -translate-x-1/2 z-10 hidden md:block"></div>
                <div className="flex-1">
                  {idx % 2 !== 0 && (
                    <>
                      <span className="text-4xl font-bold text-xing-blue mb-2 block">{item.year}</span>
                      <p className="text-gray-400">{item.event}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Paradigm Factory */}
      <Section className="bg-xing-blue text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">The Paradigm Factory</h2>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Taiwan's most advanced battery platform. Our Paradigm Factory is the world's first facility dedicated to high-volume production of immersion-cooled battery packs.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <p className="text-xs uppercase tracking-widest opacity-70">Parts Sourced within 300km</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1st</div>
                <p className="text-xs uppercase tracking-widest opacity-70">Volume Immersion Facility</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://picsum.photos/seed/factory/800/500" 
              alt="Paradigm Factory" 
              className="w-full h-auto shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
