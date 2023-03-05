import "./App.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TransactionDetails from "./components/TransactionDetails";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
	return (
		<div>
			<Header />
			<Router>
				<Routes>
					{/* Protected routes */}
					<Route element={<PrivateRoutes />}>
						<Route path="/" element={<Dashboard />} />
						<Route path="/transactions" element={<TransactionDetails />} />
					</Route>
					{/* Public routes */}
					<Route path="/login" element={<LoginForm />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
