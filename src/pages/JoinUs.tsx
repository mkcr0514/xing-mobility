import { motion } from 'motion/react';
import { Briefcase, Users, Lightbulb, Globe } from 'lucide-react';
import Section from '../components/Section';

export default function JoinUs() {
  return (
    <div className="pt-20">
      <Section className="text-center">
        <span className="text-xing-blue font-bold tracking-widest uppercase text-sm mb-4 block">Careers</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Power Your Career. <br />
          <span className="text-gradient">Build the Future of Energy.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We've outgrown the tin-roof garage, but we've kept the garage spirit. Join a team holding 130+ global patents and setting the standard for the electrification era.
        </p>
      </Section>

      <Section className="bg-xing-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Vying for the Future",
              desc: "In line with our name (XING), we are always in motion—vying for the future in the active present tense.",
              icon: <Globe size={32} className="text-xing-blue" />
            },
            {
              title: "First-Principles",
              desc: "At XING, we don't fix symptoms; we solve the 'impossible' thermal master constraint from the ground up.",
              icon: <Lightbulb size={32} className="text-xing-blue" />
            },
            {
              title: "Innovation at Scale",
              desc: "Be part of a team holding 58+ global patents, operating the world's first volume production facility.",
              icon: <Briefcase size={32} className="text-xing-blue" />
            },
            {
              title: "Taiwan Advantage",
              desc: "Experience the 'shortest distance from concept to reality' at the heart of the world's most flexible ecosystem.",
              icon: <Users size={32} className="text-xing-blue" />
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-xing-dark border border-white/5">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="bg-xing-blue p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Join the Revolution?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            We look for "Systems Thinkers"—those who understand that a battery is a living, thermal organism.
          </p>
          <button className="px-10 py-4 bg-white text-xing-blue font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors">
            View Open Positions
          </button>
        </div>
      </Section>
    </div>
  );
}
