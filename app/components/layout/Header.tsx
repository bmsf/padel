'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import '@/app/globals.css';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Navigation links data to reduce repetition
const navLinks = [
	{ href: '/proshop', label: 'Pro shop' },
	{ href: '/event-packages', label: 'Eventpakker' },
	{ href: '/partners', label: 'Samarbeidspartnere' },
	{ href: '/about', label: 'Om oss' },
	{ href: '/contact', label: 'Kontakt oss' },
];

export default function Header() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Når komponenten er montert, sett mounted til true
	useEffect(() => {
		setMounted(true);
	}, []);

	// Close menu when path changes
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMenuOpen]);

	const headerBgClass = 'bg-background';

	// Bruk resolvedTheme for å få det faktiske temaet som er i bruk
	const currentTheme = mounted ? resolvedTheme : undefined;

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 ${headerBgClass} transition-colors duration-300`}
		>
			<div className='container mx-auto flex justify-between items-center py-6 px-6 md:px-0'>
				{/* Logo and mobile menu button section */}
				<div className='flex items-center gap-4'>
					{/* Logo section with link to homepage */}
					<Link href='/' className='flex items-center'>
						{mounted ? (
							<Image
								src={
									currentTheme === 'dark'
										? '/Padel_Co_logo_refined_green.png'
										: '/Padel_Co_logo_refined_white.png'
								}
								alt='Padel Co Logo'
								width={100} // Mindre bredde for mobil
								height={20} // Mindre høyde for mobil
								className='object-contain m-0 p-0 md:w-[192px] md:h-[80px]'
								priority
							/>
						) : (
							<div className='w-[100px] h-[20px] md:w-[192px] md:h-[80px]' />
						)}
					</Link>

					{/* Mobile Menu Button and Dropdown */}
					<div className='md:hidden relative' ref={menuRef}>
						<button
							className='flex items-center gap-2 bg-card text-card-foreground px-6 py-3 rounded-xl'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						>
							{isMenuOpen ? (
								<X className='h-5 w-5' />
							) : (
								<Menu className='h-5 w-5' />
							)}
							<span className='text-sm font-medium uppercase'>Meny</span>
						</button>

						{/* Mobile Navigation Menu - Dropdown */}
						{isMenuOpen && (
							<div className='absolute top-full left-0 mt-2 w-56 bg-card text-card-foreground rounded-md shadow-lg py-3'>
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className='block px-6 py-3 text-center text-foreground uppercase'
										onClick={() => setIsMenuOpen(false)}
									>
										<span
											className={`relative inline-block
										after:content-[""] after:absolute after:bottom-[-4px] after:left-[-10%] after:w-[120%] after:h-0.5 after:bg-current after:transition-all after:duration-300 after:origin-left
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
				</div>

				{/* Desktop Navigation and Theme Toggle */}
				<div className='flex items-center gap-4'>
					{/* Desktop Navigation */}
					<div className='hidden md:block'>
						<NavigationMenu>
							<NavigationMenuList>
								{navLinks.map((link) => (
									<NavigationMenuItem key={link.href}>
										<Link href={link.href} legacyBehavior passHref>
											<NavigationMenuLink
												className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors nav-link relative
												text-foreground after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:transition-all after:duration-300 after:origin-left after:scale-x-0 hover:after:scale-x-100
												${currentTheme === 'dark' ? 'dark' : 'light'} ${
													pathname === link.href ? 'font-medium' : ''
												}`}
											>
												{link.label}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					{/* Theme Toggle Button */}
					<Button
						variant='ghost'
						size='icon'
						onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
						className='rounded-full text-foreground hover:bg-transparent hover:text-current'
					>
						<Sun className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
						<Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
						<span className='sr-only'>Bytt tema</span>
					</Button>
				</div>
			</div>
		</nav>
	);
}
