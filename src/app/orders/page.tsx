"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";

interface Order {
  id: string;
  items: Array<{
    id: number;
    title: string;
    image: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: "PENDING" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  orderDate: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
}

export default function OrdersPage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
      return;
    }

    // Load orders from localStorage
    const storedOrders = localStorage.getItem(`orders_${user?.id}`) || "[]";
    setOrders(JSON.parse(storedOrders));
  }, [isAuthenticated, user, router]);

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "PENDING":
        return "text-yellow-500 border-yellow-500/30 bg-yellow-500/10";
      case "PROCESSING":
        return "text-blue-500 border-blue-500/30 bg-blue-500/10";
      case "SHIPPED":
        return "text-purple-500 border-purple-500/30 bg-purple-500/10";
      case "DELIVERED":
        return "text-green-500 border-green-500/30 bg-green-500/10";
      case "CANCELLED":
        return "text-red-500 border-red-500/30 bg-red-500/10";
      default:
        return "text-gray-500 border-gray-500/30 bg-gray-500/10";
    }
  };

  const getStatusText = (status: Order["status"]) => {
    const statusMap = {
      PENDING: "待确认",
      PROCESSING: "处理中",
      SHIPPED: "已发货",
      DELIVERED: "已送达",
      CANCELLED: "已取消",
    };
    return statusMap[status];
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen relative carbon-texture">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="fixed inset-0 diamond-pattern opacity-30 pointer-events-none" />

      {/* Corner Decorations */}
      <div className="fixed top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#ffff0e]/30 pointer-events-none" />
      <div className="fixed top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#ffff0e]/30 pointer-events-none" />

      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 contour-lines opacity-20" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#ffff0e]" />
              <span className="text-[#ffff0e] text-sm uppercase tracking-widest font-mono">
                ORDER TRACKING
              </span>
              <div className="h-[2px] flex-1 bg-[#ffff0e]/10" />
            </div>
            <h1 className="text-6xl font-bold text-white leading-tight tracking-tight">
              我的<span className="text-[#ffff0e] yellow-text-glow">订单</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              查看并追踪您的所有订单状态
            </p>
          </div>
        </div>
      </section>

      {/* Orders List */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {orders.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 border-2 border-[#ffff0e]/20 diamond-pattern" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">暂无订单</h3>
              <p className="text-gray-400 mb-6">您还没有下过订单，去看看有什么喜欢的吧</p>
              <Link href="/projects">
                <button className="px-8 py-4 bg-[#ffff0e] text-black font-bold uppercase tracking-wider hover:bg-[#ffff0e]/90 transition-all yellow-glow">
                  浏览项目
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="glass-card p-6 hover:border-[#ffff0e]/30 transition-all">
                  {/* Order Header */}
                  <div className="flex items-start justify-between mb-6 pb-6 border-b border-[#ffff0e]/10">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white font-mono">订单 #{order.id}</h3>
                        <div className={`px-3 py-1 border text-xs font-bold uppercase ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
                        <span>下单时间: {new Date(order.orderDate).toLocaleDateString("zh-CN")}</span>
                        {order.estimatedDelivery && (
                          <>
                            <span>•</span>
                            <span>预计送达: {new Date(order.estimatedDelivery).toLocaleDateString("zh-CN")}</span>
                          </>
                        )}
                      </div>
                      {order.trackingNumber && (
                        <div className="mt-2 text-sm text-[#ffff0e] font-mono">
                          物流单号: {order.trackingNumber}
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">总计</div>
                      <div className="text-2xl font-bold text-[#ffff0e] font-mono">¥{order.total}</div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 bg-[#1a1a1a]/30 border border-[#ffff0e]/5">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                        <div className="flex-1">
                          <h4 className="text-white font-bold mb-1">{item.title}</h4>
                          <div className="text-sm text-gray-500 font-mono">数量: {item.quantity}</div>
                        </div>
                        <div className="text-[#ffff0e] font-bold font-mono">¥{item.price * item.quantity}</div>
                      </div>
                    ))}
                  </div>

                  {/* Order Actions */}
                  <div className="flex gap-3 mt-6 pt-6 border-t border-[#ffff0e]/10">
                    {order.status === "SHIPPED" && (
                      <button className="px-6 py-3 glass-card text-[#ffff0e] font-bold uppercase text-sm tracking-wider hover:bg-[#1a1a1a]/60 transition-all">
                        查看物流
                      </button>
                    )}
                    {order.status === "DELIVERED" && (
                      <button className="px-6 py-3 glass-card text-[#ffff0e] font-bold uppercase text-sm tracking-wider hover:bg-[#1a1a1a]/60 transition-all">
                        再次购买
                      </button>
                    )}
                    {order.status === "PENDING" && (
                      <button className="px-6 py-3 glass-card text-red-500 font-bold uppercase text-sm tracking-wider hover:bg-[#1a1a1a]/60 transition-all">
                        取消订单
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
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
