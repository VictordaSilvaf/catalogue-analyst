import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useParallax } from '@/hooks/useParallax';

const appleProducts = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    category: 'iPhone',
    condition: 'new',
    image: null,
  },
  {
    id: 2,
    name: 'iPhone 14 Pro',
    category: 'iPhone',
    condition: 'showcase',
    image: null,
  },
  {
    id: 3,
    name: 'iPhone 13',
    category: 'iPhone',
    condition: 'used',
    image: null,
  },
  {
    id: 4,
    name: 'MacBook Pro 14"',
    category: 'MacBook',
    condition: 'new',
    image: null,
  },
  {
    id: 5,
    name: 'MacBook Air M2',
    category: 'MacBook',
    condition: 'showcase',
    image: null,
  },
  {
    id: 6,
    name: 'iPad Pro 12.9"',
    category: 'iPad',
    condition: 'new',
    image: null,
  },
];

export function ProductsApple() {
  const { t } = useLanguage();
  const offset1 = useParallax(0.1);
  const offset2 = useParallax(0.15);

  const getConditionLabel = (condition: string) => {
    switch (condition) {
      case 'new':
        return t('products.new');
      case 'showcase':
        return t('products.showcase');
      case 'used':
        return t('products.used');
      default:
        return condition;
    }
  };

  const getConditionStyles = (condition: string) => {
    switch (condition) {
      case 'new':
        return 'bg-foreground text-background';
      case 'showcase':
        return 'bg-secondary text-foreground border border-border';
      case 'used':
        return 'bg-muted text-muted-foreground';
      default:
        return '';
    }
  };

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div
        className="absolute top-20 -right-20 w-64 h-64 bg-foreground/3 rounded-full pointer-events-none"
        style={{ transform: `translateY(${-offset1}px)` }}
      />
      <div
        className="absolute bottom-40 -left-10 w-40 h-40 bg-foreground/5 rounded-3xl rotate-12 pointer-events-none"
        style={{ transform: `translateY(${-offset2}px) rotate(12deg)` }}
      />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('products.apple.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('products.apple.subtitle')}
          </p>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {appleProducts.map((product, index) => (
            <ScrollReveal
              key={product.id}
              animation={index % 3 === 0 ? 'fade-right' : index % 3 === 1 ? 'fade-up' : 'fade-left'}
              delay={index * 100}
            >
              <article className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-secondary to-muted p-8 relative overflow-hidden">
                  <Badge className={`absolute top-4 left-4 ${getConditionStyles(product.condition)}`}>
                    {getConditionLabel(product.condition)}
                  </Badge>
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="text-center">
                      {product.category === 'iPhone' && (
                        <div className="w-24 h-40 mx-auto bg-foreground/10 rounded-[2rem] border-2 border-foreground/20 relative">
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-4 bg-foreground/20 rounded-full" />
                        </div>
                      )}
                      {product.category === 'MacBook' && (
                        <div className="w-40 h-28 mx-auto bg-foreground/10 rounded-lg border-2 border-foreground/20 relative">
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-foreground/20 rounded-t" />
                        </div>
                      )}
                      {product.category === 'iPad' && (
                        <div className="w-32 h-40 mx-auto bg-foreground/10 rounded-xl border-2 border-foreground/20 relative">
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-foreground/20 rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-muted-foreground transition-colors">
                    {product.name}
                  </h3>
                  <button className="text-sm font-medium underline underline-offset-4 hover:no-underline transition-all">
                    {t('products.viewDetails')}
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
