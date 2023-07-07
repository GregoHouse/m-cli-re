import FormLogin from './FormLogin';

export default function LoginPage() {
	return (
		<main className="w-full h-full bg-[#203144] flex flex-col gap-4">
			<header className="w-[300px] my-[-30px] mx-[-10px]">
				<img src="/images/matching.jpg" className="h-[150px]" />
			</header>
			<div className="flex-1 flex justify-center items-center mt-[-100px]">
				<FormLogin />
			</div>
		</main>
	);
}
