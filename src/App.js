import "./App.css";
import InputForm from "./components/InputForm";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TransactionDetails from "./components/TransactionDetails";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <InputForm />,
	},
	{
		path: "dashboard",
		element: <Dashboard />,
	},
	{
		path: "transactions",
		element: <TransactionDetails />,
	},
]);

function App() {
	return (
		<div className="App">
			<Header />
			<RouterProvider router={appRouter} />
		</div>
	);
}

export default App;
