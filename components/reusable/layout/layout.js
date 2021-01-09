// -----------------------------------------------
//
// layouts -> layout.js
// Desc: Reusable Layout for all pages
//
// -----------------------------------------------

// -----------------------------------------------
// Redux
// -----------------------------------------------

// -----------------------------------------------
// Necessary Imports
import Head from 'next/head';
// -----------------------------------------------

// -----------------------------------------------
// External Imports
import Footer from '../Footer';
// -----------------------------------------------

export default function Layout({ children, home }) {
	return (
		<div className='container-fluid overallContainer'>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>Salvador Villalon</title>
				<link rel='icon' href='../../favicon.ico' />
				{/* <link rel='icon' href='/favicon.ico' /> */}

				<meta name='title' content='Salvador Villalon' />

				<meta
					name='description'
					content='Salvador Villalon Official Website'
				/>

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://metatags.io/' />
				<meta
					property='twitter:title'
					content='Salvador Villalon Official Website'
				/>
				<meta
					property='twitter:description'
					content='Salvador Villalon Official Website'
				/>
				<meta
					property='twitter:image'
					content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
				/>
			</Head>

			{/* Navbar here */}

			<main>{children}</main>

			<Footer />
		</div>
	);
}
