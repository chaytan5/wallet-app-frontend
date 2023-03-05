import React, { useState } from "react";

const InputForm = () => {
	const [username, setUsername] = useState("");
	const [initalBalance, setInitialBalance] = useState(0);

	const submitFormHandler = () => {
		console.log("submit button clicked");
	};

	return (
		<div className="form-container">
			<div className="create-form">
				<h2 className="form-heading">Please enter your details</h2>
				<form
					className="form-input"
					name="form-input"
					onClick={submitFormHandler}
				>
					<div className="username-div input-div">
						<label htmlFor="username">Username: </label>
						<input
							type="text"
							name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
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
						<button className="submit-btn btn">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default InputForm;
