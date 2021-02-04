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
import EducationDataList from '../../components/reusable/DataList/education';
import WorkDataList from '../../components/reusable/DataList/work';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
// -----------------------------------------------

export default function Student() {
	const portfolioState = useSelector((state) => state.portfolio);
	// console.log(portfolioState);
	// console.table(portfolioState.educationData['Formal Education']);

	const [openEducation, setOpenEducation] = useState(false);
	const [openWork, setOpenWork] = useState(false);

	function showArrowIcon(open) {
		if (open) {
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
								<EducationDataList
									columnsArray={[
										'',
										'Year',
										'Title',
										'Location'
									]}
									data={
										portfolioState.educationData[
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
								<EducationDataList
									columnsArray={[
										'',
										'Year',
										'Title',
										'Location'
									]}
									data={
										portfolioState.educationData[
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
								<EducationDataList
									columnsArray={[
										'',
										'Year',
										'Title',
										'Location'
									]}
									data={
										portfolioState.educationData[
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

							<IconButton
								aria-label='expand row'
								size='small'
								onClick={() => {
									setOpenWork(!openWork);
								}}
							>
								{showArrowIcon(openWork)}
							</IconButton>
						</Col>
					</Row>

					<Collapse in={openWork} timeout='auto' unmountOnExit>
						<Row>
							<Col xs={12} sm={12}>
								<div className='line' />
								<WorkDataList
									columnsArray={[
										'',
										'Year',
										'Title',
										'Company',
										'Location'
									]}
									data={portfolioState.workData}
								/>
							</Col>
						</Row>
					</Collapse>
				</Container>
			</main>
		</Layout>
	);
}
