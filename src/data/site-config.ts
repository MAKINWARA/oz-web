export type Image = {
	src: string;
	alt?: string;
	caption?: string;
};

export type CreatedBy = {
	name: string;
	href: string;
}

export type Link = {
	text: string;
	href: string;
};

export type Hero = {
	title?: string;
	text?: string;
	image?: Image;
	actions?: Link[];
};

export type Subscribe = {
	title?: string;
	text?: string;
	formUrl: string;
};

export type SiteConfig = {
	logo?: Image;
	title: string;
	subtitle: string;
	description: string;
	image: Image;
	headerNavLinks?: Link[];
	footerNavLinks?: Link[];
	socialLinks?: Link[];
	hero?: Hero;
	subscribe?: Subscribe;
	postsPerPage?: number;
	projectsPerPage?: number;
	createdBy: CreatedBy;
};

const siteConfig: SiteConfig = {
	title: 'Osnel Delgado',
	subtitle: 'A star within dance',
	description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
	image: {
		src: '/dante-preview.jpg',
		alt: 'Dante - Astro.js and Tailwind CSS theme'
	},
	headerNavLinks: [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'Projects',
			href: '/projects'
		},
		{
			text: 'Blog',
			href: '/blog'
		},
		{
			text: 'Tags',
			href: '/tags'
		}
	],
	footerNavLinks: [
		{
			text: 'About',
			href: '/about'
		},
		{
			text: 'Contact',
			href: '/contact'
		},
		{
			text: 'Terms',
			href: '/terms'
		},
	],
	socialLinks: [
		{
			text: 'LinkedIn',
			href: 'https://linkedin.com/'
		},
		{
			text: 'Instagram',
			href: 'https://instagram.com/'
		},
		{
			text: 'X/Twitter',
			href: 'https://twitter.com/'
		}
	],
	hero: {
		title: 'Hi There & Welcome to My Corner of the Web!',
		text: "Danced with Danza Contemporanea de Cuba from 2003 to 2011, before founding Malpaso. He has worked with choreographers Mats Ek, Rafael Bonachela, Kenneth Kvarnström, Ja Linkens, Itzik Galili, Samir Akika, Pedro Ruiz, Isidro Rolando, George Céspedes, Sonya Tayeh, Robyn Mineko, Trey McIntyre, Aszure Barton, Ohad Naharin, Ron K. Brown, Ephrat Asherie  among others. Delgado has created works for DCC, Rakatan, Ebony Dance of Cuba,Contemporary Ballet of Camagüey, Acosta Danza Yunior. Internationally he has worked with students from the University of Mississippi Ole Miss dance program and companies such as Zenon Dance Company, Hubbard Street Dance Chicago, Concert Dance Inc and Smuin Contemporary Ballet. Delgado graduated in 2003 from the National Dance School of Havana, where he is also a professor of dance studies. <a href='https://github.com/JustGoodUI/dante-astro-theme'>LinkId</a> or follow me on <a href='https://twitter.com/justgoodui'>Twitter/X</a>..",
		image: {
			src: 'oz-profile-picture.jpeg',
			alt: 'A person sitting at a desk in front of a computer'
		},
		actions: [
			{
				text: 'Get in Touch',
				href: '/contact'
			}
		]
	},
	subscribe: {
		title: 'Subscribe to Dante Newsletter',
		text: 'One update per week. All the latest posts directly in your inbox.',
		formUrl: '#'
	},
	postsPerPage: 8,
	projectsPerPage: 8,
	createdBy: {
		name: 'MAKINWARA',
		href: ''
	}
};

export default siteConfig;
