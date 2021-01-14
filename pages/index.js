import Layout from '../components/reusable/layout';
import Link from 'next/link';

export default function Home() {
	return (
		<Layout>
			<main>
				<div className='jumbotron'>
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

				<div className='introContainer container'>
					<div className='row'>
						<div className='col-md-6 col-sm-6'>
							<p className='text20 whiteText' id='one'>
								Hi. My name is
							</p>
							<p className='text70 whiteText boldText' id='two'>
								Salvador Villalon
							</p>
							<p
								className='text40 fadeGoldText boldText'
								id='three'
							>
								I designed Full Stack Applications
							</p>
						</div>

						<div className='col-md-6 col-sm-6'>
							<p className='text25 sourceSansText whiteText'>
								I'm a software engineer based in Imperial
								Valley, CA{' '}
							</p>
							<p className='text25 sourceSansText whiteText'>
								specializing in designing, testing, and
								refactoring{' '}
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
			</main>
		</Layout>
	);
}
