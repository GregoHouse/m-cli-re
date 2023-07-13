import { useForm } from 'react-hook-form';
import { PasswordInput } from '../../components/inputs/Input';
import { Validations } from '../../utils/validations';

export default function FormLogin({ onSubmit }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-6 bg-[#2f445c] px-8 py-10 rounded-xl">
			<header className="text-center text-3xl font-semibold mb-2">
				Inicio de Sesión
			</header>
			<div className="w-full text-lg">
				<label htmlFor="email-login-form" className="block mb-2 font-semibold">
					Email
				</label>
				<input
					className="rounded-md p-2 text-black w-full"
					id="email-login-form"
					type="email"
					placeholder=""
					aria-invalid={errors['email'] ? 'true' : 'false'}
					{...register('email', {
						required: true,
						pattern: Validations.email,
					})}
				/>
				{errors['email'] && (
					<span className="text-red-400 font-semibold text-sm block mt-1">
						Este campo es requerido.
					</span>
				)}
			</div>
			<div className="w-full text-lg">
				<label
					htmlFor="password-login-form"
					className="block mb-2 font-semibold">
					Password
				</label>
				<PasswordInput
					id="password-login-form"
					className="bg-white text-black stroke-gray-800"
					placeholder=""
					aria-invalid={errors['password'] ? 'true' : 'false'}
					hookControl={() =>
						register('password', {
							required: true,
							minLength: 4,
						})
					}
				/>
				{errors['password'] && (
					<span className="text-red-400 font-semibold text-sm block mt-1">
						Este campo es requerido.
					</span>
				)}
			</div>
			<button
				type="submit"
				className="uppercase bg-[#0075f8] py-2 px-3 font-semibold rounded-md w-full hover:bg-opacity-80 transition">
				Iniciar Sesión
			</button>
		</form>
	);
}
