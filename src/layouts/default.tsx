
import Header from '../components/header';
import Footer from '../components/footer';

const title = 'My Projects'

const Layout = ({ children }) => {
	return(
	<>
	<Header/>
	<h1>{title}</h1>
	<main>{children}</main>
	<Footer/>	
	</>
	);
};

export default Layout;