export const menuLinks: navLink[] = [
	{ name: 'O nas', href: '/#o-nas', id: 'o-nas' },
	{ name: 'Pokoje', href: '/pokoje-goscinne-wegierska-gorka', id: 'pokoje' },
	{ name: 'Udogodnienia', href: '/#udogodnienia', id: 'udogodnienia' },
	{
		name: 'Atrakcje',
		href: '/okoliczne-atrakcje-wegierska-gorka',
		id: 'atrakcje',
		children: [
			{
				name: 'Do zwiedzania',
				href: '/co-zwiedzic-wegierskia-gorka',
				id: 'zwiedzanie',
			},
			{ name: 'Beskidzkie szlaki', href: '/nocleg-przy-szlaku', id: 'szlaki' },
			{
				name: 'Restauracje i Karczmy',
				href: '/restauracje-wegierska-gorka',
				id: 'restauracje',
			},
			{
				name: 'Dla dzieci',
				href: '/atrakcje-dla-dzieci-wegierska-gorka',
				id: 'dzieci',
			},
			{
				name: 'Zimowe atrakcje',
				href: '/zimowe-atrakcje-wegierska-gorka',
				id: 'zimowe',
			},
		],
	},
	{ name: 'Galeria', href: '/galeria', id: 'galeria' },
	{ name: 'Cennik', href: '/cennik', id: 'cennik' },
	// { name: 'Blog', href: '/blog', id: 'blog' },
	{ name: 'Kontakt', href: '/kontakt', id: 'kontakt' },
];
