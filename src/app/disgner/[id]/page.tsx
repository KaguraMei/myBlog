"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function DesignerPage() {
  const params = useParams();
  const designerId = params.id;

  // Mock designer data
  const designer = {
    id: designerId,
    name: `USER_${designerId}`,
    avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop`,
    bio: "专注于工业风格和机能美学的独立设计师。擅长融合现代科技元素与传统工艺，创造独特的视觉体验。",
    joinDate: "2024-01-15",
    stats: {
      designs: 12,
      totalOrders: 847,
      followers: 234,
      rating: 4.8,
    },
    socials: {
      instagram: "@designer_7734",
      twitter: "@designer_7734",
      website: "designer7734.com",
    },
  };

  const projects = [
    {
      id: 1,
      title: "工业风格徽章套装",
      category: "BADGES",
      currentOrders: 47,
      minOrders: 50,
      price: 45,
      image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=400&fit=crop",
      status: "ACTIVE",
    },
    {
      id: 2,
      title: "机械齿轮钥匙扣",
      category: "ACCESSORIES",
      currentOrders: 89,
      minOrders: 100,
      price: 68,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      status: "ACTIVE",
    },
    {
      id: 3,
      title: "霓虹黄网格贴纸",
      category: "STICKERS",
      currentOrders: 156,
      minOrders: 100,
      price: 28,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop",
      status: "FUNDED",
    },
    {
      id: 4,
      title: "工业格栅手机壳",
      category: "ACCESSORIES",
      currentOrders: 67,
      minOrders: 80,
      price: 89,
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
      status: "ACTIVE",
    },
  ];

  return (
    <div className="min-h-screen relative carbon-texture">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="fixed inset-0 diamond-pattern opacity-30 pointer-events-none" />

      {/* Corner Decorations */}
      <div className="fixed top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#ffff0e]/30 pointer-events-none" />
      <div className="fixed top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#ffff0e]/30 pointer-events-none" />

      {/* Navigation */}
      <Navigation currentPage="projects" />

      {/* Breadcrumb */}
      <section className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
            <Link href="/" className="hover:text-[#ffff0e] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-[#ffff0e] transition-colors">
              PROJECTS
            </Link>
            <span>/</span>
            <span className="text-[#ffff0e]">{designer.name}</span>
          </div>
        </div>
      </section>

      {/* Designer Profile */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 mb-12">
            <div className="flex gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 relative">
                  <img
                    src={designer.avatar}
                    alt={designer.name}
                    className="w-full h-full object-cover rounded-full border-4 border-[#ffff0e]/30"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#ffff0e] flex items-center justify-center text-black font-bold text-xs">
                    ✓
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-[#ffff0e] font-mono">
                        {designer.name}
                      </h1>
                      <div className="px-3 py-1 bg-[#ffff0e]/10 border border-[#ffff0e]/30 text-[#ffff0e] text-xs font-bold uppercase">
                        VERIFIED
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed max-w-2xl">{designer.bio}</p>
                  </div>

                  <button className="px-6 py-3 bg-[#ffff0e] text-black font-bold uppercase text-sm tracking-wider hover:bg-[#ffff0e]/90 transition-all yellow-glow">
                    关注设计师
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-6 mt-6">
                  <div className="p-4 bg-[#1a1a1a]/50 border border-[#ffff0e]/10">
                    <div className="text-2xl font-bold text-[#ffff0e] font-mono mb-1">
                      {designer.stats.designs}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">设计作品</div>
                  </div>
                  <div className="p-4 bg-[#1a1a1a]/50 border border-[#ffff0e]/10">
                    <div className="text-2xl font-bold text-[#ffff0e] font-mono mb-1">
                      {designer.stats.totalOrders}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">总订单数</div>
                  </div>
                  <div className="p-4 bg-[#1a1a1a]/50 border border-[#ffff0e]/10">
                    <div className="text-2xl font-bold text-[#ffff0e] font-mono mb-1">
                      {designer.stats.followers}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">关注者</div>
                  </div>
                  <div className="p-4 bg-[#1a1a1a]/50 border border-[#ffff0e]/10">
                    <div className="text-2xl font-bold text-[#ffff0e] font-mono mb-1">
                      {designer.stats.rating}★
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">评分</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6 mt-6 pt-6 border-t border-[#ffff0e]/10">
                  <div className="text-sm text-gray-500 uppercase tracking-wider">联系方式:</div>
                  <a
                    href={`https://instagram.com/${designer.socials.instagram.replace("@", "")}`}
                    className="text-sm text-gray-400 hover:text-[#ffff0e] transition-colors flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-gray-600" />
                    {designer.socials.instagram}
                  </a>
                  <a
                    href={`https://twitter.com/${designer.socials.twitter.replace("@", "")}`}
                    className="text-sm text-gray-400 hover:text-[#ffff0e] transition-colors flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-gray-600" />
                    {designer.socials.twitter}
                  </a>
                  <a
                    href={`https://${designer.socials.website}`}
                    className="text-sm text-gray-400 hover:text-[#ffff0e] transition-colors flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-gray-600" />
                    {designer.socials.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Designer's Projects */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-[#ffff0e]" />
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">设计作品</h2>
              <div className="flex items-center gap-2 text-[#ffff0e]/60 text-sm font-mono">
                <div className="w-2 h-2 bg-[#ffff0e] animate-pulse" />
                <span>{projects.length} 个项目</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {projects.map((project) => {
                const progress = (project.currentOrders / project.minOrders) * 100;
                const isFunded = project.status === "FUNDED";

                return (
                  <Link key={project.id} href={`/projects/${project.id}`}>
                    <div className="glass-card p-0 group hover:border-[#ffff0e]/30 transition-all cursor-pointer relative overflow-hidden">
                      {/* Status Badge */}
                      {isFunded && (
                        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-[#ffff0e] text-black text-xs font-bold uppercase tracking-wider">
                          已达标
                        </div>
                      )}

                      {/* Corner Decoration */}
                      <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#ffff0e]/10 group-hover:border-[#ffff0e]/30 transition-all z-10" />

                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Category Tag */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          <div className="w-1 h-1 bg-[#ffff0e]" />
                          <span className="text-[#ffff0e] text-xs font-bold uppercase tracking-wider font-mono">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ffff0e] transition-colors">
                          {project.title}
                        </h3>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-xs text-gray-400 mb-2 font-mono">
                            <span>
                              {project.currentOrders} / {project.minOrders} 订单
                            </span>
                            <span>{Math.min(100, Math.round(progress))}%</span>
                          </div>
                          <div className="h-2 bg-[#1a1a1a] border border-[#ffff0e]/20 relative overflow-hidden">
                            <div
                              className="h-full bg-[#ffff0e] transition-all duration-500"
                              style={{ width: `${Math.min(100, progress)}%` }}
                            />
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-[#ffff0e] font-bold font-mono text-lg">¥{project.price}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-morphism border-t border-[#ffff0e]/20 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="pt-8 border-t border-[#ffff0e]/10 flex items-center justify-between">
            <p className="text-gray-500 text-sm font-mono">2025 DEVLOG. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#ffff0e] transition-colors">
                PRIVACY POLICY
              </a>
              <span className="text-[#ffff0e]/20">/</span>
              <a href="#" className="hover:text-[#ffff0e] transition-colors">
                TERMS OF SERVICE
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
