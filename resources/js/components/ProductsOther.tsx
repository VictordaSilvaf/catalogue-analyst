import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useParallax } from '@/hooks/useParallax';

const otherBrands = [
  { id: 1, name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung' },
  { id: 2, name: 'Xiaomi 14 Pro', brand: 'Xiaomi' },
  { id: 3, name: 'Motorola Edge 40', brand: 'Motorola' },
];

export function ProductsOther() {
  const { t } = useLanguage();
  const offset = useParallax(0.12);

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div
        className="absolute top-10 right-20 w-24 h-24 bg-foreground/5 rounded-full pointer-events-none"
        style={{ transform: `translateY(${-offset}px)` }}
      />
      <div
        className="absolute bottom-20 left-10 w-32 h-32 bg-foreground/3 rounded-2xl rotate-45 pointer-events-none"
        style={{ transform: `translateY(${-offset * 1.5}px) rotate(45deg)` }}
      />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('products.other.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('products.other.subtitle')}
          </p>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherBrands.map((product, index) => (
            <ScrollReveal
              key={product.id}
              animation="scale"
              delay={index * 150}
            >
              <article className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                {/* Product Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-secondary p-6 flex items-center justify-center overflow-hidden">
                  <div className="w-20 h-36 bg-foreground/10 rounded-[1.5rem] border-2 border-foreground/20 relative group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-foreground/20 rounded-full" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {product.brand}
                  </p>
                  <h3 className="text-base font-semibold group-hover:text-muted-foreground transition-colors">
                    {product.name}
                  </h3>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
