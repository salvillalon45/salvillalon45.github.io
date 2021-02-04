// -----------------------------------------------
//
// reusable -> Datalist.js
// Desc: Reusable DataList to show info
//
// -----------------------------------------------

// -----------------------------------------------
// Necessary Imports
import Link from 'next/link';
// -----------------------------------------------

// -----------------------------------------------
// External Imports
import React, { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// -----------------------------------------------

export default function EducationDataList(props) {
	function createTableCells() {
		const { columnsArray } = props;

		return columnsArray.map((col, index) => {
			return (
				<TableCell key={index} align='center'>
					{col}
				</TableCell>
			);
		});
	}

	function showArrowIcon(open) {
		if (open) {
			return <KeyboardArrowUpIcon className='faIcon' />;
		}

		return <KeyboardArrowDownIcon className='faIcon' />;
	}

	function createTableRows() {
		const { data } = props;

		if (data !== null && data !== undefined) {
			const sortedData = data.sort(
				(a, b) => Object.values(b)[0].year - Object.values(a)[0].year
			);

			return sortedData.map((projectData, index) => {
				const {
					year,
					description,
					made_at,
					tech,
					title,
					picture
				} = Object.values(projectData)[0];

				const certificate_link = Object.values(projectData)[0]
					.certificate_link;
				const [open, setOpen] = useState(false);

				return (
					<React.Fragment>
						<TableRow>
							<TableCell>
								<IconButton
									aria-label='expand row'
									size='small'
									onClick={() => {
										setOpen(!open);
									}}
								>
									{showArrowIcon(open)}
								</IconButton>
							</TableCell>

							<TableCell
								component='th'
								scope='row'
								align='center'
							>
								{year}
							</TableCell>

							<TableCell className='projectTitle' align='center'>
								{title}
							</TableCell>

							<TableCell align='center'>{made_at}</TableCell>

							{/* <TableCell align='left'>
								<div className='linksContainer'>
									<Link href={certificate_link}>
										<a>
											<i className='fab fa-github-square faIcon' />
										</a>
									</Link>
								</div>
							</TableCell> */}
						</TableRow>

						<TableRow>
							<TableCell
								style={{ paddingBottom: 0, paddingTop: 0 }}
								colSpan={6}
							>
								<Collapse
									in={open}
									timeout='auto'
									unmountOnExit
								>
									<div className='container'>
										<div className='row'>
											<div className='col-md-12 col-sm-12 dataDropdownContainer'>
												<div className='dataContainer'>
													<p className='text10 sourceSansText whiteText boldText'>
														About {title}
													</p>
													<p className='text10 sourceSansText whiteText'>
														{description}
													</p>
													<p className='text10 sourceSansText whiteText'>
														<b>
															Technologies Used:
														</b>{' '}
														{tech}
													</p>
												</div>

												<div className='dataPictureContainer'>
													<img
														className='img-fluid'
														src={picture}
														alt='Picture'
													/>
												</div>
											</div>
										</div>
									</div>
								</Collapse>
							</TableCell>
						</TableRow>
					</React.Fragment>
				);
			});
			// });
		}

		return null;
	}

	const { data } = props;

	let sortedData;
	if (data !== null && data !== undefined) {
		sortedData = data.sort(
			(a, b) => Object.values(b)[0].year - Object.values(a)[0].year
		);
	}

	return (
		<div className='row' id='dataListContainer'>
			<TableContainer component={Paper}>
				<Table aria-label='collapsible table'>
					<TableHead>
						<TableRow>{createTableCells()}</TableRow>
					</TableHead>
					<TableBody>{createTableRows()}</TableBody>
					{/* <TableBody> */}
					{/* {
							sortedData.map((projectData, index) => {
								<Row projectData={projectData} />
							))}
						} */}
					{/* <TableBody>
							{sortedData.map((projectData) => (
								<Row projectData={projectData} />
							))}
						</TableBody> */}
					{/* </TableBody> */}
				</Table>
			</TableContainer>
		</div>
	);
}
