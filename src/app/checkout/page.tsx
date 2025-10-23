"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import Navigation from "@/components/Navigation";

export default function CheckoutPage() {
  const { isAuthenticated, user } = useAuth();
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
      return;
    }

    if (items.length === 0) {
      router.push("/projects");
      return;
    }
  }, [isAuthenticated, items, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Create order
    const order = {
      id: `ORD${Date.now()}`,
      items: items,
      total: totalPrice,
      status: "PENDING" as const,
      orderDate: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      shippingInfo: formData,
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem(`orders_${user?.id}`) || "[]");
    existingOrders.push(order);
    localStorage.setItem(`orders_${user?.id}`, JSON.stringify(existingOrders));

    // Clear cart
    clearCart();

    // Redirect to orders page
    router.push("/orders");
  };

  if (!isAuthenticated || items.length === 0) {
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
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#ffff0e]" />
              <span className="text-[#ffff0e] text-sm uppercase tracking-widest font-mono">
                CHECKOUT
              </span>
              <div className="h-[2px] flex-1 bg-[#ffff0e]/10" />
            </div>
            <h1 className="text-6xl font-bold text-white leading-tight tracking-tight">
              确认<span className="text-[#ffff0e] yellow-text-glow">订单</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {/* Left - Form */}
            <div className="col-span-2 space-y-6">
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-12 bg-[#ffff0e]" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wider">配送信息</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                        姓名
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                        电话
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                      详细地址
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                        城市
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                        邮编
                      </label>
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                      备注
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors resize-none"
                      placeholder="选填..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#ffff0e] text-black font-bold uppercase tracking-wider hover:bg-[#ffff0e]/90 transition-all yellow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "处理中..." : `确认订单 - ¥${totalPrice}`}
                  </button>
                </form>
              </div>
            </div>

            {/* Right - Order Summary */}
            <div className="space-y-6">
              <div className="glass-card p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-8 bg-[#ffff0e]" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">订单摘要</h3>
                </div>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 p-3 bg-[#1a1a1a]/30 border border-[#ffff0e]/5">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-bold mb-1">{item.title}</h4>
                        <div className="text-xs text-gray-500 font-mono">x{item.quantity}</div>
                      </div>
                      <div className="text-[#ffff0e] font-bold font-mono text-sm">
                        ¥{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-[#ffff0e]/10">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>商品总计</span>
                    <span className="font-mono">¥{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>运费</span>
                    <span className="font-mono text-[#ffff0e]">免费</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-3 border-t border-[#ffff0e]/10">
                    <span className="text-white">总计</span>
                    <span className="text-[#ffff0e] font-mono">¥{totalPrice}</span>
                  </div>
                </div>
              </div>
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
