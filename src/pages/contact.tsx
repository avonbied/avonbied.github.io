import Head from 'next/head';

const title = 'Contact Me';

const Page = () => {
	return(
		<>
		<Head>
			<title>{title}</title>
		</Head>
    <header id="site_head">
      <nav>
        <button><i className="ms-Icon ms-Icon--Back" aria-label="Previous Page"></i>
        </button><button><i className="ms-Icon ms-Icon--Forward" aria-label="Next Page"></i></button>
      </nav>
      <div></div>
    </header>
		</>
	);
};

export default Page;