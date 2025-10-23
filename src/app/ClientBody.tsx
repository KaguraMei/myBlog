"use client";

import { useEffect } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import CartSidebar from "@/components/CartSidebar";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <div className="antialiased">
          {children}
          <CartSidebar />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
