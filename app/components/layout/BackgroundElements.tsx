import { cn } from '@/lib/utils';

interface BackgroundElementsProps {
	className?: string;
}

export default function BackgroundElements({
	className,
}: BackgroundElementsProps) {
	return (
		<div
			className={cn(
				'fixed inset-0 -z-10 overflow-hidden pointer-events-none text-foreground',
				className
			)}
		>
			{/* Minimalistisk padelbane */}
			<div className='absolute left-[10%] top-[35%] w-[500px] h-[300px] opacity-[0.04]'>
				{/* Ytre baneramme */}
				<div
					className='absolute inset-0'
					style={{ border: '2px solid currentColor' }}
				/>
				{/* Midtlinje */}
				<div
					className='absolute left-1/2 top-0 w-[2px] h-full -translate-x-1/2'
					style={{ background: 'currentColor' }}
				/>
				{/* Servicelinje */}
				<div
					className='absolute left-[25%] top-0 w-[2px] h-full'
					style={{ background: 'currentColor' }}
				/>
				<div
					className='absolute right-[25%] top-0 w-[2px] h-full'
					style={{ background: 'currentColor' }}
				/>
			</div>

			{/* Tennisball med streker */}
			<div className='absolute right-[15%] top-[40%] opacity-[0.06]'>
				{/* Ball omriss */}
				<div
					className='absolute w-[200px] h-[200px] rounded-full'
					style={{ border: '2px solid currentColor' }}
				/>
				{/* Karakteristiske streker */}
				<div
					className='absolute w-[200px] h-[200px]'
					style={{
						clipPath:
							'path("M100,0 C150,0 150,200 100,200 C50,200 50,0 100,0")',
						border: '2px solid currentColor',
					}}
				/>
				<div
					className='absolute w-[200px] h-[200px]'
					style={{
						transform: 'rotate(180deg)',
						clipPath:
							'path("M100,0 C150,0 150,200 100,200 C50,200 50,0 100,0")',
						border: '2px solid currentColor',
					}}
				/>
			</div>

			{/* Minimalistisk padelracket */}
			<div className='absolute right-[25%] bottom-[15%] w-[180px] h-[300px] opacity-[0.05]'>
				{/* Racket hode */}
				<div
					className='absolute top-0 w-full h-[180px] rounded-full'
					style={{ border: '2px solid currentColor' }}
				/>
				{/* Racket håndtak */}
				<div
					className='absolute bottom-0 left-1/2 w-[24px] h-[140px] -translate-x-1/2'
					style={{ border: '2px solid currentColor' }}
				/>
				{/* Racket strenger - horisontale */}
				<div className='absolute top-0 w-full h-[180px]'>
					{[...Array(5)].map((_, i) => (
						<div
							key={`h-${i}`}
							className='absolute w-full h-[1px]'
							style={{
								top: `${(i + 1) * 30}px`,
								background: 'currentColor',
								opacity: '0.5',
							}}
						/>
					))}
				</div>
				{/* Racket strenger - vertikale */}
				<div className='absolute top-0 w-full h-[180px]'>
					{[...Array(4)].map((_, i) => (
						<div
							key={`v-${i}`}
							className='absolute h-full w-[1px]'
							style={{
								left: `${(i + 1) * 36}px`,
								background: 'currentColor',
								opacity: '0.5',
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
