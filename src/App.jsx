import { Provider, useDispatch } from 'react-redux';
import { store } from './store/';
import Router from './router';
import { useEffect } from 'react';
import { userActions } from './store/user';
import { AUTH } from './constants/localStorage';

// Component created to get the provider states
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const sessionSaved = localStorage.getItem(AUTH.USER_SESSION);
		if (sessionSaved) {
			const userSession = JSON.parse(sessionSaved);
			dispatch(
				userActions.setUserSession({
					isLogged: true,
					token: userSession.token,
					userInfo: userSession.userInfo,
				}),
			);
		}
	}, [dispatch]);

	return <Router />;
}

function WrapperApp() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}

export default WrapperApp;
