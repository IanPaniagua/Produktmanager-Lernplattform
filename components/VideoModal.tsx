"use client";

import React from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title = "Video",
}: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative bg-white rounded-xl shadow-2xl w-[92%] max-w-4xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
          <button
            onClick={onClose}
            className="flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium shadow-lg transition-all"
            aria-label="Modal schließen"
          >
            <X className="h-4 w-4" />
            Schließen
          </button>
        </div>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title={title}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
