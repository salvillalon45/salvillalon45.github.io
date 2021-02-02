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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// -----------------------------------------------

export default function ExperienceIndex() {
	return (
		<Layout>
			<main>
				<Container>
					<Row>
						<Col sm={12} xs={12}>
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
									<Link href='https://drive.google.com/file/d/1c_fQ9x7sb9XeWdDHMKADShB_2fRCvB0G/view?usp=sharing'>
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
						</Col>
					</Row>
				</Container>
			</main>
		</Layout>
	);
}
