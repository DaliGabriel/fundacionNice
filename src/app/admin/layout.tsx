"use client";

import { useState } from "react";
import { AlertProvider } from "../../lib/context/AlertContext";
import { AlertWrapper } from "../components/admin/Alert/AlertWrapper";
import Navbar from "@/app/components/admin/Dashboard/Navbar/Navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <AlertProvider>
      <AlertWrapper>
        <div className="min-h-screen bg-gray-50">
          <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
          <div
            className={`transition-all duration-300 ${
              isNavOpen ? "pl-72" : "pl-16"
            } pr-6 py-6`}
          >
            {children}
          </div>
        </div>
      </AlertWrapper>
    </AlertProvider>
  );
}
