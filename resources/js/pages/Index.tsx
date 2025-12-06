import { About } from '@/components/About';
import { Accessories } from '@/components/Accessories';
import { Contact } from '@/components/Contact';
import { CTAFinal } from '@/components/CTAFinal';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductsApple } from '@/components/ProductsApple';
import { ProductsOther } from '@/components/ProductsOther';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { Testimonials } from '@/components/Testimonials';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { WhyChoose } from '@/components/WhyChoose';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-background">
                <ScrollProgressBar />
                <Header />
                <main>
                    <Hero />
                    <ProductsApple />
                    <ProductsOther />
                    <Accessories />
                    <WhyChoose />
                    <Testimonials />
                    <About />
                    <Contact />
                    <CTAFinal />
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        </LanguageProvider>
    );
};

export default Index;
