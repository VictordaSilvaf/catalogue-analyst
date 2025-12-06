import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useParallax } from '@/hooks/useParallax';

export function About() {
  const { t } = useLanguage();
  const offset1 = useParallax(0.1);
  const offset2 = useParallax(0.15);

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div
        className="absolute top-10 right-1/4 w-20 h-20 bg-foreground/5 rounded-full pointer-events-none"
        style={{ transform: `translateY(${-offset1}px)` }}
      />
      <div
        className="absolute bottom-20 left-10 w-32 h-32 bg-foreground/3 rounded-3xl rotate-12 pointer-events-none"
        style={{ transform: `translateY(${-offset2}px) rotate(12deg)` }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <ScrollReveal animation="fade-right">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 bg-gradient-to-br from-secondary to-muted rounded-3xl flex items-center justify-center relative overflow-hidden group">
              <div className="text-center p-8 group-hover:scale-105 transition-transform duration-500">
                <div className="text-6xl font-bold text-foreground/20">DN</div>
                <div className="text-2xl font-light text-foreground/20">ShopCell</div>
              </div>
              {/* Inner decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-foreground/5 rounded-full" />
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-foreground/5 rounded-2xl rotate-12" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="space-y-6">
            <ScrollReveal animation="fade-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {t('about.title')}
              </h2>
            </ScrollReveal>
            <div className="space-y-4 text-muted-foreground">
              <ScrollReveal animation="fade-left" delay={100}>
                <p>{t('about.text1')}</p>
              </ScrollReveal>
              <ScrollReveal animation="fade-left" delay={200}>
                <p>{t('about.text2')}</p>
              </ScrollReveal>
              <ScrollReveal animation="fade-left" delay={300}>
                <p>{t('about.text3')}</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
