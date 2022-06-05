import Link from 'next/link';

import * as styles from './header.module.css';

const nav = [
	{name: 'Home', url: ''},
	{name: 'About', url: 'about'},
	{name: 'Projects', url: 'projects'},
	{name: 'Contact',	url: 'contact'}
];

const Header = () => {
	return(
	<header className={styles.site_head}>
		{/* <h1 className="nav_title" id="site_title">LEX</h1> */}
		<nav className={styles.site_nav}>
			{nav.map(link => <Link className={styles.nav_button} href={`/${link.url}`}>{link.name}</Link>)}
		</nav>
	</header>
	);
}

export default Header;