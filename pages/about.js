// -----------------------------------------------
//
// pages -> about.js
// Desc: About page
//
// -----------------------------------------------

// -----------------------------------------------
// Redux
// -----------------------------------------------

// -----------------------------------------------
// Necessary Imports
import Link from 'next/link';
// -----------------------------------------------

// -----------------------------------------------
// External Imports
import Layout from '../components/reusable/layout';

// Images
import AboutPicture from '../public/images/about.jpg';
// import LinkedIn from '../public/fontawesome/svgs/brands/linkedin.svg';
// import GitHub from '../public/fontawesome/svgs/brands/github-square.svg';
// import Medium from '../public/fontawesome/svgs/brands/medium.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// -----------------------------------------------

export default function About() {
	return (
		<Layout>
			<main>
				{/* <div className='container'> */}
				<Container>
					<Row>
						{/* <div className='row'> */}
						<Col xs={12}>
							{/* <div className='col-md-6 col-sm-6'> */}
							<div className='aboutImageContainer'></div>
							{/* </div> */}
						</Col>

						<Col xs={12}>
							{/* <div
							className='col-md-6 col-sm-6'
							id='rightSideContainer'
						> */}
							<p className='text70 whiteText boldText'>About</p>
							<p className='text20 whiteText'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Aenean a eros accumsan dapibus
								ac non velit. Suspendisse lobortis quis neque
								sed dictum. Morbi tincidunt euismod facilisis.
								Nunc et lacus placerat, laoreet diam sed,
							</p>
							<p className='text20 whiteText'>
								fringilla lacus. Integer viverra tempor odio.
								Suspendiss Suspendisse lobortis quis neque sed
								dictum. Morbi tincidunt euismod facilisis
								laoreet diam sed, fringilla lacus. Integer
							</p>
							<p className='text20 whiteText'>
								viverra tempor odio. Suspendiss Suspendisse
								lobortis quis neque sed dictum. Morbi tincidunt
								euismod facilisis laoreet diam sed, fringilla
								lacus. Integer viverra tempor odio. Suspendiss
							</p>

							<div className='iconsContainer'>
								<Link href='https://www.linkedin.com/in/salvadorvillalon/'>
									<a>
										<i className='fab fa-linkedin faIcon' />
									</a>
								</Link>

								<Link href='https://github.com/salvillalon45'>
									<a>
										<i className='fab fa-github-square faIcon' />
									</a>
								</Link>

								<Link href='https://medium.com/@salvav1'>
									<a>
										<i className='fab fa-medium faIcon' />
									</a>
								</Link>

								<Link href='mailto:salvadorvillalon54@gmail.com'>
									<a>
										<i class='fas fa-envelope-square faIcon' />
									</a>
								</Link>
							</div>
						</Col>
						{/* </div> */}
						{/* </div> */}
					</Row>
					{/* </div> */}
				</Container>
			</main>
		</Layout>
	);
}
