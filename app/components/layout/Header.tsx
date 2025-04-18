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
	const { theme, setTheme } = useTheme();
	const isLandingPage = pathname === '/';

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

	return (
		<nav
			className={`absolute top-0 left-0 w-full z-50 ${
				isLandingPage ? 'bg-transparent' : 'bg-background'
			} ${isMenuOpen ? 'bg-background' : ''}`}
		>
			<div className='container mx-auto flex justify-between items-center py-6 px-6 md:px-0'>
				{/* Logo and mobile menu button section */}
				<div className='flex items-center gap-4'>
					{/* Logo section with link to homepage */}
					<Link href='/' className='flex items-center'>
						<div className='mr-2'>
							{/* <Image src="/path-to-logo.png" alt="Bærum Padel Logo" width={40} height={40} /> */}
						</div>
						<p
							className={`font-bold text-lg ${
								isLandingPage && !isMenuOpen ? 'text-white' : 'text-foreground'
							}`}
						>
							Logo
						</p>
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
										className={`block px-6 py-3 text-center text-foreground hover:bg-accent hover:text-accent-foreground uppercase ${
											pathname === link.href ? 'font-medium text-primary' : ''
										}`}
										onClick={() => setIsMenuOpen(false)}
									>
										{link.label}
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
												className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors nav-link ${
													isLandingPage
														? 'text-white dark'
														: `text-foreground ${
																theme === 'dark' ? 'dark' : 'light'
														  }`
												} ${pathname === link.href ? 'font-medium' : ''}`}
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
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						className={`rounded-full ${
							isLandingPage && !isMenuOpen ? 'text-white' : 'text-foreground'
						}`}
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
