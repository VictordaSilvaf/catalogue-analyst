import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useParallax } from '@/hooks/useParallax';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    text: 'Excelente atendimento! Comprei meu iPhone e estou super satisfeita. Equipe muito profissional.',
    textEn: 'Excellent service! I bought my iPhone and I\'m super satisfied. Very professional team.',
    rating: 5,
  },
  {
    id: 2,
    name: 'João Santos',
    text: 'Melhor loja de Apple da região. Preços justos e produtos de qualidade.',
    textEn: 'Best Apple store in the region. Fair prices and quality products.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Costa',
    text: 'Comprei um MacBook seminovo e veio impecável. Super recomendo a DNShopCell!',
    textEn: 'I bought a pre-owned MacBook and it came impeccable. I highly recommend DNShopCell!',
    rating: 5,
  },
];

export function Testimonials() {
  const { t, language } = useLanguage();
  const offset = useParallax(0.1);

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div
        className="absolute top-1/4 -right-12 w-36 h-36 bg-foreground/5 rounded-full pointer-events-none"
        style={{ transform: `translateY(${-offset}px)` }}
      />
      <div
        className="absolute bottom-1/4 -left-8 w-28 h-28 bg-foreground/3 rounded-2xl rotate-12 pointer-events-none"
        style={{ transform: `translateY(${-offset * 1.3}px) rotate(12deg)` }}
      />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id}
              animation={index === 1 ? 'fade-up' : index === 0 ? 'fade-right' : 'fade-left'}
              delay={index * 150}
            >
              <div className="bg-card p-6 rounded-2xl border border-border h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-4">
                  "{language === 'pt' ? testimonial.text : testimonial.textEn}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium text-sm">{testimonial.name}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
