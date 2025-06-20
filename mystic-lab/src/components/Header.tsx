import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
   <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16 md:h-20"> {/* Increased height on medium+ devices */}
      {/* Logo - Made responsive */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="Medoscopic Pharma Logo"
          className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" // Responsive sizing
        />
        {/* Optional: Add text logo for larger screens */}
        <span className="hidden sm:inline-block text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
        </span>
      </Link>

      {/* Rest of your code remains the same */}
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`text-sm font-medium transition-colors hover:text-medoscopic-blue-600 ${
              location.pathname === item.href
                ? "text-medoscopic-blue-600"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Right side actions */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="w-9 h-9 p-0"
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-yellow-500" />
          ) : (
            <Moon className="h-4 w-4 text-gray-600" />
          )}
        </Button>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden w-9 h-9 p-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>

    {/* Mobile Navigation */}
    {isMobileMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 text-base font-medium transition-colors hover:text-medoscopic-blue-600 ${
                location.pathname === item.href
                  ? "text-medoscopic-blue-600"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    )}
  </nav>
</header>
  );
};

export default Header;
