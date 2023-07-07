import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/';

function App() {
	return (
		// <main className="w-full h-full flex flex-col items-center justify-center bg-[#203144]">
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />

				<Route
					path="/dashboard"
					element={
						<h1 className="text-6xl text-white font-semibold tracking-tight">
							dashboard
						</h1>
					}
				/>

				<Route
					path="*"
					element={
						<h1 className="text-6xl text-white font-semibold tracking-tight">
							404
						</h1>
					}
				/>
			</Routes>
		</BrowserRouter>
		// </main>
	);
}

export default App;
