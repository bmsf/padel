import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
	theme?: string;
	onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
	const isDark = theme === 'dark';

	return (
		<motion.button
			onClick={onToggle}
			className={`relative bg-card/70 w-[70px] h-[36px] rounded-full p-1 duration-300 focus:outline-none
				 border-2 border-foreground/10 hover:bg-card/70`}
			aria-label={isDark ? 'Bytt til lyst tema' : 'Bytt til mørkt tema'}
			initial={false}
		>
			{/* Bakgrunnsikoner - viser det motsatte av nåværende tema */}
			<span className='absolute left-2 top-1/2 -translate-y-1/2 text-foreground opacity-0 dark:opacity-100 transition-opacity duration-300'>
				<Sun className='h-4 w-4' />
			</span>
			<span className='absolute right-2 top-1/2 -translate-y-1/2 text-foreground opacity-100 dark:opacity-0 transition-opacity duration-300'>
				<Moon className='h-4 w-4' />
			</span>

			{/* Animert sirkel */}
			<motion.div
				className='w-[26px] h-[26px] rounded-full shadow-md bg-foreground'
				animate={{
					x: isDark ? 34 : 0,
				}}
				transition={{
					type: 'spring',
					stiffness: 500,
					damping: 30,
				}}
			/>
		</motion.button>
	);
}
