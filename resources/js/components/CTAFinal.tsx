import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useParallax } from '@/hooks/useParallax';

const WHATSAPP_NUMBER = '5500000000000'; // Placeholder

export function CTAFinal() {
  const { t } = useLanguage();
  const offset1 = useParallax(0.08);
  const offset2 = useParallax(0.12);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div
        className="absolute -top-10 left-1/4 w-40 h-40 bg-background/5 rounded-full pointer-events-none"
        style={{ transform: `translateY(${-offset1}px)` }}
      />
      <div
        className="absolute bottom-0 right-1/3 w-32 h-32 bg-background/3 rounded-2xl rotate-12 pointer-events-none"
        style={{ transform: `translateY(${-offset2}px) rotate(12deg)` }}
      />
      
      <div className="container-custom text-center relative z-10">
        <ScrollReveal animation="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('cta.title')}
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
            {t('cta.subtitle')}
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale" delay={200}>
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="gap-2 bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={20} />
            {t('cta.button')}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
