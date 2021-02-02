// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Link from 'next/link';
// import JPMC from '../../../public/images/projects/jpmc.PNG';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// function Row(props) {
// 	console.log('Inside row()');
// 	const { row, projectData } = props;
// 	const [open, setOpen] = useState(false);
// 	const year = Object.values(projectData)[0].year;
// 	const description = Object.values(projectData)[0].description;
// 	const madeAt = Object.values(projectData)[0].made_at;
// 	const tech = Object.values(projectData)[0].tech;
// 	const title = Object.values(projectData)[0].title;
// 	const gitHublink = Object.values(projectData)[0].github_repo_link;
// 	const projectHomePageLink = Object.values(projectData)[0].homepage_link;
// 	const [id, setId] = useState('');
// 	console.log('What is open:: ' + open);
// 	console.log(projectData);
// 	// console.log({ index, id });

// 	function showArrowIcon(open) {
// 		console.log('Inside showArrowIcon');
// 		console.log({ open });
// 		if (open) {
// 			console.log('Show UP');
// 			// return <p>YES</p>;
// 			// return <i className='fas fa-angle-up faIcon' />;
// 			return <KeyboardArrowUpIcon />;
// 		}
// 		console.log('Show DOWN');
// 		// return <p>NO</p>;
// 		return <KeyboardArrowDownIcon />;
// 		// return <i className='fas fa-angle-down faIcon' />;
// 		// open ? (
// 		// 	<i className='fas fa-angle-up faIcon' />
// 		// ) : (
// 		// 	<i className='fas fa-angle-down faIcon' />
// 		// );
// 	}

// 	const result = showArrowIcon(open);
// 	console.log(result);

// 	return (
// 		<React.Fragment>
// 			<TableRow>
// 				<TableCell>
// 					<IconButton
// 						aria-label='expand row'
// 						size='small'
// 						onClick={() => {
// 							console.log('In OnClikc');
// 							console.log({ open });
// 							// if (index === id) {
// 							// console.log({ index, id });
// 							setOpen(!open);
// 							// }
// 							// setId(index);
// 							console.log({ open });
// 						}}
// 					>
// 						{/* {showArrowIcon(open)} */}
// 						{result}
// 						{console.log('What is open right before:: ' + open)}
// 						{/* {open ? (
// 							<i className='fas fa-angle-up faIcon' />
// 						) : (
// 							<i className='fas fa-angle-down faIcon' />
// 						)} */}
// 					</IconButton>
// 				</TableCell>

// 				<TableCell component='th' scope='row'>
// 					{year}
// 				</TableCell>

// 				<TableCell className='projectTitle' align='left'>
// 					{title}
// 				</TableCell>

// 				<TableCell align='left'>{madeAt}</TableCell>

// 				<TableCell align='left'>{tech}</TableCell>

// 				<TableCell align='left'>
// 					<div className='linksContainer'>
// 						<Link href={gitHublink}>
// 							<a>
// 								<i className='fab fa-github-square faIcon' />
// 							</a>
// 						</Link>

// 						<Link
// 							href={{
// 								pathname: projectHomePageLink
// 							}}
// 						>
// 							<a>
// 								<i className='fas fa-external-link-alt faIcon' />
// 							</a>
// 						</Link>
// 					</div>
// 				</TableCell>
// 			</TableRow>

// 			<TableRow>
// 				<TableCell
// 					style={{ paddingBottom: 0, paddingTop: 0 }}
// 					colSpan={6}
// 				>
// 					<Collapse in={open} timeout='auto' unmountOnExit>
// 						{/* <Box margin={1}> */}
// 						<div className='container'>
// 							<div className='row'>
// 								<div className='col-md-12 col-sm-12 dataDropdownContainer'>
// 									<div className='dataContainer'>
// 										<p className='text10 sourceSansText whiteText boldText'>
// 											About {title}
// 										</p>
// 										<p className='text10 sourceSansText whiteText'>
// 											{description}
// 										</p>
// 										<p className='text10 sourceSansText whiteText'>
// 											<b>Technologies Used:</b> {tech}
// 										</p>
// 									</div>

// 									<div className='dataPictureContainer'>
// 										<img
// 											className='img-fluid'
// 											src={JPMC}
// 											alt='Picture about Project'
// 										/>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</Collapse>
// 				</TableCell>
// 			</TableRow>
// 		</React.Fragment>
// 	);
// }

// export default Row;
