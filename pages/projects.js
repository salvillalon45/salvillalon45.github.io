// -----------------------------------------------
//
// pages -> projects.js
// Desc: Projects page
//
// -----------------------------------------------

// -----------------------------------------------
// Redux
// -----------------------------------------------

// -----------------------------------------------
// Necessary Imports
import { React, useEffect, useState, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// -----------------------------------------------

// -----------------------------------------------
// External Imports
import Layout from '../components/reusable/layout';
import DataList from '../components/reusable/DataList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// -----------------------------------------------

export default function Projects() {
	const projectsState = useSelector((state) => state.projects);

	console.log('What is projectStaet');
	console.log(projectsState);

	return (
		<Layout>
			<main>
				<Container>
					<Row>
						<Col xs={12} sm={12}>
							<p className='text70 whiteText boldText'>
								Project Archive
							</p>

							<p className='text25 goldText'>
								A big list of things I’ve worked on
							</p>

							<p className='text25 goldText'>
								You can find more of my projects on GitHub!
							</p>

							<a
								className='btn btn-primary'
								href='https://github.com/salvillalon45'
								role='button'
							>
								Find more on GitHub
							</a>
						</Col>
					</Row>

					<Row>
						<Col xs={12} sm={12}>
							<p className='text70 whiteText boldText'>
								Personal
							</p>
							<div className='line' />
							<DataList
								columnsArray={[
									'',
									'Year',
									'Title',
									'Made At',
									'Built With',
									'Link'
								]}
								data={projectsState.projectsData.personal}
								flag={'projects'}
							/>
						</Col>
					</Row>

					<Row>
						<Col xs={12} sm={12}>
							<p className='text70 whiteText boldText'>
								Online Programs
							</p>
							<div className='line' />
							<DataList
								columnsArray={[
									'',
									'Year',
									'Title',
									'Made At',
									'Built With',
									'Link'
								]}
								data={projectsState.projectsData.onlinePrograms}
								flag={'projects'}
							/>
						</Col>
					</Row>

					<Row>
						<Col xs={12} sm={12}>
							<p className='text70 whiteText boldText'>
								Work and Internships
							</p>
							<div className='line' />
							<DataList
								columnsArray={[
									'',
									'Year',
									'Title',
									'Made At',
									'Built With',
									'Link'
								]}
								data={
									projectsState.projectsData.workInternships
								}
								flag={'projects'}
							/>
						</Col>
					</Row>

					<Row>
						<Col xs={12} sm={12}>
							<p className='text70 whiteText boldText'>
								Hackathons
							</p>
							<div className='line' />
							<DataList
								columnsArray={[
									'',
									'Year',
									'Title',
									'Made At',
									'Built With',
									'Link'
								]}
								data={projectsState.projectsData.hackathons}
								flag={'projects'}
							/>
						</Col>
					</Row>
				</Container>
			</main>
		</Layout>
	);
}
