import process from "node:process";

export interface Config {
	readonly site: string,
	readonly base: string,
	readonly port: number,
	readonly fullSite: string
}

const DefaultConfig = {
	site: 'http://localhost',
	port: 8080,
	base: ''
};

const { SITE_URL, SITE_BASE } = process.env;
const SPLIT_REGEX = /:(?!\/)/;
const splitSiteUrl = SITE_URL?.split(SPLIT_REGEX);

export default function generateConfig(trailingSlash?: boolean): Config {

	return {
		site: (splitSiteUrl ?? [DefaultConfig.site])[0],
		port: splitSiteUrl?.length > 1 ? Number.parseInt(splitSiteUrl[1]) : DefaultConfig.port,
		base: SITE_BASE ?? DefaultConfig.base,
		get fullSite() {
			return `${this.site}:${this.port}/${this.base}${trailingSlash ? '/' : ''}`;
		}
	};
}