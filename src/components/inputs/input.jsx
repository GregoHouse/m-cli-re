import { useState } from 'react';
import { ClosedEyeIcon, OpenEyeIcon } from '../icons';

export const PasswordInput = ({
	show,
	className,
	inputStyle,
	hookControl,
	...rest
}) => {
	const [showPassword, setShowPassword] = useState(show);
	return (
		<div className={`!relative rounded-md  ${className}`}>
			<input
				className={`rounded-md w-ull h-full p-2 pr-8 ${inputStyle}`}
				{...rest}
				{...(typeof hookControl === 'function' ? hookControl() : {})}
				type={showPassword ? 'text' : 'password'}
			/>
			<div
				onClick={() => setShowPassword(s => !s)}
				className="cursor-pointer grid place-items-center h-full absolute right-1 top-0">
				{showPassword ? (
					<OpenEyeIcon className="h-6 w-6" />
				) : (
					<ClosedEyeIcon className="h-6 w-6" />
				)}
			</div>
		</div>
	);
};
