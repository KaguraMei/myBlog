"use client";

import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isCartOpen, closeCart, clearCart } = useCart();
  const { isAuthenticated } = useAuth();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-[#ffff0e]/20 z-50 flex flex-col">
        {/* Header */}
        <div className="glass-morphism border-b border-[#ffff0e]/20 p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#ffff0e]" />
              <h2 className="text-xl font-bold text-[#ffff0e] uppercase tracking-wider">购物车</h2>
            </div>
            <button
              onClick={closeCart}
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#ffff0e] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
            <div className="w-2 h-2 border border-[#ffff0e]/60" />
            <span>{totalItems} 件商品</span>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 mb-4 relative">
                <div className="absolute inset-0 border-2 border-[#ffff0e]/20 diamond-pattern" />
              </div>
              <p className="text-gray-500 mb-2">购物车空空如也</p>
              <p className="text-sm text-gray-600">去看看有什么好东西吧</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="glass-card p-4 relative group hover:border-[#ffff0e]/30 transition-all"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-1 h-1 bg-[#ffff0e] mt-2" />
                      <span className="text-[#ffff0e] text-xs font-bold uppercase tracking-wider font-mono">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-white font-bold mb-2 text-sm">{item.title}</h3>
                    <div className="text-xs text-gray-500 font-mono mb-2">BY {item.designer}</div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 glass-card hover:bg-[#1a1a1a]/60 transition-all flex items-center justify-center text-[#ffff0e] text-sm font-bold"
                      >
                        -
                      </button>
                      <span className="text-white font-mono text-sm w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 glass-card hover:bg-[#1a1a1a]/60 transition-all flex items-center justify-center text-[#ffff0e] text-sm font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price & Remove */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="text-[#ffff0e] font-bold font-mono">
                      ¥{item.price * item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="glass-morphism border-t border-[#ffff0e]/20 p-6 space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-400 font-mono">
              <span>小计</span>
              <span>¥{totalPrice}</span>
            </div>
            <div className="flex items-center justify-between text-lg font-bold">
              <span className="text-white uppercase tracking-wider">总计</span>
              <span className="text-[#ffff0e] font-mono">¥{totalPrice}</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={clearCart}
                className="px-4 py-3 glass-card text-gray-400 font-bold uppercase text-sm tracking-wider hover:text-red-500 hover:border-red-500/30 transition-all"
              >
                清空
              </button>
              {isAuthenticated ? (
                <Link href="/checkout" className="flex-1" onClick={closeCart}>
                  <button className="w-full py-3 bg-[#ffff0e] text-black font-bold uppercase tracking-wider hover:bg-[#ffff0e]/90 transition-all yellow-glow">
                    结算订单
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    closeCart();
                    // This will trigger the auth modal from the navigation
                  }}
                  className="flex-1 py-3 bg-[#ffff0e] text-black font-bold uppercase tracking-wider hover:bg-[#ffff0e]/90 transition-all yellow-glow"
                >
                  登录后结算
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
