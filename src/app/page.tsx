import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen relative carbon-texture">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="fixed inset-0 diamond-pattern opacity-30 pointer-events-none" />

      {/* Corner Decorations */}
      <div className="fixed top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#ffff0e]/30 pointer-events-none" />
      <div className="fixed top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#ffff0e]/30 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#ffff0e]/30 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#ffff0e]/30 pointer-events-none" />

      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 contour-lines opacity-20" />
        <div className="absolute top-40 left-20 w-2 h-32 bg-[#ffff0e]/20" />
        <div className="absolute top-60 left-32 w-32 h-2 bg-[#ffff0e]/20" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#ffff0e]" />
              <span className="text-[#ffff0e] text-sm uppercase tracking-widest font-mono">INDUSTRIAL ENGINEERING BLOG</span>
              <div className="h-[2px] flex-1 bg-[#ffff0e]/10" />
            </div>
            <h1 className="text-7xl font-bold text-white leading-tight tracking-tight">
              BUILDING THE<br />
              <span className="text-[#ffff0e] yellow-text-glow">FUTURE</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Exploring cutting-edge technology, industrial design, and functional engineering.
              Deep dives into mechanical systems, software architecture, and innovative solutions.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="px-8 py-4 bg-[#ffff0e] text-black font-bold uppercase tracking-wider hover:bg-[#ffff0e]/90 transition-all yellow-glow relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative">LATEST POSTS</span>
              </button>
              <Link href="/projects">
                <button className="px-8 py-4 glass-card text-[#ffff0e] font-bold uppercase tracking-wider hover:bg-[#1a1a1a]/60 transition-all relative group">
                  <span className="relative">VIEW ALL PROJECTS</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <div className="glass-card p-8 relative overflow-hidden group hover:border-[#ffff0e]/30 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 diamond-pattern opacity-20" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#ffff0e]/20" />
              <div className="text-5xl font-bold text-[#ffff0e] mb-2 font-mono">127</div>
              <div className="text-gray-400 uppercase text-sm tracking-wider">ARTICLES PUBLISHED</div>
              <div className="absolute bottom-2 left-2 w-16 h-[2px] bg-[#ffff0e]/20" />
            </div>
            <div className="glass-card p-8 relative overflow-hidden group hover:border-[#ffff0e]/30 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 diamond-pattern opacity-20" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#ffff0e]/20" />
              <div className="text-5xl font-bold text-[#ffff0e] mb-2 font-mono">43</div>
              <div className="text-gray-400 uppercase text-sm tracking-wider">PROJECTS COMPLETED</div>
              <div className="absolute bottom-2 left-2 w-16 h-[2px] bg-[#ffff0e]/20" />
            </div>
            <div className="glass-card p-8 relative overflow-hidden group hover:border-[#ffff0e]/30 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 diamond-pattern opacity-20" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#ffff0e]/20" />
              <div className="text-5xl font-bold text-[#ffff0e] mb-2 font-mono">15K</div>
              <div className="text-gray-400 uppercase text-sm tracking-wider">READERS MONTHLY</div>
              <div className="absolute bottom-2 left-2 w-16 h-[2px] bg-[#ffff0e]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl font-bold text-white tracking-tight">LATEST ARTICLES</h2>
              <div className="flex items-center gap-2 text-[#ffff0e]/60 text-sm font-mono">
                <div className="w-2 h-2 bg-[#ffff0e] animate-pulse" />
                <span>LIVE</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 glass-card hover:bg-[#1a1a1a]/60 transition-all flex items-center justify-center group hover:border-[#ffff0e]/30">
                <svg className="w-6 h-6 text-[#ffff0e] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-12 h-12 glass-card hover:bg-[#1a1a1a]/60 transition-all flex items-center justify-center group hover:border-[#ffff0e]/30">
                <svg className="w-6 h-6 text-[#ffff0e] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              {
                title: "Advanced Carbon Fiber Composites in Modern Engineering",
                category: "MATERIALS",
                date: "OCT 15, 2025",
                readTime: "8 MIN READ"
              },
              {
                title: "Implementing Real-Time Telemetry Systems",
                category: "SOFTWARE",
                date: "OCT 12, 2025",
                readTime: "12 MIN READ"
              },
              {
                title: "Precision Machining: Tolerances and Quality Control",
                category: "MANUFACTURING",
                date: "OCT 09, 2025",
                readTime: "10 MIN READ"
              },
              {
                title: "Grid-Based UI Systems for Industrial Applications",
                category: "DESIGN",
                date: "OCT 06, 2025",
                readTime: "6 MIN READ"
              },
              {
                title: "Hydraulic Systems Optimization Techniques",
                category: "MECHANICAL",
                date: "OCT 03, 2025",
                readTime: "15 MIN READ"
              },
              {
                title: "Modular Architecture in Complex Engineering Projects",
                category: "SYSTEMS",
                date: "SEP 30, 2025",
                readTime: "11 MIN READ"
              }
            ].map((post, index) => (
              <div key={index} className="glass-card p-6 group hover:border-[#ffff0e]/30 transition-all cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffff0e]/0 to-[#ffff0e]/0 group-hover:from-[#ffff0e]/5 group-hover:to-transparent transition-all" />

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#ffff0e]/10 group-hover:border-[#ffff0e]/30 transition-all" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-1 bg-[#ffff0e]" />
                    <span className="text-[#ffff0e] text-xs font-bold uppercase tracking-wider font-mono">{post.category}</span>
                    <div className="h-[1px] flex-1 bg-[#ffff0e]/20" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ffff0e] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wider font-mono">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#ffff0e]/10">
                    <button className="text-[#ffff0e] text-sm font-bold uppercase tracking-wider hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      READ MORE
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-morphism border-t border-[#ffff0e]/20 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#ffff0e] relative">
                  <div className="absolute inset-1 border border-black/30" />
                </div>
                <span className="text-xl font-bold text-[#ffff0e] yellow-text-glow tracking-wider">DEVLOG</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Industrial engineering insights and technical documentation for the modern age.
              </p>
              <div className="flex items-center gap-2 text-[#ffff0e]/60 text-xs font-mono">
                <div className="w-2 h-2 border border-[#ffff0e]/60" />
                <span>ONLINE</span>
              </div>
            </div>
            <div>
              <h4 className="text-[#ffff0e] font-bold mb-4 uppercase tracking-wider text-sm">CATEGORIES</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  Materials
                </a></li>
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  Software
                </a></li>
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  Manufacturing
                </a></li>
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  Design
                </a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#ffff0e] font-bold mb-4 uppercase tracking-wider text-sm">RESOURCES</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  Documentation
                </a></li>
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  Code Samples
                </a></li>
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  Tutorials
                </a></li>
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  API Reference
                </a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#ffff0e] font-bold mb-4 uppercase tracking-wider text-sm">CONNECT</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  GitHub
                </a></li>
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  Twitter
                </a></li>
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  LinkedIn
                </a></li>
                <li><a href="#" className="hover:text-[#ffff0e] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-600" />
                  Email
                </a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#ffff0e]/10 flex items-center justify-between">
            <p className="text-gray-500 text-sm font-mono">2025 DEVLOG. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#ffff0e] transition-colors">PRIVACY POLICY</a>
              <span className="text-[#ffff0e]/20">/</span>
              <a href="#" className="hover:text-[#ffff0e] transition-colors">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
