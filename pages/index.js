// -----------------------------------------------
//
// pages -> index.js
// Desc: The Home Page
//
// -----------------------------------------------

// -----------------------------------------------
// Redux
// -----------------------------------------------

// -----------------------------------------------
// Imports

// NextJS
import Link from 'next/link';

// Reusable
import Layout from '../components/reusable/layout';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
// -----------------------------------------------

export default function Home() {
	return (
		<Layout>
			{/* ******************************************* */}
			{/* Jumbotron  */}

			<Jumbotron fluid className='jumbotronContainer'>
				<nav
					className={
						'navbar navbar-expand-lg navbar-light '
						// + checkNavBar()
					}
				>
					{console.log('Render Navbar')}
					<div className='container-fluid'>
						<a className='navbar-brand' href='#'>
							Salvador Villalon
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>

						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<ul className='navbar-nav mb-2 mb-lg-0'>
								<Link href='/'>
									<a className='nav-link'>
										<li className='nav-item text25 goldText boldText'>
											Home
										</li>
									</a>
								</Link>

								<Link href='/about'>
									<a className='nav-link'>
										<li className='nav-item text25 goldText boldText'>
											About
										</li>
									</a>
								</Link>

								<Link href='/projects'>
									<a className='nav-link'>
										<li className='nav-item text25 goldText boldText'>
											Projects
										</li>
									</a>
								</Link>

								<Link href='/experience'>
									<a className='nav-link'>
										<li className='nav-item text25 goldText boldText'>
											Experience
										</li>
									</a>
								</Link>

								<Link href='https://drive.google.com/file/d/1c_fQ9x7sb9XeWdDHMKADShB_2fRCvB0G/view?usp=sharing'>
									<a className='nav-link'>
										<li className='nav-item text25 goldText boldText'>
											Resume
										</li>
									</a>
								</Link>
							</ul>
						</div>
					</div>
				</nav>
				<div className='overlay'>
					<div className='jumbotronText container'>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<h1 className='text90 whiteText boldText'>
									Salvador Villalon
								</h1>
								<p className='text50 whiteText boldText'>
									Software Engineer
								</p>
								<p className='text25 whiteText'>
									I make things that make a difference.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Jumbotron>

			<div className='introContainer container'>
				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<p className='text20 whiteText' id='one'>
							Hi. My name is
						</p>
						<p className='text70 whiteText boldText' id='two'>
							Salvador Villalon
						</p>
						<p className='text40 fadeGoldText boldText' id='three'>
							I designed Full Stack Applications
						</p>
					</div>

					<div className='col-md-6 col-sm-6'>
						<p className='text25 sourceSansText whiteText'>
							I'm a software engineer based in Imperial Valley, CA{' '}
						</p>
						<p className='text25 sourceSansText whiteText'>
							specializing in designing, testing, and refactoring{' '}
						</p>
						<p className='text25 sourceSansText whiteText'>
							RESTful APIs, websites, and anything in between.
						</p>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-12 col-sm-12 navigationButtonContainer'>
						<div className='buttonContainer'>
							<Link href='/about'>
								<button className='goldText goldBorder text20 boldText sourceSansText'>
									About
								</button>
							</Link>
						</div>

						<div className='buttonContainer'>
							<Link href='/projects'>
								<button className='goldText goldBorder text20 boldText sourceSansText'>
									Projects
								</button>
							</Link>
						</div>

						<div className='buttonContainer'>
							<Link href='/experience'>
								<button className='goldText goldBorder text20 boldText sourceSansText'>
									Experience
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
