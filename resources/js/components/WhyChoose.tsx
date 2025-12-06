import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Shield, Award, Headphones } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useParallax } from '@/hooks/useParallax';

export function WhyChoose() {
  const { t } = useLanguage();
  const offset1 = useParallax(0.08);
  const offset2 = useParallax(0.12);

  const reasons = [
    {
      icon: Users,
      title: t('why.team.title'),
      description: t('why.team.desc'),
    },
    {
      icon: Shield,
      title: t('why.warranty.title'),
      description: t('why.warranty.desc'),
    },
    {
      icon: Award,
      title: t('why.quality.title'),
      description: t('why.quality.desc'),
    },
    {
      icon: Headphones,
      title: t('why.support.title'),
      description: t('why.support.desc'),
    },
  ];

  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Parallax decorative elements (inverted colors for dark bg) */}
      <div
        className="absolute top-20 -right-10 w-48 h-48 bg-background/5 rounded-full pointer-events-none"
        style={{ transform: `translateY(${-offset1}px)` }}
      />
      <div
        className="absolute bottom-20 -left-16 w-40 h-40 bg-background/3 rounded-3xl rotate-45 pointer-events-none"
        style={{ transform: `translateY(${-offset2}px) rotate(45deg)` }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-background/5 rounded-xl pointer-events-none hidden lg:block"
        style={{ transform: `translateY(${-offset1 * 1.5}px)` }}
      />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('why.title')}
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            {t('why.subtitle')}
          </p>
        </ScrollReveal>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-background/10 rounded-2xl flex items-center justify-center group-hover:bg-background/20 transition-colors">
                <reason.icon className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-background/70 text-sm">{reason.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
