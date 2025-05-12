import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/types/navigation';

interface DesktopNavProps {
	links: NavLink[];
	theme?: string;
}

export function DesktopNav({ links, theme }: DesktopNavProps) {
	const pathname = usePathname();

	return (
		<div className='hidden lg:block'>
			<NavigationMenu>
				<NavigationMenuList>
					{links.map((link) => (
						<NavigationMenuItem key={link.href}>
							<Link href={link.href} legacyBehavior passHref>
								<NavigationMenuLink
									className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors nav-link relative
                  text-foreground after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                  after:bg-current after:transition-all after:duration-300 after:origin-left after:scale-x-0 
                  hover:after:scale-x-100 ${
										theme === 'dark' ? 'dark' : 'light'
									} 
                  ${pathname === link.href ? 'font-medium' : ''}`}
								>
									{link.label}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
