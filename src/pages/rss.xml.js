import rss, {
	pagesGlobToRssItems
} from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export const get = async () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items: await pagesGlobToRssItems(import.meta.glob('./blog/**/*.{md,mdx}'))
	});
