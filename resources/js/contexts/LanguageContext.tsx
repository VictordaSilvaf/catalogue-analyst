import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.products': 'Produtos',
    'nav.accessories': 'Acessórios',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.title': 'A Excelência Apple ao Seu Alcance',
    'hero.subtitle': 'Especialistas em iPhones, MacBooks e iPads. Produtos novos, vitrine e seminovos com garantia e qualidade premium.',
    'hero.cta': 'Fale Conosco',
    'hero.catalog': 'Ver Catálogo',
    
    // Products
    'products.apple.title': 'Produtos Apple',
    'products.apple.subtitle': 'Nossa especialidade: o melhor da Apple para você',
    'products.other.title': 'Outras Marcas',
    'products.other.subtitle': 'Também trabalhamos com as melhores marcas do mercado',
    'products.new': 'Novo',
    'products.showcase': 'Vitrine',
    'products.used': 'Seminovo',
    'products.viewDetails': 'Ver Detalhes',
    
    // Accessories
    'accessories.title': 'Acessórios',
    'accessories.subtitle': 'Complete sua experiência com acessórios de qualidade',
    
    // Why Choose
    'why.title': 'Por Que Escolher a DNShopCell?',
    'why.subtitle': 'Confiança e qualidade em cada atendimento',
    'why.team.title': 'Equipe Especializada',
    'why.team.desc': '4 vendedores especializados prontos para te atender',
    'why.warranty.title': 'Garantia',
    'why.warranty.desc': 'Todos os produtos com garantia de funcionamento',
    'why.quality.title': 'Qualidade Premium',
    'why.quality.desc': 'Produtos selecionados e testados rigorosamente',
    'why.support.title': 'Suporte Dedicado',
    'why.support.desc': 'Atendimento personalizado antes e após a compra',
    
    // Testimonials
    'testimonials.title': 'O Que Nossos Clientes Dizem',
    'testimonials.subtitle': 'A satisfação dos nossos clientes é nossa maior conquista',
    
    // About
    'about.title': 'Sobre a DNShopCell',
    'about.text1': 'Somos uma loja especializada em produtos Apple, com foco em oferecer a melhor experiência de compra para nossos clientes.',
    'about.text2': 'Nossa equipe de 4 vendedores especializados está sempre pronta para te ajudar a encontrar o produto ideal, seja um iPhone novinho em folha ou um MacBook seminovo em perfeito estado.',
    'about.text3': 'Trabalhamos com transparência e qualidade, garantindo que cada produto vendido passe por uma rigorosa avaliação.',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Estamos prontos para te atender',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.whatsapp': 'Falar no WhatsApp',
    
    // CTA
    'cta.title': 'Pronto Para Encontrar Seu Próximo Apple?',
    'cta.subtitle': 'Entre em contato conosco e descubra as melhores ofertas',
    'cta.button': 'Fale Conosco Agora',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados',
    'footer.quickLinks': 'Links Rápidos',
    'footer.followUs': 'Siga-nos',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.accessories': 'Accessories',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Apple Excellence Within Your Reach',
    'hero.subtitle': 'Specialists in iPhones, MacBooks, and iPads. New, showcase, and pre-owned products with warranty and premium quality.',
    'hero.cta': 'Contact Us',
    'hero.catalog': 'View Catalog',
    
    // Products
    'products.apple.title': 'Apple Products',
    'products.apple.subtitle': 'Our specialty: the best of Apple for you',
    'products.other.title': 'Other Brands',
    'products.other.subtitle': 'We also work with the best brands in the market',
    'products.new': 'New',
    'products.showcase': 'Showcase',
    'products.used': 'Pre-owned',
    'products.viewDetails': 'View Details',
    
    // Accessories
    'accessories.title': 'Accessories',
    'accessories.subtitle': 'Complete your experience with quality accessories',
    
    // Why Choose
    'why.title': 'Why Choose DNShopCell?',
    'why.subtitle': 'Trust and quality in every service',
    'why.team.title': 'Expert Team',
    'why.team.desc': '4 specialized sellers ready to assist you',
    'why.warranty.title': 'Warranty',
    'why.warranty.desc': 'All products with performance warranty',
    'why.quality.title': 'Premium Quality',
    'why.quality.desc': 'Rigorously selected and tested products',
    'why.support.title': 'Dedicated Support',
    'why.support.desc': 'Personalized service before and after purchase',
    
    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Customer satisfaction is our greatest achievement',
    
    // About
    'about.title': 'About DNShopCell',
    'about.text1': 'We are a store specialized in Apple products, focused on offering the best shopping experience for our customers.',
    'about.text2': 'Our team of 4 specialized sellers is always ready to help you find the ideal product, whether it\'s a brand new iPhone or a pre-owned MacBook in perfect condition.',
    'about.text3': 'We work with transparency and quality, ensuring that each product sold undergoes a rigorous evaluation.',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We are ready to assist you',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.whatsapp': 'Chat on WhatsApp',
    
    // CTA
    'cta.title': 'Ready to Find Your Next Apple?',
    'cta.subtitle': 'Contact us and discover the best deals',
    'cta.button': 'Contact Us Now',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.quickLinks': 'Quick Links',
    'footer.followUs': 'Follow Us',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
