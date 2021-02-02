// -----------------------------------------------
//
// reusable -> NavBar.js
// Desc: NavBar for all pages in the website
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
// -----------------------------------------------

export default function NavBar(props) {
	function checkNavBar() {
		const { navCheck } = props;
		console.log(navCheck);
		if (navCheck === 'indexContainer') {
			return 'transparentBackground';
		} else {
			return 'navyBackground';
		}
	}

	return (
		<nav
			className={'navbar navbar-expand-lg navbar-light ' + checkNavBar()}
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
	);
}
