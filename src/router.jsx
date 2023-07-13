import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages';
import { useSelector } from 'react-redux';

const RedirectRoute = ({ condition, to, children }) => {
	if (condition) {
		return <Navigate to={to} replace />;
	}
	return children;
};

export default function Router() {
	const isLogged = useSelector(s => s.user.isLogged);
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<RedirectRoute condition={isLogged} to="/dashboard">
							<LoginPage />
						</RedirectRoute>
					}
				/>

				<Route
					path="/dashboard"
					element={
						<RedirectRoute condition={!isLogged} to="/">
							<h1 className="text-6xl text-white font-semibold tracking-tight">
								dashboard
							</h1>
						</RedirectRoute>
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
	);
}
