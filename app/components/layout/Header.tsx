import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';

export default function Header() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{/* <NavigationMenuItem>
					<Link href='/' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Hjem
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem> */}
				<NavigationMenuItem>
					<Link href='/' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Booking
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Om oss</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>Link</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href='/omoss' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Aktiviteter & Turneringer
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href='/' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Kontakt oss
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
