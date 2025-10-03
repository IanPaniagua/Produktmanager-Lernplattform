"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onHomeClick?: () => void;
}

export default function Header({ onHomeClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-xl overflow-hidden inline-block"
            aria-label="Zur Startseite"
            onClick={(e) => {
              // Avoid navigation if already on '/'; just reset the view
              e.preventDefault();
              onHomeClick?.();
            }}
          >
            <Image
              src="/assets/logo-pm.svg"
              alt="PM Lernplattform Logo"
              width={54}
              height={54}
              priority
            />
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Produktmanagement
            </h1>
            <p className="text-xs text-gray-500">Lernplattform</p>
          </div>
        </div>
      </div>
    </header>
  );
}
