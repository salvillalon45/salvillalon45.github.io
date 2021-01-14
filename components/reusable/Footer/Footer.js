// -----------------------------------------------
//
// reusable -> Footer.js
// Desc: Footer for all pages in the website
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

export default function Footer() {
	return (
		// <div className='container-fluid'>
		// <div className='row'>
		// <div className='col-md-12 col-sm-12'>
		<footer className='footer'>
			<ul>
				<Link href='/'>
					<a>
						<li className='text20 goldText boldText'>
							Made by Salvador Villalon
						</li>
					</a>
				</Link>

				<Link href='https://www.linkedin.com/in/salvadorvillalon/'>
					<a>
						<li className='text20 goldText boldText'>LinkedIn</li>
					</a>
				</Link>

				<Link href='https://github.com/salvillalon45'>
					<a>
						<li className='text20 goldText boldText'>GitHub</li>
					</a>
				</Link>

				<Link href='https://medium.com/@salvav1'>
					<a>
						<li className='text20 goldText boldText'>Medium</li>
					</a>
				</Link>

				<Link href='https://salvillalon45.github.io/personal_website_version_2/'>
					<a>
						<li className='text20 goldText boldText'>
							See My Older Websites
						</li>
					</a>
				</Link>
			</ul>
		</footer>
		// {/* </div> */}
		// 	</div>
		// </div>
	);
}
