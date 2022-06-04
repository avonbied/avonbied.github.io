import Head from 'next/head';
import Header from '../components/header';

const title = 'My Projects'

const Page = () => {
	return(
	<>
  <Head><title>{title}</title></Head>
	<Header/>
  <h1>{title}</h1>
	<h1>Hello world!</h1>;
	</>
	);
};

export default Page;