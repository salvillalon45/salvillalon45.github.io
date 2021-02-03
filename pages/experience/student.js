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
import { React, useEffect, useState, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
// -----------------------------------------------

// -----------------------------------------------
// External Imports
import Layout from '../../components/reusable/layout';
import DataList from '../../components/reusable/DataList/education';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
// -----------------------------------------------

export default function Student() {
	const projectsState = useSelector((state) => state.projects);
	console.log(projectsState);
	console.table(projectsState.educationData['Formal Education']);

	const [openEducation, setOpenEducation] = useState(false);

	function showArrowIcon(openEducation) {
		if (openEducation) {
			return <KeyboardArrowUpIcon className='faIcon' />;
		}

		return <KeyboardArrowDownIcon className='faIcon' />;
	}

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

							<IconButton
								aria-label='expand row'
								size='small'
								onClick={() => {
									setOpenEducation(!openEducation);
								}}
							>
								{showArrowIcon(openEducation)}
							</IconButton>
						</Col>
					</Row>

					<Collapse in={openEducation} timeout='auto' unmountOnExit>
						<Row>
							<Col xs={12} sm={12}>
								<p className='text70 whiteText boldText'>
									Formal Education
								</p>
								<div className='line' />
								<DataList
									columnsArray={[
										'',
										'Year',
										'Title',
										'Location'
									]}
									data={
										projectsState.educationData[
											'Formal Education'
										]
									}
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
										'Location'
									]}
									data={
										projectsState.educationData[
											'Online Programs'
										]
									}
								/>
							</Col>
						</Row>

						<Row>
							<Col xs={12} sm={12}>
								<p className='text70 whiteText boldText'>
									Certifications
								</p>
								<div className='line' />
								<DataList
									columnsArray={[
										'',
										'Year',
										'Title',
										'Location'
									]}
									data={
										projectsState.educationData[
											'Certifications'
										]
									}
								/>
							</Col>
						</Row>
					</Collapse>

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
