import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { NavLink } from '@/types/navigation';

interface MobileMenuProps {
	isOpen: boolean;
	onToggle: () => void;
	links: NavLink[];
}

export function MobileMenu({ isOpen, onToggle, links }: MobileMenuProps) {
	const pathname = usePathname();
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				onToggle();
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onToggle]);

	return (
		<div className='lg:hidden relative' ref={menuRef}>
			<button
				className='flex items-center gap-2 bg-card text-card-foreground px-6 py-3 rounded-xl'
				onClick={onToggle}
				aria-expanded={isOpen}
				aria-label={isOpen ? 'Lukk meny' : 'Åpne meny'}
			>
				{isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
				<span className='text-sm font-medium uppercase'>Meny</span>
			</button>

			{isOpen && (
				<div
					className='absolute top-full left-0 mt-2 w-56 bg-card text-card-foreground rounded-md shadow-lg py-3'
					role='menu'
				>
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className='block px-6 py-3 text-center text-foreground uppercase'
							onClick={onToggle}
							role='menuitem'
							aria-current={pathname === link.href ? 'page' : undefined}
						>
							<span
								className={`relative inline-block
                after:content-[""] after:absolute after:bottom-[-4px] after:left-[-10%] after:w-[120%] after:h-0.5 
                after:bg-current after:transition-all after:duration-300 after:origin-left
                ${
									pathname === link.href
										? 'font-medium after:scale-x-100'
										: 'after:scale-x-0 hover:after:scale-x-100'
								}`}
							>
								{link.label}
							</span>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
