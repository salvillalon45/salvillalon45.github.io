// -----------------------------------------------
//
// reusable -> Datalist.js
// Desc: Reusable DataList to show info
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
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// Images
import JPMC from '../../../public/images/projects/jpmc.PNG';
// -----------------------------------------------

export default function DataList(props) {
	const [open, setOpen] = useState(false);

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

	function createTableRows() {
		const { data } = props;
		console.log('What is data');
		console.log(data);

		if (data !== null && data !== undefined) {
			return Object.entries(data).map((dataArray) => {
				return dataArray[1].map((dataEntry) => {
					const repo = Object.values(dataEntry)[0];
					const createdAt = repo.created_at;
					const year = createdAt.split('-')[0];
					const name = repo.name;
					const gitHublink = 'https:' + repo.git_url.slice(4);
					const projectHomePageLink = repo.homepage;

					return (
						<React.Fragment>
							<TableRow>
								<TableCell>
									<IconButton
										aria-label='expand row'
										size='small'
										onClick={() => setOpen(!open)}
									>
										{open ? (
											<i className='fas fa-angle-up faIcon' />
										) : (
											<i className='fas fa-angle-down faIcon' />
										)}
									</IconButton>
								</TableCell>

								<TableCell component='th' scope='row'>
									{year}
								</TableCell>

								<TableCell
									className='projectTitle'
									align='left'
								>
									{name}
								</TableCell>

								<TableCell align='right'>
									Calexico, CA
								</TableCell>

								<TableCell align='right'>
									Next.js,Bootstrap
								</TableCell>

								<TableCell align='right'>
									<div className='linksContainer'>
										<Link href={gitHublink}>
											<a>
												<i className='fab fa-github-square faIcon' />
											</a>
										</Link>

										<Link
											href={{
												pathname: projectHomePageLink,
											}}
										>
											<a>
												<i className='fas fa-external-link-alt faIcon' />
											</a>
										</Link>
									</div>
								</TableCell>
								{/* <TableCell align='right'>
									<Link href='https://www.google.com/maps'>
										<a>
											<i className='fas fa-external-link-alt faIcon' />
										</a>
									</Link>
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
										{/* <Box margin={1}> */}
										<div className='container'>
											<div className='row'>
												<div className='col-md-12 col-sm-12 dataDropdownContainer'>
													<div className='dataContainer'>
														<p className='text10 sourceSansText whiteText boldText'>
															About Personal
															Website Version 3
														</p>
														<p className='text10 sourceSansText whiteText'>
															This is a 24 hours
															Hackathon in
															Chicago, Illinois. I
															became Lead
															Front-End Developer
															to create the
															Front-End of the
															This was my first
															hackathon and we
															received 2nd place
															winner out of
														</p>
														<p className='text10 sourceSansText whiteText'>
															<b>
																Technologies
																Used:
															</b>{' '}
															HTML, CSS,
															Bootstrap, Git,
															GitHub, Django
														</p>
													</div>

													<div className='dataPictureContainer'>
														<img
															className='img-fluid'
															src={JPMC}
															alt='Picture about Project'
														/>
													</div>
												</div>
											</div>
										</div>
										{/* <Typography
												variant='h6'
												gutterBottom
												component='div'
											>
												History
											</Typography> */}
										{/* <Table size='small' aria-label='purchases'>
												<TableHead>
													<TableRow>
														<TableCell>Date</TableCell>
														<TableCell>Customer</TableCell>
														<TableCell align='right'>
															Amount
														</TableCell>
														<TableCell align='right'>
															Total price ($)
														</TableCell>
													</TableRow>
												</TableHead> */}
										{/* <TableBody> */}
										{/* {row.history.map((historyRow) => (
														<TableRow key={historyRow.date}>
															<TableCell
																component='th'
																scope='row'
															>
																{historyRow.date}
															</TableCell>
															<TableCell>
																{historyRow.customerId}
															</TableCell>
															<TableCell align='right'>
																{historyRow.amount}
															</TableCell>
															<TableCell align='right'>
																{Math.round(
																	historyRow.amount *
																		row.price *
																		100
																) / 100}
															</TableCell>
														</TableRow>
													))}
												</TableBody> */}
										{/* </Table> */}
										{/* </Box> */}
									</Collapse>
								</TableCell>
							</TableRow>
						</React.Fragment>
					);
				});
			});
		}

		return null;
	}

	return (
		<div className='row' id='dataListContainer'>
			<TableContainer component={Paper}>
				<Table aria-label='collapsible table'>
					<TableHead>
						<TableRow>{createTableCells()}</TableRow>
					</TableHead>
					<TableBody>{createTableRows()}</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
