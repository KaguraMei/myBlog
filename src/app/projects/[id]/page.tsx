"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Mock data - in real app this would come from API
  const project = {
    id: params.id,
    title: "工业风格徽章套装",
    category: "BADGES",
    designer: {
      id: "7734",
      name: "USER_7734",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
    },
    currentOrders: 47,
    minOrders: 50,
    price: 45,
    endDate: "2025-10-25",
    images: [
      "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1608889335818-3e9babd5a35b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1608889476518-738c9b1c2f1b?w=800&h=800&fit=crop"
    ],
    status: "ACTIVE",
    description: "精心设计的工业风格徽章套装，包含6枚不同设计的金属徽章。采用高品质锌合金材料，表面经过阳极氧化处理，确保长期使用不褪色。每枚徽章都融入了机能美学元素，完美搭配工业风格服饰和背包。",
    specifications: {
      material: "锌合金 + 珐琅",
      size: "直径 25mm",
      thickness: "2.5mm",
      quantity: "6枚/套",
      packaging: "精美铁盒包装",
      backing: "蝴蝶扣 + 别针双用"
    },
    features: [
      "采用高精度冲压工艺，细节清晰",
      "表面阳极氧化处理，防刮耐磨",
      "亮黄色珐琅填充，色彩鲜艳持久",
      "工业网格纹理设计，机能感十足",
      "双重固定方式，适用多种场景",
      "环保材料制作，通过质量检测"
    ]
  };

  const progress = (project.currentOrders / project.minOrders) * 100;
  const remaining = project.minOrders - project.currentOrders;

  const comments = [
    {
      id: 1,
      user: "USER_2341",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content: "设计很棒！已经参与了，期待收货",
      timestamp: "2小时前"
    },
    {
      id: 2,
      user: "USER_8821",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
      content: "材质看起来很不错，能提供实物图吗？",
      timestamp: "5小时前"
    },
    {
      id: 3,
      user: "USER_5512",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content: "黄色真的很亮眼，和我的包包很配",
      timestamp: "1天前"
    }
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
              <Link href="#" className="text-sm text-gray-400 hover:text-[#ffff0e] transition-colors uppercase tracking-wider relative group">
                ARTICLES
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ffff0e] group-hover:w-full transition-all" />
              </Link>
              <Link href="/projects" className="text-sm text-[#ffff0e] transition-colors uppercase tracking-wider relative group">
                PROJECTS
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#ffff0e]" />
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-[#ffff0e] transition-colors uppercase tracking-wider relative group">
                ABOUT
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ffff0e] group-hover:w-full transition-all" />
              </Link>
              <button className="px-6 py-2 bg-[#ffff0e] text-black font-bold uppercase text-sm hover:bg-[#ffff0e]/90 transition-all yellow-glow relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 translate-x-full group-hover:translate-x-0 transition-transform" />
                <span className="relative">CART (0)</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <section className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
            <Link href="/" className="hover:text-[#ffff0e] transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-[#ffff0e] transition-colors">PROJECTS</Link>
            <span>/</span>
            <span className="text-[#ffff0e]">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="glass-card p-4 relative group">
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#ffff0e]/10 group-hover:border-[#ffff0e]/30 transition-all" />
                <img
                  src={project.images[activeImage]}
                  alt={project.title}
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`glass-card p-2 transition-all ${activeImage === idx
                      ? "border-[#ffff0e] ring-2 ring-[#ffff0e]/50"
                      : "hover:border-[#ffff0e]/30"
                      }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full aspect-square object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-1 bg-[#ffff0e]" />
                  <span className="text-[#ffff0e] text-xs font-bold uppercase tracking-wider font-mono">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>

                {/* Designer Info */}
                <Link href={`/designer/${project.designer.id}`} className="flex items-center gap-3 p-3 glass-card hover:border-[#ffff0e]/30 transition-all group">
                  <img
                    src={project.designer.avatar}
                    alt={project.designer.name}
                    className="w-10 h-10 rounded-full border-2 border-[#ffff0e]/30"
                  />
                  <div>
                    <div className="text-xs text-gray-500 uppercase">DESIGNER</div>
                    <div className="text-[#ffff0e] font-bold font-mono group-hover:underline">
                      {project.designer.name}
                    </div>
                  </div>
                </Link>
              </div>

              {/* Price */}
              <div className="glass-card p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-[#ffff0e] font-mono">¥{project.price}</span>
                  <span className="text-gray-500 text-sm">/ 套</span>
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  满 {project.minOrders} 件起订
                </div>
              </div>

              {/* Progress */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-2xl font-bold text-white font-mono">
                      {project.currentOrders} <span className="text-gray-500 text-base">/ {project.minOrders}</span>
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">当前订单</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#ffff0e] font-mono">
                      {remaining}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">还差</div>
                  </div>
                </div>
                <div className="h-3 bg-[#1a1a1a] border border-[#ffff0e]/20 relative overflow-hidden mb-3">
                  <div
                    className="h-full bg-[#ffff0e] transition-all duration-500"
                    style={{ width: `${Math.min(100, progress)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>{Math.round(progress)}% 完成</span>
                  <span>截止: {project.endDate}</span>
                </div>
              </div>

              {/* Order Form */}
              <div className="glass-card p-6 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    数量
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 glass-card hover:bg-[#1a1a1a]/60 transition-all flex items-center justify-center text-[#ffff0e] font-bold text-xl"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 h-12 px-4 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white text-center font-mono font-bold text-xl focus:border-[#ffff0e] focus:outline-none transition-colors"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 glass-card hover:bg-[#1a1a1a]/60 transition-all flex items-center justify-center text-[#ffff0e] font-bold text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-4 bg-[#ffff0e] text-black font-bold uppercase tracking-wider hover:bg-[#ffff0e]/90 transition-all yellow-glow relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative">立即参与 ¥{project.price * quantity}</span>
                  </button>
                  <button className="px-6 py-4 glass-card text-[#ffff0e] font-bold uppercase tracking-wider hover:bg-[#1a1a1a]/60 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-12 space-y-6">
            {/* Description */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-[#ffff0e]" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">产品描述</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">{project.description}</p>
            </div>

            {/* Specifications */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-[#ffff0e]" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">规格参数</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-[#1a1a1a]/50 border border-[#ffff0e]/10">
                    <span className="text-gray-500 uppercase text-sm tracking-wider">
                      {key === 'material' && '材质'}
                      {key === 'size' && '尺寸'}
                      {key === 'thickness' && '厚度'}
                      {key === 'quantity' && '数量'}
                      {key === 'packaging' && '包装'}
                      {key === 'backing' && '背扣'}
                    </span>
                    <span className="text-white font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-[#ffff0e]" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">产品特色</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-[#ffff0e] text-black font-bold text-xs font-mono flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-[#ffff0e]" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">用户评论</h2>
                <div className="flex items-center gap-2 text-[#ffff0e]/60 text-sm font-mono ml-auto">
                  <div className="w-2 h-2 bg-[#ffff0e] animate-pulse" />
                  <span>{comments.length} 条评论</span>
                </div>
              </div>

              {/* Comment Form */}
              <div className="mb-8 p-6 bg-[#1a1a1a]/50 border border-[#ffff0e]/10">
                <textarea
                  rows={3}
                  placeholder="发表你的看法..."
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors resize-none mb-3"
                />
                <button className="px-6 py-3 bg-[#ffff0e] text-black font-bold uppercase text-sm tracking-wider hover:bg-[#ffff0e]/90 transition-all">
                  发送评论
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4 p-4 bg-[#1a1a1a]/30 border border-[#ffff0e]/5 hover:border-[#ffff0e]/10 transition-all">
                    <img
                      src={comment.avatar}
                      alt={comment.user}
                      className="w-12 h-12 rounded-full border-2 border-[#ffff0e]/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#ffff0e] font-bold font-mono">{comment.user}</span>
                        <span className="text-gray-600 text-xs font-mono">{comment.timestamp}</span>
                      </div>
                      <p className="text-gray-400">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-morphism border-t border-[#ffff0e]/20 px-6 py-12 mt-20">
        <div className="max-w-7xl mx-auto">
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
