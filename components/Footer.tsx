import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2025 Produktmanagement Lernplattform. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
