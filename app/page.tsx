"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";

export default function Home() {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          selectedModuleId={selectedModuleId}
          onSelectModule={setSelectedModuleId}
        />
        <ContentArea selectedModuleId={selectedModuleId} />
      </div>
      <Footer />
    </div>
  );
}
