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
import { motion } from 'framer-motion';

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
	const isHomePage = pathname === '/';

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

	// Determine the background style based on the current path
	const headerBgClass = isHomePage ? 'bg-transparent' : 'bg-background';

	// Wrapper component for conditional animation
	const AnimatedWrapper = ({
		children,
		index = 0,
	}: {
		children: React.ReactNode;
		index?: number;
	}) => {
		if (!isHomePage) return <>{children}</>;

		return (
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.5,
					delay: 2.8 + index * 0.1,
					ease: [0.22, 1, 0.36, 1],
				}}
			>
				{children}
			</motion.div>
		);
	};

	// Logo wrapper with conditional animation
	const LogoWrapper = ({ children }: { children: React.ReactNode }) => {
		if (!isHomePage) return <>{children}</>;

		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 0.8,
					delay: 2.5,
					ease: [0.22, 1, 0.36, 1],
				}}
			>
				{children}
			</motion.div>
		);
	};

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 ${headerBgClass} transition-colors duration-300`}
		>
			<div className='container mx-auto flex justify-between items-center py-6 px-6 md:px-0'>
				{/* Logo and mobile menu button section */}
				<div className='flex items-center gap-4'>
					{/* Logo section with link to homepage */}
					<LogoWrapper>
						<Link href='/' className='flex items-center'>
							<div className='relative w-32 h-12'>
								<Image
									src={
										isHomePage
											? '/Padel_Co_logo_refined_green.png'
											: theme === 'dark'
											? '/Padel_Co_logo_refined_green.png'
											: '/Padel_Co_logo_refined_white.png'
									}
									alt='Padel Co Logo'
									fill
									style={{ objectFit: 'contain' }}
									priority
								/>
							</div>
						</Link>
					</LogoWrapper>

					{/* Mobile Menu Button and Dropdown */}
					<div className='md:hidden relative' ref={menuRef}>
						<AnimatedWrapper index={0}>
							<button
								className={`flex items-center gap-2 ${
									isHomePage && !isMenuOpen
										? 'bg-white/20 text-white'
										: 'bg-card text-card-foreground'
								} px-6 py-3 rounded-xl`}
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
						</AnimatedWrapper>

						{/* Mobile Navigation Menu - Dropdown */}
						{isMenuOpen && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.2 }}
								className='absolute top-full left-0 mt-2 w-56 bg-card text-card-foreground rounded-md shadow-lg py-3'
							>
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
							</motion.div>
						)}
					</div>
				</div>

				{/* Desktop Navigation and Theme Toggle */}
				<div className='flex items-center gap-4'>
					{/* Desktop Navigation */}
					<div className='hidden md:block'>
						<NavigationMenu>
							<NavigationMenuList>
								{navLinks.map((link, index) => (
									<NavigationMenuItem key={link.href}>
										<AnimatedWrapper index={index}>
											<Link href={link.href} legacyBehavior passHref>
												<NavigationMenuLink
													className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors nav-link ${
														isHomePage
															? 'text-white hover:text-white/80'
															: 'text-foreground'
													} ${theme === 'dark' ? 'dark' : 'light'} ${
														pathname === link.href ? 'font-medium' : ''
													}`}
												>
													{link.label}
												</NavigationMenuLink>
											</Link>
										</AnimatedWrapper>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					{/* Theme Toggle Button */}
					<AnimatedWrapper index={5}>
						<Button
							variant='ghost'
							size='icon'
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							className={`rounded-full ${
								isHomePage ? 'text-white' : 'text-foreground'
							}`}
						>
							<Sun className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
							<Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
							<span className='sr-only'>Bytt tema</span>
						</Button>
					</AnimatedWrapper>
				</div>
			</div>
		</nav>
	);
}
