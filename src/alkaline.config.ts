import { Platforms } from "./Types/types"; // as const

import type { Site, Author, Socials, NavEntry, Docs } from "./Types/types";

/**
 * @description This file contains the configuration for the Alkaline theme.
 * - There are quite a few settings, but they allow for a vast amount of automatization across the theme
 * @exports SITE - The site configuration object
 * @exports NAVIGATION - The navigation configuration object
//  * @exports BLOG - The blog configuration object
 * @exports DOCS - The docs configuration object
 */

//  SITE socials - used for the site footer
export const socials: Socials[] = [
	{
		platform: "email",
		url: "jared@jaredmakes.com",
	},
	{
		platform: "github",
		url: "https://github.com/TruJared/",
	},
	{
		platform: "web",
		url: "https://jaredmakes.com",
	},
];

// use in development to easily see all author socials at once, comment out in production
export const allSocials: Socials[] = Platforms.map((platform) => ({
	platform,
	url: `https://${platform}.com`,
	userName: `test_user_${platform}`,
}));


export const AUTHORS: Author[] = [
	// assumes that the 1st author has the same socials as the site - change if needed
	{
		id: 1,
		name: "Jared Truscott",
		socials: socials,
		email: 'jared@jaredmakes.com'
	},
	{
		id: 2,
		name: "Jeff Goldblum",
		socials: allSocials,
		email: null
	},
]

export const SITE: Site = {
	title: "Alkaline",
	showTitleBackground: true,
	faviconSrc: "/favicon.png", // in public directory
	url: "https://alkaline-theme.xyz",
	author: AUTHORS[0].name, // Made with ❤️ by {your-name}
	description: "A Neutral Base For Your Next Creation",
	keywords: ["astro", "theme", "blog"],
	disableIndexing: false, // true for no indexing
	socials: socials,
	locale: "en_US",
	postsPerPage: 5,
	shikiConfig: {
		theme: "github-dark",
	},
	// * edit or remove ./Types/google-fonts.d.ts to add/remove font types * //
	fonts: [
		{
			typeface: "serif",
			fontFamily: "SUSE",
			fontWeights: ["100..800"],
		},
		{
			typeface: "sans",
			fontFamily: "Roboto",
			fontWeights: [400, 500, 600, 700],
			includeItalic: true,
		},
		{
			typeface: "mono",
			fontFamily: "Fira Code",
			fontWeights: [400, 500, 700],
		},
	],
	// Trouble with the fonts? It's likely because a font family name isn't EXACTLY correct or the font weights you're trying to fetch are not supported for that font family
};

export const NAVIGATION: NavEntry[] = [
	{
		href: "/",
		text: "Home",
	},
	{
		href: "/elements",
		text: "Elements",
	},
	{
		href: "/features",
		text: "Features",
	},
	{
		href: "/docs",
		text: "Docs",
	},
	{
		href: "/tags",
		text: "Tags",
	},
	{
		href: "/faq",
		text: "FAQ",
	},
	{
		href: "/404",
		text: "404",
	},
];

export const DOCS: Docs = {
	title: "Alkaline Docs",
	author: AUTHORS[0].name,
	description: SITE.description || "",
	keywords: SITE.keywords,
	postsPerPage: SITE.postsPerPage,
};

// export the name(s) of the collections as a list - must match the name of the collection in the content directory
export const COLLECTION_NAMES_LIST = ["docs"] as const;
