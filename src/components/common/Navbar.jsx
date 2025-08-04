import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/navbar/logo.png";

const navItems = [
  { name: "Homes", to: "/" },
  { name: "Our Construction", to: "/construction" },
  { name: "Gallery", to: "/gallery" },
  { name: "About", to: "/about" },
  { name: "Careers", to: "/careers" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full bg-[#1b1b1b] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Fairmont Homes Logo"
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "";
              }}
            />
          </Link>
        </div>

        <nav className="hidden lg:flex gap-10 text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="hover:text-teal-400 transition relative"
              aria-label={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-5 py-2 bg-green-700 rounded-md text-base font-semibold hover:bg-green-500 transition"
            >
              Contact
            </Link>
          </div>

          <div className="lg:hidden relative">
            <button
              aria-label="menu"
              onClick={() => setOpen((o) => !o)}
              className="p-2 rounded-md hover:bg-white/10 transition flex items-center"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-[#1b1b1b] rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 z-30 overflow-hidden">
                <div className="flex flex-col">
                  {navItems.map((n) => (
                    <Link
                      key={n.name}
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="px-5 py-3 text-base hover:bg-gray-100 border-b last:border-b-0"
                    >
                      {n.name}
                    </Link>
                  ))}
                  <div className="px-5 py-4">
                    <Link
                      to="/get-started"
                      onClick={() => setOpen(false)}
                      className="block text-center w-full px-3 py-2 bg-green-500 text-white rounded-md font-medium text-base"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
