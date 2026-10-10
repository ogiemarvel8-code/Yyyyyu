import React, { useState } from 'react';
import { MessageCircle, MapPin, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CompanyConfig, DEFAULT_GALLERY_PROJECTS, GalleryProject, getWhatsAppUrl } from '../config/company';

interface RecentWorksProps {
  config: CompanyConfig;
}

export const RecentWorks: React.FC<RecentWorksProps> = ({ config }) => {
  const [activeProject, setActiveProject] = useState<GalleryProject | null>(null);
  const [filter, setFilter] = useState<'all' | 'duplex' | 'bungalow'>('all');

  const filteredProjects = DEFAULT_GALLERY_PROJECTS.filter((p) => {
    if (filter === 'duplex') return p.caption.toLowerCase().includes('duplex');
    if (filter === 'bungalow') return p.caption.toLowerCase().includes('bungalow');
    return true;
  });

  return (
    <section id="recent-works" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-bold text-[#16A34A] tracking-wider uppercase mb-2">
            Completed Projects in Abuja
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2B1C] tracking-tight">
            Recent Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real residential roofing projects across the Federal Capital Territory. See our craftsmanship, neat valley gutter profiling, and leak-proof installation.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center justify-center gap-1.5 p-1 bg-slate-100 rounded-xl mt-6 max-w-xs mx-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-white text-[#0C2B1C] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Roofs (6)
            </button>
            <button
              onClick={() => setFilter('duplex')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'duplex'
                  ? 'bg-white text-[#0C2B1C] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Duplexes
            </button>
            <button
              onClick={() => setFilter('bungalow')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                filter === 'bungalow'
                  ? 'bg-white text-[#0C2B1C] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bungalows
            </button>
          </div>
        </div>

        {/* 6-Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const projectWhatsAppUrl = getWhatsAppUrl(
              config.whatsappNumber,
              `Hello ApexShield Roofing, I saw your recent project "${project.caption}" on your website. I want a similar roof design for my building in Abuja.`
            );

            return (
              <div
                key={project.id}
                className="group relative bg-[#F8FAF9] rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Photo container */}
                <div
                  onClick={() => setActiveProject(project)}
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-slate-100"
                >
                  <img
                    src={project.image}
                    alt={project.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top-right quick inspect icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Overlay location */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1 text-[11px] text-[#86EFAC] font-medium">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Caption & Details Footer */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    {/* Caption - Exact required wording */}
                    <h3 className="text-base sm:text-lg font-bold text-[#0C2B1C] mb-1">
                      {project.caption}
                    </h3>
                    
                    {/* Unboxed metadata */}
                    <div className="flex items-center flex-wrap gap-2 text-xs text-slate-500 mb-3">
                      <span>{project.roofType}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.estimatedArea}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.completionTime}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-200/80">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-semibold text-slate-700 hover:text-[#16A34A] transition-colors"
                    >
                      View Specs
                    </button>
                    <a
                      href={projectWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#0C2B1C] bg-[#22C55E]/20 hover:bg-[#22C55E] hover:text-white transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Quote This Style</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery note regarding authenticity */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto text-xs text-slate-500">
          <p>
            All installations featured reflect actual projects executed across Abuja FCT by certified installers following standard Nigerian building code specifications.
          </p>
        </div>

      </div>

      {/* Lightbox / Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/20">
            {/* Modal header with image */}
            <div className="relative aspect-[16/10] bg-slate-900">
              <img
                src={activeProject.image}
                alt={activeProject.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-xs bg-[#16A34A] px-2.5 py-1 rounded-md font-bold">
                  Completed in {activeProject.completionTime}
                </span>
              </div>
            </div>

            {/* Modal content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0C2B1C] mb-1">
                {activeProject.caption}
              </h3>
              <p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#16A34A]" />
                {activeProject.location}
              </p>

              <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-xl mb-5 text-xs text-slate-700">
                <div>
                  <span className="font-semibold block text-slate-900">Roof Profile:</span>
                  {activeProject.roofType}
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">Surface Area:</span>
                  {activeProject.estimatedArea}
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">Warranty:</span>
                  10 Years Written Guarantee
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">Inspection:</span>
                  Completed & Certified
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <a
                  href={getWhatsAppUrl(
                    config.whatsappNumber,
                    `Hello ApexShield Roofing, I am inquiring about the ${activeProject.caption} project (${activeProject.roofType}). Can you quote for my site?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#0C2B1C] hover:text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request Quote For This</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
