export interface Repo {

	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	html_url: string;
	description?: string;
	fork: boolean;
	url: string,
	commits_url: string;
	contents_url: string;

	git_refs_url: string;
	git_tags_url: string;
	labels_url: string;
	languages_url: string; // {[lang: string]: number}
	milestones_url: string;
	tags_url: string;
	clone_url: string;
	homepage?: string;

	size: number;

	forks_count: number;
	stargazers_count: number;
	watchers_count: number;
	open_issues_count: number;
	subscribers_count: number;
	network_count: number;

	is_template: boolean;
	topics: string[];
	archived: boolean;
	disabled: boolean;
	visibility: string;

	pushed_at: Date;
	created_at: Date;
	updated_at: Date;
	license?: {
		key: string;
		name: string;
		url?: string;
		spdx_id?: string;
		node_id: string;
		html_url: string;
	};
	organization?: User;
	parent?: Repo;
	forks: number;
	master_branch: string;
	open_issues: number;
	watchers: number;
}

export interface User {

}