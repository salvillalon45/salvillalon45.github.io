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
import { useRouter } from 'next/router';
// -----------------------------------------------

// -----------------------------------------------
// External Imports
import Footer from '../Footer';
import NavBar from '../NavBar';
// -----------------------------------------------

export default function Layout({ children, home }) {
	function checkPage() {
		const router = useRouter();
		const page = router.pathname;
		let result = 'indexContainer';

		if (page === '/about') {
			result = 'aboutContainer';
		} else if (page === '/experience' || page === '/experience/student') {
			result = 'experienceContainer';
		} else if (page === '/projects') {
			result = 'projectsContainer';
		}

		return result;
	}

	return (
		<div className='overallContainer' id={checkPage()}>
			{/* // <div className='container-fluid overallContainer'> */}
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>Salvador Villalon</title>
				<link rel='icon' href='../../favicon.ico' />

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

				<script
					defer
					src='https://use.fontawesome.com/releases/v5.15.1/js/all.js'
					integrity='sha384-9/D4ECZvKMVEJ9Bhr3ZnUAF+Ahlagp1cyPC7h5yDlZdXs4DQ/vRftzfd+2uFUuqS'
					crossorigin='anonymous'
				></script>
				
				{/* <script defer src='./js/bootstrap.js' crossorigin='anonymous' /> */}
				<script
					src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
					integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
					crossorigin='anonymous'
				></script>
			</Head>

			<NavBar navCheck={checkPage()} />

			<main>{children}</main>

			<Footer />
		</div>
	);
}
