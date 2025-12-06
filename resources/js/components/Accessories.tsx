import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone, BatteryCharging, Shield } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useParallax } from '@/hooks/useParallax';

const accessories = [
  { id: 1, name: 'Capinhas Premium', icon: Smartphone },
  { id: 2, name: 'Carregadores', icon: BatteryCharging },
  { id: 3, name: 'Películas', icon: Shield },
];

export function Accessories() {
  const { t } = useLanguage();
  const offset1 = useParallax(0.1);
  const offset2 = useParallax(0.18);

  return (
    <section id="accessories" className="section-padding bg-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div
        className="absolute -top-10 left-1/4 w-28 h-28 bg-foreground/5 rounded-full pointer-events-none"
        style={{ transform: `translateY(${-offset1}px)` }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-20 h-20 bg-foreground/3 rounded-xl rotate-12 pointer-events-none"
        style={{ transform: `translateY(${-offset2}px) rotate(12deg)` }}
      />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('accessories.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('accessories.subtitle')}
          </p>
        </ScrollReveal>

        {/* Accessories Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {accessories.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="group p-8 bg-secondary/50 rounded-2xl text-center hover:bg-secondary hover:-translate-y-2 hover:shadow-lg transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-foreground/10 rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
