// -----------------------------------------------
//
// pages -> _app.js
// Desc: Page that runs program
//
// -----------------------------------------------

// -----------------------------------------------
// Redux
// -----------------------------------------------

// -----------------------------------------------
// Necessary Imports
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { createWrapper, withRedux } from 'next-redux-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.less';
// -----------------------------------------------

// -----------------------------------------------
// External Imports
import { getGithubRepos, readGitHubRepos } from '../util/firebase/githubApi';
import {
	getEducationData,
	readEducationData
} from '../util/firebase/educationApi';
import { readDataFromFirebase } from '../util/firebase/firebaseApi';
import { storePortfolioData } from '../store/actions/portfolioActions';
// -----------------------------------------------

function MyApp({ Component, pageProps }) {
	const dispatch = useDispatch();

	const projectsState = useSelector((state) => state.projects);
	useEffect(() => {
		console.log('Start useEffect in App');

		// Retrieve Data from Firebase GitHubRepo db
		readDataFromFirebase('projects').then((result) => {
			// Store it in redux store
			dispatch(storePortfolioData(result, 'projects'));
		});

		readDataFromFirebase('education').then((result) => {
			// Store it in redux store
			dispatch(storePortfolioData(result, 'education'));
		});

		readDataFromFirebase('work').then((result) => {
			// Store it in redux store
			dispatch(storePortfolioData(result, 'work'));
		});

		console.log('Finished useEffect in App');
	}, []);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
