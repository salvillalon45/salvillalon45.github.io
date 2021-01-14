// -----------------------------------------------
//
// experience -> student.js
// Desc: Student page nested inside experience
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
import DataList from '../../components/reusable/DataList';
// -----------------------------------------------

export default function Student() {
	return (
		<Layout>
			<main>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-sm-12'>
							<p className='text70 whiteText boldText'>
								As A Student
							</p>
							<p className='text30 sourceSansText goldText'>
								A big list of things I’ve worked on when I was
								an Undergrad Student
							</p>
						</div>
					</div>

					<div className='educationContainer'>
						<p className='text70 whiteText boldText'>Education</p>
						<DataList
							columnsArray={[
								'',
								'Year',
								'School/Organization',
								'Degree/Certification',
								'Location',
								'Link'
							]}
						/>
					</div>

					<div className='workExperienceContainer'>
						<p className='text70 whiteText boldText'>
							Work Experience
						</p>
						<DataList
							columnsArray={[
								'',
								'Year',
								'Title',
								'Location',
								'Link'
							]}
						/>
					</div>
				</div>
			</main>
		</Layout>
	);
}
