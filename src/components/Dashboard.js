import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
	const [user, setUser] = useState("demo");
	const [balance, setBalance] = useState(500);

	const navigate = useNavigate();

	const submitTransactionHandler = (e) => {
		e.preventDefault();
		navigate("/transactions");
	};

	return (
		<div className="body-container">
			<section className="user-info-section">
				<div>
					<h2>Wallet details</h2>
					<div className="user-info-div">
						<div>
							<p>Name: </p>
							<p>Wallet Balance: </p>
						</div>
						<div>
							<p>{user}</p>
							<p>{balance}</p>
						</div>
					</div>
				</div>
			</section>
			<div className="transactions-page-link">
				<p>
					<Link to={"/transactions"}>Click here</Link> to view your recent
					transactions.
				</p>
			</div>

			{/* <hr /> */}

			<section className="transaction-section">
				<div className="transaction-div">
					<h2>Perform a transaction</h2>
					<div className="transaction-form-container">
						<form className="transaction-form">
							<div className="amount-input-div">
								<label htmlFor="amount">Amount: </label>
								<input type="number" name="amount" />
							</div>

							<div className="transaction-type-div">
								<label>Select transaction type: </label>
							</div>
							<div className="wrapper">
								<input type="radio" name="transactionType" id="option-1" />
								<input type="radio" name="transactionType" id="option-2" />
								<label htmlFor="option-1" className="option option-1">
									<div className="dot"></div>
									<span>Credit</span>
								</label>
								<label htmlFor="option-2" className="option option-2">
									<div className="dot"></div>
									<span>Debit</span>
								</label>
							</div>
							<div className="btn-div">
								<button
									onClick={(e) => submitTransactionHandler(e)}
									className="btn trx-btn"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Dashboard;
