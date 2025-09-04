import React from "react"
import { Menu, X, Phone, Calendar1Icon, PenIcon } from "lucide-react"

interface NavItem {
  href: string
  label: string
}

interface MobileMenuToggleProps {
  navItems: NavItem[]
}

export default function MobileMenuToggle({ navItems }: MobileMenuToggleProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <div ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="p-2 rounded-md hover:bg-muted/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        type="button"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-[calc(-75vw)] right-0 md:hidden z-50"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="mx-6 px-4 pt-4 pb-6 space-y-3 bg-card rounded-lg mt-4 border border-border/30 shadow-xl animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                role="menuitem"
                className="block px-6 py-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-300 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-2">
              <a
                href="/services"
                className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-4 font-medium transition-background duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
              >
                <PenIcon className="w-4 h-4 mr-2" />
                Obtenir un devis
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
