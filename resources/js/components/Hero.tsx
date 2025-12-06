import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/hooks/useParallax';
import { ScrollReveal } from '@/components/ScrollReveal';

const WHATSAPP_NUMBER = '5500000000000'; // Placeholder

export function Hero() {
  const { t } = useLanguage();
  const offset1 = useParallax(0.3);
  const offset2 = useParallax(0.2);
  const offset3 = useParallax(0.15);
  const offset4 = useParallax(0.25);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      
      {/* Parallax decorative elements */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 bg-foreground/5 rounded-3xl rotate-12 pointer-events-none"
        style={{ transform: `translateY(${-offset1}px) rotate(12deg)` }}
      />
      <div
        className="absolute top-1/4 -left-16 w-48 h-48 bg-foreground/3 rounded-full pointer-events-none"
        style={{ transform: `translateY(${-offset2}px)` }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-foreground/5 rounded-2xl rotate-45 pointer-events-none hidden lg:block"
        style={{ transform: `translateY(${-offset3}px) rotate(45deg)` }}
      />
      <div
        className="absolute top-1/3 right-10 w-16 h-16 bg-foreground/5 rounded-full pointer-events-none"
        style={{ transform: `translateY(${-offset4}px)` }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <ScrollReveal animation="fade-up" delay={0}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                {t('hero.title')}
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="gap-2 bg-foreground text-background hover:bg-foreground/90"
                >
                  <MessageCircle size={20} />
                  {t('hero.cta')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.catalog')}
                  <ArrowRight size={20} />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Image Placeholder */}
          <ScrollReveal animation="scale" delay={300}>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-secondary to-muted rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-48 h-64 mx-auto bg-foreground/10 rounded-[3rem] border-4 border-foreground/20 relative">
                    {/* Phone notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground/20 rounded-full" />
                    {/* Apple logo placeholder */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <svg viewBox="0 0 24 24" className="w-12 h-12 text-foreground/30" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground font-medium">iPhone 15 Pro Max</p>
                </div>
              </div>
              {/* Floating elements with enhanced parallax */}
              <div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-foreground/5 rounded-2xl"
                style={{ transform: `translateY(${-offset1 * 1.5}px)` }}
              />
              <div 
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-foreground/5 rounded-full"
                style={{ transform: `translateY(${-offset2 * 1.2}px)` }}
              />
              <div 
                className="absolute top-1/2 -right-12 w-12 h-12 bg-foreground/5 rounded-xl rotate-45 hidden lg:block"
                style={{ transform: `translateY(${-offset3 * 2}px) rotate(45deg)` }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
