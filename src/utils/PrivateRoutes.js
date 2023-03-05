import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
	// const walletId = localStorage.getItem("walletId");
	return true ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
