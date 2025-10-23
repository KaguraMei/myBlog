"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login, register } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      let success = false;
      if (mode === "login") {
        success = await login(formData.email, formData.password);
        if (!success) {
          setError("邮箱或密码错误");
        }
      } else {
        if (!formData.username) {
          setError("请输入用户名");
          return;
        }
        success = await register(formData.username, formData.email, formData.password);
        if (!success) {
          setError("该邮箱已被注册");
        }
      }

      if (success) {
        setFormData({ username: "", email: "", password: "" });
        onClose();
      }
    } catch (err) {
      setError("发生错误，请重试");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
      <div className="glass-card max-w-md w-full p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#ffff0e] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[2px] w-12 bg-[#ffff0e]" />
          <h2 className="text-2xl font-bold text-[#ffff0e] uppercase tracking-wider">
            {mode === "login" ? "登录" : "注册"}
          </h2>
        </div>

        {/* Mode Toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => {
              setMode("login");
              setError("");
            }}
            className={`flex-1 py-3 font-bold uppercase text-sm tracking-wider transition-all ${mode === "login"
                ? "bg-[#ffff0e] text-black"
                : "glass-card text-gray-400 hover:text-[#ffff0e]"
              }`}
          >
            登录
          </button>
          <button
            onClick={() => {
              setMode("register");
              setError("");
            }}
            className={`flex-1 py-3 font-bold uppercase text-sm tracking-wider transition-all ${mode === "register"
                ? "bg-[#ffff0e] text-black"
                : "glass-card text-gray-400 hover:text-[#ffff0e]"
              }`}
          >
            注册
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                用户名
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors"
                placeholder="输入用户名..."
                required={mode === "register"}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
              邮箱
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors"
              placeholder="输入邮箱..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
              密码
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#ffff0e]/20 text-white focus:border-[#ffff0e] focus:outline-none transition-colors"
              placeholder="输入密码..."
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#ffff0e] text-black font-bold uppercase tracking-wider hover:bg-[#ffff0e]/90 transition-all yellow-glow"
          >
            {mode === "login" ? "登录" : "注册"}
          </button>
        </form>

        {mode === "login" && (
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
              没有账号？{" "}
              <button
                onClick={() => {
                  setMode("register");
                  setError("");
                }}
                className="text-[#ffff0e] hover:underline"
              >
                立即注册
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
