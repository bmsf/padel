import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
	theme?: string;
	onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
	return (
		<Button
			variant='ghost'
			size='icon'
			onClick={onToggle}
			className='rounded-full text-foreground hover:bg-transparent hover:text-current'
			aria-label={
				theme === 'dark' ? 'Bytt til lyst tema' : 'Bytt til mørkt tema'
			}
		>
			<Sun className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
		</Button>
	);
}
