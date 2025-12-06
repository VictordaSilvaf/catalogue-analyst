import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#products', label: t('nav.products') },
    { href: '#accessories', label: t('nav.accessories') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tight">
              DN<span className="text-muted-foreground">Shop</span>Cell
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {t('about.text1')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DNShopCell. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
