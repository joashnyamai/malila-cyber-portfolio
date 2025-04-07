
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    // Check if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  const navItems = [
    { label: "Home", href: "/", isSection: false },
    { label: "About", href: "about", isSection: true },
    { label: "Services", href: "/services", isSection: false },
    { label: "Experience", href: "experience", isSection: true },
    { label: "Skills", href: "skills", isSection: true },
    { label: "Contact", href: "contact", isSection: true },
  ];

  return (
    <nav className={cn("fixed top-0 left-0 w-full z-50 py-4 bg-background/80 backdrop-blur-md border-b border-cyber-primary/30", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-cyber-primary font-bold text-xl cyber-text-glow">MN</div>
            <span className="text-lg font-medium hidden sm:inline-block">Malila Nyamai</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-cyber-primary hover:cyber-text-glow transition-all"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-cyber-primary hover:cyber-text-glow transition-all"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-cyber-primary" />
            ) : (
              <Menu className="h-6 w-6 text-cyber-primary" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-background border-b border-cyber-primary/30">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium py-2 text-foreground/80 hover:text-cyber-primary text-left"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium py-2 text-foreground/80 hover:text-cyber-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
