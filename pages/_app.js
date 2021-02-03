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
import {
	storeProjectsData,
	storeEducationData
} from '../store/actions/projectsActions';
// -----------------------------------------------

function MyApp({ Component, pageProps }) {
	const dispatch = useDispatch();

	const projectsState = useSelector((state) => state.projects);
	useEffect(() => {
		console.log('Start useEffect in App');
		// Get GitHub Repos
		// getGithubRepos();

		// Retrieve Data from Firebase GitHubRepo db
		readGitHubRepos().then((result) => {
			// Store it in redux store
			dispatch(storeProjectsData(result));
		});

		readEducationData().then((result) => {
			// Store it in redux store
			dispatch(storeEducationData(result));
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
