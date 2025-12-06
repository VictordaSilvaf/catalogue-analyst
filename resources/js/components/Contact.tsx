import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, Send } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useParallax } from '@/hooks/useParallax';

const WHATSAPP_NUMBER = '5500000000000'; // Placeholder

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const offset = useParallax(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.success'),
      duration: 3000,
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div
        className="absolute top-1/3 -right-16 w-48 h-48 bg-foreground/3 rounded-full pointer-events-none"
        style={{ transform: `translateY(${-offset}px)` }}
      />
      <div
        className="absolute bottom-10 left-1/4 w-24 h-24 bg-foreground/5 rounded-xl rotate-45 pointer-events-none"
        style={{ transform: `translateY(${-offset * 1.5}px) rotate(45deg)` }}
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <ScrollReveal animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animation="fade-up" delay={150}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.name')}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-card"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-card"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  {t('contact.phone')}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.message')}
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-card resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" className="flex-1 gap-2">
                  <Send size={18} />
                  {t('contact.send')}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleWhatsAppClick}
                  className="flex-1 gap-2 border-foreground/20 hover:bg-foreground hover:text-background"
                >
                  <MessageCircle size={18} />
                  {t('contact.whatsapp')}
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
