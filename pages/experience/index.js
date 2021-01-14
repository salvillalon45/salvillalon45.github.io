// -----------------------------------------------
//
// pages -> experience.js
// Desc: Experience page
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
import Layout from '../../components/reusable/layout';
// -----------------------------------------------

export default function ExperienceIndex() {
	return (
		<Layout>
			<main>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-sm-12'>
							<p className='text70 whiteText boldText'>
								Experience
							</p>

							<p className='text35 whiteText title'>
								Other Places to See My Experiences
							</p>

							<div className='experienceButtonContainer'>
								<div className='buttonContainer'>
									<Link href='https://www.linkedin.com/in/salvadorvillalon/'>
										<button className='goldText goldBorder text20 boldText sourceSansText'>
											LinkedIn
										</button>
									</Link>
								</div>

								<div className='buttonContainer'>
									<Link href='../public/documents/Villalon_Salvador_Resume.pdf'>
										<button className='goldText goldBorder text20 boldText sourceSansText'>
											Resume
										</button>
									</Link>
								</div>
							</div>

							<p className='text35 whiteText title'>
								Take a look at my experiences in different parts
								of my life
							</p>

							<div className='experienceButtonContainer'>
								<div className='buttonContainer'>
									<Link href='/experience/student'>
										<button className='goldText goldBorder text20 boldText sourceSansText'>
											Student
										</button>
									</Link>
								</div>

								<div className='buttonContainer'>
									<Link href='/experience/earlyProfessional'>
										<button className='goldText goldBorder text20 boldText sourceSansText'>
											Early Professional
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}
