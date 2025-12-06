import { useScrollProgress } from '@/hooks/useParallax';

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-foreground transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
