import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ToggleTheme from './ToggleTheme';

export function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#home', label: t('nav.home') },
        { href: '#products', label: t('nav.products') },
        { href: '#accessories', label: t('nav.accessories') },
        { href: '#about', label: t('nav.about') },
        { href: '#contact', label: t('nav.contact') },
    ];

    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <nav className="container-custom">
                <div className="flex h-16 items-center justify-between md:h-20">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-xl font-bold tracking-tight md:text-2xl"
                    >
                        DN<span className="text-muted-foreground">Shop</span>
                        Cell
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Language Toggle & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <ToggleTheme />

                        <button
                            onClick={() =>
                                setLanguage(language === 'pt' ? 'en' : 'pt')
                            }
                            className="rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary"
                        >
                            {language === 'pt' ? 'EN' : 'PT'}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 md:hidden"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="animate-fade-in border-t border-border py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
