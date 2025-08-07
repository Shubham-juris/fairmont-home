import React from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/navbar/logo.png";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Our Construction", to: "/construction" },
  { name: "Gallery", to: "/gallery" },
  { name: "About", to: "/about" },
  { name: "Careers", to: "/carrer" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full bg-[#1b1b1b] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Fairmont Homes Logo" className="h-12 w-auto" />
        </NavLink>

        <nav className="hidden lg:flex gap-10 text-base font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `transition relative ${
                  isActive ? "text-green-400" : "hover:text-green-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <NavLink
            to="/contact"
            className="px-5 py-2 bg-green-700 rounded-md text-base font-semibold hover:bg-green-500 transition"
          >
            Contact
          </NavLink>
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
            <div className="absolute right-0 mt-2 w-64 bg-white text-[#1b1b1b] rounded-xl shadow-xl z-30 overflow-hidden">
              <div className="flex flex-col">
                {navItems.map((n) => (
                  <NavLink
                    key={n.name}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-5 py-3 text-base border-b last:border-b-0 ${
                        isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
                      }`
                    }
                  >
                    {n.name}
                  </NavLink>
                ))}
                <div className="px-5 py-4">
                  <NavLink
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block text-center w-full px-3 py-2 bg-green-500 text-white rounded-md font-medium text-base"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
