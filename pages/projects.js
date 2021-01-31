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
				{/* <div className='container'> */}
				<Container class>
					<Row>
						{/* <div className='row'> */}
						{/* <div className='col-md-12 col-sm-12'> */}
						<Col xs={12} sm={12}>
							<p className='text70 whiteText boldText'>
								Project Archive
							</p>
							<p className='text25 goldText'>
								A big list of things I’ve worked on
							</p>
							{/* </div> */}
							{/* </div> */}
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
								data={projectsState.gitHubReposData.personal}
							/>
						</Col>
						{/* </div> */}
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
								data={
									projectsState.gitHubReposData.onlinePrograms
								}
							/>
						</Col>
						{/* </div> */}
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
									projectsState.gitHubReposData
										.workInternships
								}
							/>
						</Col>
						{/* </div> */}
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
								data={projectsState.gitHubReposData.hackathons}
							/>
						</Col>
						{/* </div> */}
					</Row>
				</Container>
			</main>
		</Layout>
	);
}
