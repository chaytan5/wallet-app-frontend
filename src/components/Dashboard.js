import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWallet, transact } from "../utils/services";

const Dashboard = () => {
	const [user, setUser] = useState("demo");
	const [balance, setBalance] = useState(0);
	const [amount, setAmount] = useState(0);
	const [description, setDescription] = useState("");
	const [type, setType] = useState("");

	const walletId = localStorage.getItem("walletId");

	useEffect(() => {
		const data = getWallet(walletId);
		setUser(data.name);
		setBalance(data.balance);
	}, [user]);

	const submitTransactionHandler = (e) => {
		e.preventDefault();

		if (amount === 0) {
			alert("transaction amount cannot be 0");
			return;
		}
		let finalAmount = Number.parseInt(Number.parseFloat(amount).toFixed(4));

		if (type === "debit") {
			finalAmount = Math.abs(finalAmount) * -1;
		}

		const transactionData = {
			amount: finalAmount,
			description: description,
		};

		console.log(finalAmount);
		// const newBalance = transact(transactionData);

		// setBalance(newBalance);
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

			<section className="transaction-section">
				<div className="transaction-div">
					<h2>Perform a transaction</h2>
					<div className="transaction-form-container">
						<form
							className="transaction-form"
							id="transaction-form"
							onSubmit={(e) => submitTransactionHandler(e)}
						>
							<div className="amount-input-div">
								<label htmlFor="amount">Amount: </label>
								<input
									type="number"
									name="amount"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
									required
								/>
							</div>
							<div className="amount-input-div">
								<label htmlFor="amount">Description: </label>
								<input
									type="text"
									name="description"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									required
								/>
							</div>
							<div className="transaction-type-div">
								<label>Select transaction type: </label>
							</div>
							<div className="wrapper">
								<input type="radio" name="transactionType" id="option-1" />
								<input type="radio" name="transactionType" id="option-2" />
								<label
									onClick={() => setType("credit")}
									htmlFor="option-1"
									className="option option-1"
								>
									<div className="dot"></div>
									<span>Credit</span>
								</label>
								<label
									onClick={() => setType("debit")}
									htmlFor="option-2"
									className="option option-2"
								>
									<div className="dot"></div>
									<span>Debit</span>
								</label>
							</div>
							<div className="btn-div">
								<button
									form="transaction-form"
									type="submit"
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
