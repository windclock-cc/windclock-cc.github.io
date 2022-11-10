import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';

export default defineUserConfig( {
  lang: 'en-US',
  title: 'WindClock',
  description: 'Another simple chess clock based on Arduino microcontrollers.',
	port: 3030,
	dest: 'dist/',
	head: [
	],
	theme: defaultTheme( {
		repo: 'https://github.com/windclock-cc/windclock-cc.github.io',
		docsBranch: 'develop',
		navbar: [
			{
				text: 'Home',
				link: '/',
			},
		],
		sidebar: [
			{
				text: 'Getting started',
				collapsible: true,
				children: [
					'/guide/README.md',
					'/guide/project-structure.md',
				],
			},
			{
				text: 'Hardware',
				collapsible: true,
				children: [
					'/hardware/README.md',
				],
			},
		],
	} ),
} );