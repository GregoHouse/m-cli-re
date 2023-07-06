import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<main className="w-full h-full flex flex-col items-center justify-center">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<h1 className="text-6xl text-white font-semibold tracking-tight">
								Login
							</h1>
						}
					/>

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
		</main>
	);
}

export default App;
