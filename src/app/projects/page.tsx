"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showNewDesignModal, setShowNewDesignModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "工业风格徽章套装",
      category: "BADGES",
      designer: "USER_7734",
      currentOrders: 47,
      minOrders: 50,
      price: "¥45",
      endDate: "2025-10-25",
      image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=400&fit=crop",
      status: "ACTIVE"
    },
    {
      id: 2,
      title: "碳纤维纹理贴纸包",
      category: "STICKERS",
      designer: "USER_3391",
      currentOrders: 89,
      minOrders: 100,
      price: "¥28",
      endDate: "2025-10-28",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop",
      status: "ACTIVE"
    },
    {
      id: 3,
      title: "机能风格手机壳",
      category: "ACCESSORIES",
      designer: "USER_5512",
      currentOrders: 156,
      minOrders: 100,
      price: "¥89",
      endDate: "2025-10-20",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
      status: "FUNDED"
    },
    {
      id: 4,
      title: "金属键帽套组",
      category: "KEYCAPS",
      designer: "USER_9182",
      currentOrders: 23,
      minOrders: 50,
      price: "¥268",
      endDate: "2025-11-05",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
      status: "ACTIVE"
    },
    {
      id: 5,
      title: "工业格栅帆布包",
      category: "BAGS",
      designer: "USER_4429",
      currentOrders: 67,
      minOrders: 80,
      price: "¥156",
      endDate: "2025-10-30",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      status: "ACTIVE"
    },
    {
      id: 6,
      title: "霓虹黄色主题T恤",
      category: "APPAREL",
      designer: "USER_8821",
      currentOrders: 12,
      minOrders: 30,
      price: "¥128",
      endDate: "2025-11-10",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      status: "ACTIVE"
    }
  ];

  const categories = ["ALL", "BADGES", "STICKERS", "ACCESSORIES", "KEYCAPS", "BAGS", "APPAREL"];

  const filteredProjects = selectedCategory === "ALL"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
      <nav className="glass-morphism fixed top-0 left-0 right-0 z-50 border-b border-[#ffff0e]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#ffff0e] relative">
                  <div className="absolute inset-1 border border-black/30" />
                </div>
                <span className="text-xl font-bold text-[#ffff0e] yellow-text-glow tracking-wider">DEVLOG</span>
              </Link>
              <div className="ml-4 text-[#ffff0e]/40 text-xs font-mono">v2.5.1</div>
            </div>
            <div className="flex gap-8 items-center">
              <Link href="/" className="text-sm text-gray-400 hover:text-[#ffff0e] transition-colors uppercase tracking-wider relative group">
                HOME
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ffff0e] group-hover:w-full transition-all" />
              </Link>
              <a href="#" className="text-sm text-gray-400 hover:text-[#ffff0e] transition-colors uppercase tracking-wider relative group">
                ARTICLES
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ffff0e] group-hover:w-full transition-all" />
              </a>
              <Link href="/projects" className="text-sm text-[#ffff0e] transition-colors uppercase tracking-wider relative group">
                PROJECTS
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#ffff0e]" />
              </Link>
              <a href="#" className="text-sm text-gray-400 hover:text-[#ffff0e] transition-colors uppercase tracking-wider relative group">
                ABOUT
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ffff0e] group-hover:w-full transition-all" />
              </a>
              <button className="px-6 py-2 bg-[#ffff0e] text-black font-bold uppercase text-sm hover:bg-[#ffff0e]/90 transition-all yellow-glow relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 translate-x-full group-hover:translate-x-0 transition-transform" />
                <span className="relative">CONTACT</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 contour-lines opacity-20" />
        <div className="absolute top-40 left-20 w-2 h-32 bg-[#ffff0e]/20" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#ffff0e]" />
              <span className="text-[#ffff0e] text-sm uppercase tracking-widest font-mono">同好拼车 / GROUP ORDERS</span>
              <div className="h-[2px] flex-1 bg-[#ffff0e]/10" />
            </div>
            <h1 className="text-6xl font-bold text-white leading-tight tracking-tight">
              周边设计<br />
              <span className="text-[#ffff0e] yellow-text-glow">拼车项目</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              集体订购周边商品，达成最小订单量即可生产。支持现有设计或提交新设计方案。
            </p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setShowNewDesignModal(true)}
                className="px-8 py-4 bg-[#ffff0e] text-black font-bold uppercase tracking-wider hover:bg-[#ffff0e]/90 transition-all yellow-glow relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative">提交新设计</span>
              </button>
              <div className="px-8 py-4 glass-card text-[#ffff0e] font-bold uppercase tracking-wider flex items-center gap-3">
                <div className="w-2 h-2 bg-[#ffff0e] animate-pulse" />
                <span>{projects.filter(p => p.status === "ACTIVE").length} 个活跃项目</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 font-bold uppercase text-sm tracking-wider transition-all whitespace-nowrap ${selectedCategory === cat
                  ? "bg-[#ffff0e] text-black yellow-glow"
                  : "glass-card text-gray-400 hover:text-[#ffff0e] hover:border-[#ffff0e]/30"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const progress = (project.currentOrders / project.minOrders) * 100;
              const isFunded = project.status === "FUNDED";

              return (
                <Link href={`/projects/${project.id}`} key={project.id} className="glass-card p-0 group hover:border-[#ffff0e]/30 transition-all cursor-pointer relative overflow-hidden block">
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
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ffff0e] transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 font-mono">
                      <span>BY</span>
                      <span className="text-[#ffff0e]">{project.designer}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-2 font-mono">
                        <span>{project.currentOrders} / {project.minOrders} 订单</span>
                        <span>{Math.min(100, Math.round(progress))}%</span>
                      </div>
                      <div className="h-2 bg-[#1a1a1a] border border-[#ffff0e]/20 relative overflow-hidden">
                        <div
                          className="h-full bg-[#ffff0e] transition-all duration-500"
                          style={{ width: `${Math.min(100, progress)}%` }}
                        />
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">价格</div>
                        <div className="text-[#ffff0e] font-bold font-mono">{project.price}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">截止日期</div>
                        <div className="text-white font-mono text-xs">{project.endDate}</div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="w-full py-3 bg-[#ffff0e]/10 border border-[#ffff0e]/30 text-[#ffff0e] font-bold uppercase text-sm tracking-wider hover:bg-[#ffff0e] hover:text-black transition-all relative overflow-hidden group/btn">
                      <div className="absolute inset-0 bg-[#ffff0e] translate-y-full group-hover/btn:translate-y-0 transition-transform" />
                      <span className="relative">立即参与</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* New Design Modal */}
      {showNewDesignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="glass-card max-w-2xl w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowNewDesignModal(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#ffff0e] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#ffff0e]" />
              <h2 className="text-2xl font-bold text-[#ffff0e] uppercase tracking-wider">提交新设计</h2>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  设计名称
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors"
                  placeholder="输入设计名称..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  分类
                </label>
                <select className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors">
                  <option>BADGES</option>
                  <option>STICKERS</option>
                  <option>ACCESSORIES</option>
                  <option>KEYCAPS</option>
                  <option>BAGS</option>
                  <option>APPAREL</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  设计描述
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors resize-none"
                  placeholder="详细描述您的设计想法..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    目标价格 (¥)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    最小订单量
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  上传设计图
                </label>
                <div className="border-2 border-dashed border-[#ffff0e]/20 p-8 text-center hover:border-[#ffff0e]/40 transition-colors cursor-pointer">
                  <div className="text-gray-400 mb-2">点击或拖拽上传</div>
                  <div className="text-xs text-gray-600 font-mono">支持 JPG, PNG, SVG</div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-4 bg-[#ffff0e] text-black font-bold uppercase tracking-wider hover:bg-[#ffff0e]/90 transition-all yellow-glow"
                >
                  提交设计
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewDesignModal(false)}
                  className="flex-1 py-4 glass-card text-gray-400 font-bold uppercase tracking-wider hover:text-[#ffff0e] hover:border-[#ffff0e]/30 transition-all"
                >
                  取消
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
