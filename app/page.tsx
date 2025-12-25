import React from "react";
import Navbar from "@/components/navbar"; 
import { 
  ArrowRight, BarChart2, Globe, Megaphone, TrendingUp, Search, Layers, Star, 
  Mail, MapPin, Phone, CheckCircle, ExternalLink, ShieldCheck, Linkedin, Github 
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION (MOBILE OPTIMIZED) --- */}
      <section id="home" className="relative pt-24 pb-12 lg:pt-40 lg:pb-28 px-6">
        {/* Background Blob (Desktop Only) */}
        <div className="absolute top-0 right-0 w-[45%] h-[85%] bg-gradient-to-bl from-cyan-50 via-blue-50 to-white rounded-bl-[100px] -z-10 hidden lg:block" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-4 block">Digital Marketing Expert</span>
            <h1 className="text-4xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Build Your Brand <br />
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Right Way</span>
            </h1>
            <p className="text-base lg:text-lg text-slate-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I'm Imeth Sahabandu. I help businesses bridge the gap between creative design, technical development, and revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition">
                Let's Talk
              </a>
              <a href="#case-studies" className="px-8 py-4 rounded-full font-bold text-slate-600 border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition">
                View Work
              </a>
            </div>
          </div>

          {/* Right Image & Floating Cards */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative z-10 w-full max-w-[350px] lg:max-w-md">
                
                {/* Main Image */}
                <img 
                  src="https://i.ibb.co/WN0t7RLz/Imeth01.png" 
                  alt="Imeth Sahabandu" 
                  className="rounded-b-full rounded-t-[40px] shadow-2xl border-4 border-white object-cover h-[400px] lg:h-[500px] w-full"
                />
                
                {/* Card 1: ROI (Mobile: Bottom Center | Desktop: Floating Left) */}
                <div className="absolute -bottom-6 left-0 right-0 mx-auto w-max md:bottom-8 md:right-auto md:-left-12 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="bg-green-100 p-2 md:p-3 rounded-full text-green-600">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">ROI Generated</p>
                    <p className="text-slate-900 font-bold text-base md:text-lg">300% Avg</p>
                  </div>
                </div>

                {/* Card 2: Rating (Mobile: Top Right inside | Desktop: Floating Right outside) */}
                <div className="absolute top-1/2 right-4 md:top-45 md:-right-10 bg-white p-2 md:p-3 pr-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 animate-bounce" style={{ animationDuration: '4s' }}>
                   <div className="bg-yellow-100 p-1.5 rounded-full text-yellow-500">
                      <Star size={14} fill="currentColor" />
                   </div>
                   <div>
                      <p className="text-slate-900 font-bold text-xs md:text-sm">4.9 Rating</p>
                      <p className="text-slate-400 text-[10px]">from 20+ clients</p>
                   </div>
                </div>

                {/* Card 3: Hidden on Mobile to save space */}
                <div className="hidden md:flex absolute top-16 -left-16 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 animate-bounce" style={{ animationDuration: '5s' }}>
                   <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                      <ShieldCheck size={20} />
                   </div>
                   <div>
                      <p className="text-slate-900 font-bold text-sm">Certified</p>
                      <p className="text-slate-400 text-[10px]">AEO Expert</p>
                   </div>
                </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-xl">
            <span className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-2 block">What I Do</span>
            <h2 className="text-4xl font-extrabold text-slate-900">Areas Of Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<Megaphone />} bg="bg-red-50 text-red-500" title="Social Media Marketing" desc="Campaigns for brands like Boxy.lk that drive real engagement." />
            <ServiceCard icon={<BarChart2 />} bg="bg-indigo-50 text-indigo-500" title="Market Analysis" desc="Deep-dive research to identify market trends and opportunities." />
            <ServiceCard icon={<Globe />} bg="bg-purple-50 text-purple-500" title="Web Development" desc="Building high-performance apps (Next.js/React) for global clients." />
            <ServiceCard icon={<Search />} bg="bg-teal-50 text-teal-500" title="SEO & AEO" desc="Optimizing content for Google and AI Answer Engines." />
            <ServiceCard icon={<Layers />} bg="bg-emerald-50 text-emerald-500" title="Brand Strategy" desc="From logo design to full corporate identity handling." />
            <ServiceCard icon={<Star />} bg="bg-orange-50 text-orange-500" title="Event Ops" desc="Managing large-scale logistics and ticket sales for events." />
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4 mt-8">
                <div className="h-48 bg-slate-100 rounded-2xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" className="w-full h-full object-cover hover:scale-110 transition"/></div>
                <div className="h-64 bg-slate-100 rounded-2xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" className="w-full h-full object-cover hover:scale-110 transition"/></div>
             </div>
             <div className="space-y-4">
                <div className="h-64 bg-slate-100 rounded-2xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80" className="w-full h-full object-cover hover:scale-110 transition"/></div>
                <div className="h-48 bg-blue-600 rounded-2xl p-6 flex flex-col justify-center text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <h4 className="text-4xl font-bold mb-1">5+</h4>
                    <p className="text-blue-100 font-medium">Years of <br/>Marketing Exp.</p>
                </div>
             </div>
          </div>

          {/* Right: Text */}
          <div>
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">About Me</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">More than just a Marketer. <br/>I'm a Builder.</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              I don't just run ads; I build ecosystems. From developing full-stack applications for international solar companies to managing high-stakes AEO campaigns, I understand how technology and persuasion intersect.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" size={20} />
                <span className="text-slate-700 font-medium">Full-Stack Tech Skills (Next.js, Java, Python)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" size={20} />
                <span className="text-slate-700 font-medium">Creative Direction & Graphic Design</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" size={20} />
                <span className="text-slate-700 font-medium">Data-Driven Campaign Management</span>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <p className="italic text-slate-600">"Imeth combines technical precision with creative flair. He doesn't just deliver a service; he delivers a result."</p>
              <div className="mt-4 flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
                 <div>
                    <p className="text-slate-900 font-bold text-sm">Client Name</p>
                    <p className="text-slate-500 text-xs">CEO, Previous Company</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES SECTION --- */}
      <section id="case-studies" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-2 block">Success Stories</span>
              <h2 className="text-4xl font-extrabold">Recent Projects</h2>
            </div>
            <a href="#" className="text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition">View Full Portfolio &rarr;</a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1: SELTech */}
            <div className="group relative h-[400px] rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-500">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
               <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
               
               <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="flex gap-2 mb-3">
                     <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full text-white">Web Dev</span>
                     <span className="bg-slate-700 text-xs font-bold px-3 py-1 rounded-full text-white">Branding</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">SELTech International</h3>
                  <p className="text-slate-300 mb-4 text-sm line-clamp-2">
                    Developed a comprehensive web application and brand identity for a leading solar energy company, streamlining their customer acquisition.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-bold group-hover:text-white transition">
                     View Case Study <ArrowRight size={16} />
                  </div>
               </div>
            </div>

            {/* Project 2: Envision Studio */}
            <div className="group relative h-[400px] rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-500">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
               
               <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="flex gap-2 mb-3">
                     <span className="bg-purple-600 text-xs font-bold px-3 py-1 rounded-full text-white">SEO Strategy</span>
                     <span className="bg-slate-700 text-xs font-bold px-3 py-1 rounded-full text-white">AEO</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Envision Studio SEO & AEO</h3>
                  <p className="text-slate-300 mb-4 text-sm line-clamp-2">
                    Executed a data-driven Answer Engine Optimization (AEO) campaign to dominate search rankings and capture AI-driven traffic.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-bold group-hover:text-white transition">
                     View Strategy <ArrowRight size={16} />
                  </div>
               </div>
            </div>

            {/* Project 3: Boxy.lk */}
            <div className="md:col-span-2 group relative h-[300px] rounded-3xl overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-500">
               <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10"></div>
               <img src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
               
               <div className="absolute bottom-0 left-0 p-8 z-20 max-w-2xl">
                  <div className="flex gap-2 mb-3">
                     <span className="bg-orange-500 text-xs font-bold px-3 py-1 rounded-full text-white">E-Commerce</span>
                     <span className="bg-slate-700 text-xs font-bold px-3 py-1 rounded-full text-white">Marketing</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Boxy.lk Promotion</h3>
                  <p className="text-slate-300 mb-4 text-sm">
                    Designed high-converting posters and digital assets for a major retail promotion.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (MOBILE FIXED) --- */}
      <section id="contact" className="py-12 md:py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl md:rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            
            {/* Contact Info (Left - Blue Card) */}
            <div className="bg-blue-600 p-6 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
               {/* Background Decorative Circles */}
               <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full -mr-10 -mt-10 md:-mr-16 md:-mt-16 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-white/10 rounded-full -ml-8 -mb-8 md:-ml-10 md:-mb-10 pointer-events-none"></div>
               
               <div>
                 <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight">Let's discuss your project</h3>
                 <p className="text-blue-100 mb-8 leading-relaxed text-sm md:text-base">
                   Interested in working together? Fill out the form or reach out directly. I'm always open to discussing new ideas.
                 </p>
                 
                 <div className="space-y-6">
                   {/* Email Item */}
                   <div className="flex items-start gap-4">
                     <div className="w-10 h-10 min-w-[2.5rem] bg-blue-500 rounded-full flex items-center justify-center"><Mail size={18}/></div>
                     <div className="overflow-hidden">
                       <p className="text-blue-200 text-xs uppercase font-bold tracking-wider">Email Me</p>
                       <p className="font-medium break-words text-sm md:text-base">imeth.sahabandu@gmail.com</p>
                     </div>
                   </div>

                   {/* Phone Item */}
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 min-w-[2.5rem] bg-blue-500 rounded-full flex items-center justify-center"><Phone size={18}/></div>
                     <div>
                       <p className="text-blue-200 text-xs uppercase font-bold tracking-wider">Call Me</p>
                       <p className="font-medium text-sm md:text-base">+94 77 696 4553</p>
                     </div>
                   </div>

                   {/* Location Item */}
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 min-w-[2.5rem] bg-blue-500 rounded-full flex items-center justify-center"><MapPin size={18}/></div>
                     <div>
                       <p className="text-blue-200 text-xs uppercase font-bold tracking-wider">Location</p>
                       <p className="font-medium text-sm md:text-base">Colombo, Sri Lanka</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Social Icons (LinkedIn & GitHub) */}
               <div className="mt-10 md:mt-12 flex gap-4">
                 {/* LinkedIn */}
                 <a 
                   href="https://www.linkedin.com/in/imeths" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-10 h-10 border border-blue-400 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition hover:-translate-y-1"
                 >
                   <Linkedin size={20} />
                 </a>

                 {/* GitHub */}
                 <a 
                   href="https://github.com/imeths" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-10 h-10 border border-blue-400 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition hover:-translate-y-1"
                 >
                   <Github size={20} />
                 </a>
               </div>
            </div>

            {/* Contact Form (Right - White Side) */}
            <div className="p-6 md:p-12 bg-white">
               <form className="space-y-4 md:space-y-6">
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                   <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                   <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                   <textarea rows={4} placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"></textarea>
                 </div>
                 <button type="button" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition shadow-lg hover:-translate-y-1">
                   Send Message
                 </button>
               </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-10 text-center">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Imeth Sahabandu. All rights reserved.</p>
      </footer>
    </main>
  );
}

// --- Helper Component ---
function ServiceCard({ icon, bg, title, desc }: { icon: any, bg: string, title: string, desc: string }) {
  return (
    <div className="group p-8 border border-slate-100 rounded-3xl bg-white hover:shadow-xl hover:shadow-slate-200/50 transition duration-300 hover:-translate-y-2 cursor-pointer">
      <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}