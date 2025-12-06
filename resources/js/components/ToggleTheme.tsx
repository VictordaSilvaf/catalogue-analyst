import { Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { Button } from '@/components/ui/button'; // Garanta o caminho correto
import { useTheme } from './theme-provider'; // Ou use "next-themes" diretamente se preferir

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    const handleToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const yDirection = theme === 'dark' ? 20 : -20;

    return (
        <Button variant="ghost" size="icon" onClick={handleToggle}>
            <AnimatePresence mode="wait">
                {/* 🚨 Importante: mode="wait" garante que um ícone saia antes que o outro entre */}

                {/* O bloco de movimento é renderizado de forma condicional para que o AnimatePresence funcione */}
                {theme === 'light' ? (
                    <motion.div
                        key="sun"
                        className="absolute" // Ajuda a manter o ícone no centro
                        initial={{
                            opacity: 0,
                            y: -yDirection,
                            rotate: 90,
                            scale: 0,
                        }}
                        animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                        exit={{
                            opacity: 0,
                            y: yDirection,
                            rotate: -90,
                            scale: 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem]" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        className="absolute" // Ajuda a manter o ícone no centro
                        initial={{
                            opacity: 0,
                            y: yDirection,
                            rotate: -90,
                            scale: 0,
                        }}
                        animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                        exit={{
                            opacity: 0,
                            y: -yDirection,
                            rotate: 90,
                            scale: 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <Moon className="h-[1.2rem] w-[1.2rem]" />
                    </motion.div>
                )}
            </AnimatePresence>
            <span className="sr-only">Alternar tema</span>
        </Button>
    );
}
