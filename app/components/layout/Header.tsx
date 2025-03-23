'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import '@/app/globals.css';

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
	const isLandingPage = pathname === '/';
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	// Check if screen is mobile size
	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Initial check
		checkScreenSize();

		// Add event listener
		window.addEventListener('resize', checkScreenSize);

		// Clean up
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	// Close menu when path changes
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	return (
		<nav
			className={`absolute top-0 left-0 w-full z-50 ${
				isLandingPage ? 'bg-transparent' : 'bg-background'
			} ${isMenuOpen ? 'bg-background' : ''}`}
		>
			<div className='container mx-auto flex justify-between items-center py-6 px-6 md:px-0'>
				{/* Logo section with link to homepage */}
				<Link href='/' className='flex items-center'>
					{/* This div will be for the future logo image */}
					<div className='mr-2'>
						{/* Uncomment and add your logo when you have it */}
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

				{/* Mobile Menu Button */}
				<button
					className='md:hidden text-foreground'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				>
					{isMenuOpen ? (
						<X
							className={`h-6 w-6 ${
								isLandingPage && !isMenuOpen ? 'text-white' : 'text-foreground'
							}`}
						/>
					) : (
						<Menu
							className={`h-6 w-6 ${
								isLandingPage ? 'text-white' : 'text-foreground'
							}`}
						/>
					)}
				</button>

				{/* Desktop Navigation */}
				<div className='hidden md:block'>
					<NavigationMenu>
						<NavigationMenuList>
							{navLinks.map((link) => (
								<NavigationMenuItem key={link.href}>
									<Link href={link.href} legacyBehavior passHref>
										<NavigationMenuLink
											className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors ${
												isLandingPage
													? 'text-white nav-link'
													: 'text-foreground hover:bg-accent hover:text-accent-foreground'
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
			</div>

			{/* Mobile Navigation Menu - Shown when menu is open */}
			{isMenuOpen && (
				<div className='md:hidden bg-background'>
					<div className='container mx-auto py-4 space-y-2'>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md ${
									pathname === link.href ? 'font-medium' : ''
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
