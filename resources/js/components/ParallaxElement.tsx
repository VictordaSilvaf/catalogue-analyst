import { useParallax } from '@/hooks/useParallax';

interface ParallaxElementProps {
  speed?: number;
  className?: string;
  children?: React.ReactNode;
}

export function ParallaxElement({ speed = 0.3, className, children }: ParallaxElementProps) {
  const offset = useParallax(speed);

  return (
    <div
      className={className}
      style={{ transform: `translateY(${-offset}px)` }}
    >
      {children}
    </div>
  );
}

// Decorative floating shapes with parallax
export function FloatingShapes() {
  const offset1 = useParallax(0.15);
  const offset2 = useParallax(0.25);
  const offset3 = useParallax(0.1);
  const offset4 = useParallax(0.2);

  return (
    <>
      {/* Top right circle */}
      <div
        className="absolute -top-20 right-10 w-40 h-40 bg-foreground/5 rounded-full blur-sm pointer-events-none"
        style={{ transform: `translateY(${-offset1}px)` }}
      />
      
      {/* Bottom left square */}
      <div
        className="absolute bottom-20 -left-10 w-32 h-32 bg-foreground/5 rounded-3xl rotate-12 pointer-events-none"
        style={{ transform: `translateY(${-offset2}px) rotate(12deg)` }}
      />
      
      {/* Middle right small circle */}
      <div
        className="absolute top-1/3 -right-6 w-20 h-20 bg-foreground/3 rounded-full pointer-events-none"
        style={{ transform: `translateY(${-offset3}px)` }}
      />
      
      {/* Top left triangle-ish */}
      <div
        className="absolute top-40 left-20 w-16 h-16 bg-foreground/5 rounded-xl rotate-45 pointer-events-none hidden lg:block"
        style={{ transform: `translateY(${-offset4}px) rotate(45deg)` }}
      />
    </>
  );
}
