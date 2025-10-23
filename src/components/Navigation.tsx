"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import AuthModal from "./AuthModal";

interface NavigationProps {
  currentPage?: "home" | "projects" | "articles" | "about";
}

export default function Navigation({ currentPage = "home" }: NavigationProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems, openCart } = useCart();

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      <nav className="glass-morphism fixed top-0 left-0 right-0 z-50 border-b border-[#ffff0e]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#ffff0e] relative">
                  <div className="absolute inset-1 border border-black/30" />
                </div>
                <span className="text-xl font-bold text-[#ffff0e] yellow-text-glow tracking-wider">
                  DEVLOG
                </span>
              </Link>
              <div className="ml-4 text-[#ffff0e]/40 text-xs font-mono">v2.5.1</div>
            </div>
            <div className="flex gap-8 items-center">
              <Link
                href="/"
                className={`text-sm transition-colors uppercase tracking-wider relative group ${currentPage === "home" ? "text-[#ffff0e]" : "text-gray-400 hover:text-[#ffff0e]"
                  }`}
              >
                HOME
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#ffff0e] transition-all ${currentPage === "home" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
              <Link
                href="/articles"
                className={`text-sm transition-colors uppercase tracking-wider relative group ${currentPage === "articles" ? "text-[#ffff0e]" : "text-gray-400 hover:text-[#ffff0e]"
                  }`}
              >
                ARTICLES
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#ffff0e] transition-all ${currentPage === "articles" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
              <Link
                href="/projects"
                className={`text-sm transition-colors uppercase tracking-wider relative group ${currentPage === "projects" ? "text-[#ffff0e]" : "text-gray-400 hover:text-[#ffff0e]"
                  }`}
              >
                PROJECTS
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#ffff0e] transition-all ${currentPage === "projects" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
              <Link
                href="/about"
                className={`text-sm transition-colors uppercase tracking-wider relative group ${currentPage === "about" ? "text-[#ffff0e]" : "text-gray-400 hover:text-[#ffff0e]"
                  }`}
              >
                ABOUT
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#ffff0e] transition-all ${currentPage === "about" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>

              {/* User Menu or Login Button */}
              {isAuthenticated && user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-4 py-2 glass-card hover:border-[#ffff0e]/30 transition-all"
                  >
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="w-6 h-6 rounded-full border border-[#ffff0e]/30"
                    />
                    <span className="text-[#ffff0e] font-bold text-sm font-mono">
                      {user.username}
                    </span>
                  </button>

                  {/* Dropdown Menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 glass-card border-[#ffff0e]/30 overflow-hidden">
                      <Link
                        href="/orders"
                        className="block px-4 py-3 text-sm text-gray-400 hover:text-[#ffff0e] hover:bg-[#1a1a1a]/60 transition-all"
                        onClick={() => setShowUserMenu(false)}
                      >
                        我的订单
                      </Link>
                      <Link
                        href="/profile"
                        className="block px-4 py-3 text-sm text-gray-400 hover:text-[#ffff0e] hover:bg-[#1a1a1a]/60 transition-all"
                        onClick={() => setShowUserMenu(false)}
                      >
                        个人资料
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-sm text-gray-400 hover:text-red-500 hover:bg-[#1a1a1a]/60 transition-all border-t border-[#ffff0e]/10"
                      >
                        退出登录
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="px-6 py-2 glass-card text-[#ffff0e] font-bold uppercase text-sm hover:bg-[#1a1a1a]/60 transition-all"
                >
                  登录
                </button>
              )}

              {/* Cart Button */}
              <button
                onClick={openCart}
                className="px-6 py-2 bg-[#ffff0e] text-black font-bold uppercase text-sm hover:bg-[#ffff0e]/90 transition-all yellow-glow relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-black/10 translate-x-full group-hover:translate-x-0 transition-transform" />
                <span className="relative">
                  CART {totalItems > 0 && `(${totalItems})`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
