import { useDispatch } from 'react-redux';
import { loginUser } from '../../services/auth';
import FormLogin from './FormLogin';
import { userActions } from '../../store/user';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AUTH } from '../../constants/localStorage';

export default function LoginPage() {
	const [loginError, setLoginError] = useState(null);

	const dispatch = useDispatch();
	const navigation = useNavigate();
	const onSubmit = userData => {
		loginUser(userData)
			.then(token => {
				dispatch(
					userActions.setUserSession({
						isLogged: true,
						token,
						userInfo: {}, //FIXME: get the user info
					}),
				);
				localStorage.setItem(AUTH.USER_TOKEN, { token, userInfo: {} }); //FIXME: get the user info
				navigation('/dashboard');
			})
			.catch(e => {
				setLoginError('Incorrect credentials');
				setTimeout(() => {
					setLoginError(null);
				}, 2000);
				console.error(e);
			});
	};

	return (
		<main className="w-full h-full bg-[#203144] flex flex-col gap-4">
			<header className="w-[300px] my-[-30px] mx-[-10px]">
				<img src="/images/matching.jpg" className="h-[150px]" />
			</header>
			<div className="flex-1 flex  flex-col gap-4 justify-center items-center mt-[-100px]">
				{loginError ? (
					<div className="py-2 px-4 bg-red-400 text-white front-semibold rounded-md">
						{loginError}
					</div>
				) : (
					<></>
				)}
				<FormLogin onSubmit={onSubmit} />
			</div>
		</main>
	);
}
