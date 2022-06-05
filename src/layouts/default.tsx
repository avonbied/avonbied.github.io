
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

const Layout = ({ children }) => {
	return(
	<>
	<Head>
		<link rel="stylesheet" href="/styles/reset.css" />
		<link rel="stylesheet" href="/styles/main.css" />
	</Head>
	<Header/>
	<main>{children}</main>
	<Footer/>	
	</>
	);
};

export default Layout;