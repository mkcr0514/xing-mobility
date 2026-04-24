import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-xing-dark border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-xing-blue flex items-center justify-center">
              <span className="text-white font-bold text-xl">X</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tighter uppercase">XING MOBILITY</span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            The world's most advanced immersion-cooled battery platform. Engineered in Taiwan, trusted worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase text-sm tracking-widest mb-6">Technology</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/technology" className="hover:text-white transition-colors">IMMERSIO™ Architecture</Link></li>
            <li><Link to="/platforms" className="hover:text-white transition-colors">CTP & CTC Platforms</Link></li>
            <li><Link to="/technology" className="hover:text-white transition-colors">Safety & Testing</Link></li>
            <li><Link to="/technology" className="hover:text-white transition-colors">Whitepapers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase text-sm tracking-widest mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/company" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/company" className="hover:text-white transition-colors">Paradigm Factory</Link></li>
            <li><Link to="/join-us" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/company" className="hover:text-white transition-colors">Newsroom</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase text-sm tracking-widest mb-6">Connect</h4>
          <div className="flex gap-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-xing-blue hover:border-xing-blue transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-xing-blue hover:border-xing-blue transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-xing-blue hover:border-xing-blue transition-all">
              <Youtube size={18} />
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Mail size={16} />
            <span>info@xingmobility.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-4">
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} XING Mobility. All rights reserved.
        </p>
        <div className="flex gap-8 text-gray-600 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
