'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

interface CookiePreferencesProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function CookiePreferences({
	isOpen,
	onClose,
}: CookiePreferencesProps) {
	const { preferences, updatePreferences, acceptAll } = useCookieConsent();
	const [localPreferences, setLocalPreferences] = useState(preferences);

	const handleSave = () => {
		updatePreferences(localPreferences);
		onClose();
	};

	const handleAcceptAll = () => {
		acceptAll();
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='max-w-2xl max-h-[80vh] overflow-y-auto'>
				<DialogHeader>
					<DialogTitle className='text-xl font-semibold'>
						🍪 Cookie Innstillinger
					</DialogTitle>
				</DialogHeader>

				<div className='space-y-6'>
					<p className='text-sm text-muted-foreground'>
						Velg hvilke typer cookies du vil tillate. Nødvendige cookies er
						alltid aktive for at nettstedet skal fungere ordentlig.
					</p>

					<div className='space-y-4'>
						{/* Nødvendige cookies */}
						<div className='flex items-center justify-between p-4 bg-muted/50 rounded-lg'>
							<div className='flex-1'>
								<div className='flex items-center gap-2 mb-1'>
									<Label htmlFor='necessary' className='font-medium'>
										Nødvendige cookies
									</Label>
									<span className='text-xs bg-primary text-primary-foreground px-2 py-1 rounded'>
										Alltid aktiv
									</span>
								</div>
								<p className='text-sm text-muted-foreground'>
									Disse cookies er nødvendige for at nettstedet skal fungere. De
									kan ikke deaktiveres.
								</p>
							</div>
							<Switch id='necessary' checked={true} disabled className='ml-4' />
						</div>

						<Separator />

						{/* Analytics cookies */}
						<div className='flex items-center justify-between p-4 bg-muted/50 rounded-lg'>
							<div className='flex-1'>
								<Label htmlFor='analytics' className='font-medium mb-1 block'>
									Analytics cookies
								</Label>
								<p className='text-sm text-muted-foreground'>
									Hjelper oss å forstå hvordan besøkende bruker nettstedet ved å
									samle inn anonym informasjon.
								</p>
							</div>
							<Switch
								id='analytics'
								checked={localPreferences.analytics}
								onCheckedChange={(checked) =>
									setLocalPreferences((prev) => ({
										...prev,
										analytics: checked,
									}))
								}
								className='ml-4'
							/>
						</div>

						<Separator />

						{/* Marketing cookies */}
						<div className='flex items-center justify-between p-4 bg-muted/50 rounded-lg'>
							<div className='flex-1'>
								<Label htmlFor='marketing' className='font-medium mb-1 block'>
									Marketing cookies
								</Label>
								<p className='text-sm text-muted-foreground'>
									Brukes til å spore besøkende på tvers av nettsteder for å vise
									relevante annonser.
								</p>
							</div>
							<Switch
								id='marketing'
								checked={localPreferences.marketing}
								onCheckedChange={(checked) =>
									setLocalPreferences((prev) => ({
										...prev,
										marketing: checked,
									}))
								}
								className='ml-4'
							/>
						</div>

						<Separator />

						{/* Preferences cookies */}
						<div className='flex items-center justify-between p-4 bg-muted/50 rounded-lg'>
							<div className='flex-1'>
								<Label htmlFor='preferences' className='font-medium mb-1 block'>
									Preferanse cookies
								</Label>
								<p className='text-sm text-muted-foreground'>
									Lagrer dine innstillinger og preferanser for en bedre
									brukeropplevelse.
								</p>
							</div>
							<Switch
								id='preferences'
								checked={localPreferences.preferences}
								onCheckedChange={(checked) =>
									setLocalPreferences((prev) => ({
										...prev,
										preferences: checked,
									}))
								}
								className='ml-4'
							/>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row gap-3 pt-4'>
						<Button variant='outline' onClick={onClose} className='flex-1'>
							Avbryt
						</Button>
						<Button
							variant='outline'
							onClick={handleAcceptAll}
							className='flex-1'
						>
							Godta alle
						</Button>
						<Button onClick={handleSave} className='flex-1'>
							Lagre innstillinger
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
