import { useDispatch } from 'react-redux';
import { loginUser } from '../../services/auth';
import FormLogin from './FormLogin';
import { userActions } from '../../store/user';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const onSubmit = userData => {
		loginUser(userData)
			.then(token => {
				dispatch(
					userActions.setUserInfo({
						isLogged: true,
						user: {
							token,
						},
					}),
				);
				localStorage.setItem('user-token', token); // Save the user Token
				navigation('/dashboard');
			})
			.catch(e => {
				alert('Incorrect credentials');
				console.error(e);
			});
	};

	return (
		<main className="w-full h-full bg-[#203144] flex flex-col gap-4">
			<header className="w-[300px] my-[-30px] mx-[-10px]">
				<img src="/images/matching.jpg" className="h-[150px]" />
			</header>
			<div className="flex-1 flex justify-center items-center mt-[-100px]">
				<FormLogin onSubmit={onSubmit} />
			</div>
		</main>
	);
}
