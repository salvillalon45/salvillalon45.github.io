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
// import ../util/firebase/firebaseConfig.js
import firebase from 'firebase/app';
import initFirebase from '../../../util/firebase/firebase';
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

				
				

				{/* <script> */}
  					{/* // Your web app's Firebase configuration */}
  					{/* // For Firebase JS SDK v7.20.0 and later, measurementId is optional */}
  					{/* var firebaseConfig = {
					apiKey: "AIzaSyCbR8sO2MQlGZT3WvU-hLYIu6SRN_Bh6Eo",
					authDomain: "portfolio-v3-84ea4.firebaseapp.com",
					projectId: "portfolio-v3-84ea4",
					storageBucket: "portfolio-v3-84ea4.appspot.com",
					messagingSenderId: "278030025109",
					appId: "1:278030025109:web:c5b16998bf46700a00369c",
					measurementId: "G-104Y5D2EMB"
  					}; */}
  					{/* // Initialize Firebase */}
  					{/* firebase.initializeApp(firebaseConfig); */}
  					{/* firebase.analytics(); */}
				{/* </script> */}
				{/* <script src="../util/firebase/firebaseConfig.js"></script> */}
			</Head>
			<body>

			<NavBar navCheck={checkPage()} />

			<main>{children}</main>

			<Footer />
			{/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
				<script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"></script>

{/* <!-- TODO: Add SDKs for Firebase products that you want to use */}
 {/* https://firebase.google.com/docs/web/setup#available-libraries --> */}
<script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-analytics.js"></script>
<script src="../../../util/firebase/firebase"></script>	
	{/* {initFirebase()} */}
			</body>
		</div>
	);
}
