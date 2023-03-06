import React, { useState } from "react";
import { initializeWallet } from "../utils/services";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [initalBalance, setInitialBalance] = useState(0);

	const submitFormHandler = (e) => {
		e.preventDefault();
		// balance formatted to 4 decimal digits
		const formattedBalance = Number.parseInt(
			Number.parseFloat(initalBalance).toFixed(4)
		);

		const formData = { name: username, balance: formattedBalance };
		const isInitiazed = initializeWallet(formData);
		if (isInitiazed) {
			navigate("/");
		}
		if (isInitiazed !== true) {
			window.alert("There seems to be an error");
		}
	};

	return (
		<div className="form-container">
			<div className="create-form">
				<h2 className="form-heading">Please enter your details</h2>
				<form
					className="form-input"
					id="form-input"
					onSubmit={(e) => submitFormHandler(e)}
				>
					<div className="username-div input-div">
						<label htmlFor="username">Username: </label>
						<input
							type="text"
							name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>

					<div className="balance-div input-div">
						<label htmlFor="initial-balance">
							Initial balance (optional):{" "}
						</label>
						<input
							type="number"
							name="inital-balance"
							value={initalBalance}
							onChange={(e) => setInitialBalance(e.target.value)}
						/>
					</div>
					<div className="btn-div">
						<button
							form="form-input"
							type="submit"
							className="submit-btn btn"
							onSubmit={(e) => submitFormHandler(e)}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
