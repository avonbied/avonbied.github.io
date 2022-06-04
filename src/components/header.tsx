import Link from 'next/link';

const nav = [
	{name: 'Home', url: 'index'},
	{name: 'About', url: 'about'},
	{name: 'Projects', url: 'projects'},
	{name: 'Contact',	url: 'contact'}
];

const Header = () => {
	return(
	<header id="site_head">
		<h1 className="nav_title" id="site_title">LEX</h1>
		<nav id="site_nav">
			{nav.map(link => <Link className="nav_button" href={`/${link.url}`}>{link.name}</Link>)}
		</nav>
	</header>
	);
}

export default Header;