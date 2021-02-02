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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// -----------------------------------------------

export default function Student() {
	return (
		<Layout>
			<main>
				<Container>
					<Row>
						<Col sm={12} xs={12}>
							<p className='text70 whiteText boldText'>
								As A Student
							</p>
							<p className='text30 sourceSansText goldText'>
								A big list of things I’ve worked on when I was
								an Undergrad Student
							</p>
						</Col>
					</Row>

					<Row className='educationContainer'>
						<Col xs={12} sm={12}>
							<p className='text70 whiteText boldText'>
								Education
							</p>
							<div className='line' />
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
						</Col>
					</Row>

					<Row className='workExperienceContainer'>
						<Col xs={12} sm={12}>
							<p className='text70 whiteText boldText'>
								Work Experience
							</p>
							<div className='line' />
							<DataList
								columnsArray={[
									'',
									'Year',
									'Title',
									'Location',
									'Link'
								]}
							/>
						</Col>
					</Row>
				</Container>
			</main>
		</Layout>
	);
}
