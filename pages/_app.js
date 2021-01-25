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
import '../styles/global.less';
// -----------------------------------------------

// -----------------------------------------------
// External Imports
import { getGithubRepos, readGitHubRepos } from '../util/firebase/githubApi';
import { storeGitHubRepos } from '../store/actions/projectsActions';
// -----------------------------------------------

function MyApp({ Component, pageProps }) {
	const dispatch = useDispatch();

	const projectsState = useSelector((state) => state.projects);
	useEffect(() => {
		// Get GitHub Repos
		// getGithubRepos();

		// Retrieve Data from Firebase GitHubRepo db
		readGitHubRepos().then((result) => {
			// Store it in redux store
			dispatch(storeGitHubRepos(result));
		});
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
