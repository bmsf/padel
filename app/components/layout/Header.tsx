'use client';

import { usePathname } from 'next/navigation';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

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

	return (
		<nav
			className={`absolute top-0 left-0 w-full z-50 ${
				isLandingPage ? 'bg-transparent' : 'bg-background'
			}`}
		>
			<div className='container mx-auto flex justify-between items-center py-6'>
				{/* Logo section with link to homepage */}
				<Link href='/' className='flex items-center'>
					{/* This div will be for the future logo image */}
					<div className='mr-2'>
						{/* Uncomment and add your logo when you have it */}
						{/* <Image src="/path-to-logo.png" alt="Bærum Padel Logo" width={40} height={40} /> */}
					</div>
					<p
						className={`font-bold text-lg ${
							isLandingPage ? 'text-white' : 'text-foreground'
						}`}
					>
						Logo
					</p>
				</Link>

				<NavigationMenu>
					<NavigationMenuList>
						{navLinks.map((link) => (
							<NavigationMenuItem key={link.href}>
								<Link href={link.href} legacyBehavior passHref>
									<NavigationMenuLink
										className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors ${
											isLandingPage
												? 'text-white nav-link'
												: 'text-black hover:bg-accent hover:text-accent-foreground'
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
		</nav>
	);
}
