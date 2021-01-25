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
// -----------------------------------------------

export default function Projects() {
	const projectsState = useSelector((state) => state.projects);

	console.log('What is projectStaet');
	console.log(projectsState);

	return (
		<Layout>
			<main>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-sm-12'>
							<p className='text70 whiteText boldText'>
								Project Archive
							</p>
							<p className='text25 goldText'>
								A big list of things I’ve worked on
							</p>
						</div>
					</div>

					<DataList
						columnsArray={[
							'',
							'Year',
							'Title',
							'Made At',
							'Built With',
							'Link',
						]}
						data={projectsState.gitHubReposData}
					/>
				</div>
			</main>
		</Layout>
	);
}
