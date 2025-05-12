'use client';

import { useState, useEffect, memo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { navigationConfig } from '@/app/config/navigation';
import { MobileMenu } from './MobileMenu';
import { DesktopNav } from './DesktopNav';
import { ThemeToggle } from './ThemeToggle';

const Logo = memo(function Logo({
	theme,
	mounted,
}: {
	theme?: string;
	mounted: boolean;
}) {
	if (!mounted) return <div />;

	const { logo } = navigationConfig;
	return (
		<Image
			src={theme === 'dark' ? logo.darkSrc : logo.lightSrc}
			alt={logo.alt}
			width={logo.width}
			height={logo.height}
			className='object-contain m-0 p-0'
			priority
		/>
	);
});

export default function Header() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	const handleThemeToggle = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
	};

	return (
		<nav
			className='fixed top-0 left-0 w-full z-50 bg-background transition-colors duration-300'
			role='navigation'
			aria-label='Hovednavigasjon'
		>
			<div className='container mx-auto flex justify-between items-center py-2 md:px-0'>
				<div className='flex items-center gap-4'>
					<Link
						href='/'
						className='flex items-center'
						aria-label='Gå til forsiden'
					>
						<Logo theme={resolvedTheme} mounted={mounted} />
					</Link>

					<MobileMenu
						isOpen={isMenuOpen}
						onToggle={() => setIsMenuOpen(!isMenuOpen)}
						links={navigationConfig.links}
					/>
				</div>

				<div className='flex items-center gap-4'>
					<DesktopNav links={navigationConfig.links} theme={resolvedTheme} />

					<ThemeToggle theme={resolvedTheme} onToggle={handleThemeToggle} />
				</div>
			</div>
		</nav>
	);
}
