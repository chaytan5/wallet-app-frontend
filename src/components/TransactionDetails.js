import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import TransactionTable from "./TransactionTable";
import localData from "../data.json";
import { CSVLink } from "react-csv";
import { fetchTransactions } from "../utils/services";

const TransactionDetails = () => {
	const [transactions, setTransactions] = useState(localData);
	const [totalTransactions, setTotalTransactions] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [transactionsPerPage] = useState(10);
	const [orderDate, setOrderDate] = useState("ASC");
	const [orderAmount, setOrderAmount] = useState("ASC");
	const [order, setOrder] = useState("ASC");

	// get current transactions
	const indexOfLastTransaction = currentPage * transactionsPerPage;
	const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
	const currentTransactions = transactions.slice(
		indexOfFirstTransaction,
		indexOfLastTransaction
	);

	useEffect(() => {
		// getTransactions();
		const data = fetchTransactions(
			indexOfFirstTransaction,
			transactionsPerPage
		);

		setTotalTransactions(data.totalTransactions);

		// setTransactions(data.transactions);
	}, []);

	// pagination
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const sortingNew = (col) => {
		if (order === "ASC") {
			const sorted = [...transactions].sort((a, b) => {
				console.log(a[col], b[col]);
				if (a[col] > b[col]) {
					return 1;
				} else if (a[col] < b[col]) {
					return -1;
				} else {
					return 0;
				}
			});
			setTransactions(sorted);
			setOrder("DESC");
		}

		if (order === "DESC") {
			const sorted = [...transactions].sort((a, b) => {
				console.log(a[col], b[col]);
				if (a[col] < b[col]) {
					return 1;
				} else if (a[col] > b[col]) {
					return -1;
				} else {
					return 0;
				}
			});
			setTransactions(sorted);
			setOrder("ASC");
		}
	};

	// sorting
	const sorting = (col) => {
		if (col === "date") {
			if (orderDate === "ASC") {
				const sorted = [...transactions].sort((a, b) => {
					console.log(a[col], b[col]);
					if (a[col] > b[col]) {
						return 1;
					} else if (a[col] < b[col]) {
						return -1;
					} else {
						return 0;
					}
				});
				setTransactions(sorted);
				setOrderDate("DESC");
			}
			if (orderDate === "DESC") {
				const sorted = [...transactions].sort((a, b) => {
					console.log(a[col], b[col]);
					if (a[col] < b[col]) {
						return 1;
					} else if (a[col] > b[col]) {
						return -1;
					} else {
						return 0;
					}
				});
				setTransactions(sorted);
				setOrderDate("ASC");
			}
		}

		if (col === "amount") {
			if (orderAmount === "ASC") {
				const sorted = [...transactions].sort((a, b) => {
					console.log(a[col], b[col]);
					if (a[col] > b[col]) {
						return 1;
					} else if (a[col] < b[col]) {
						return -1;
					} else {
						return 0;
					}
				});
				setTransactions(sorted);
				setOrderAmount("DESC");
			}
			if (orderAmount === "DESC") {
				const sorted = [...transactions].sort((a, b) => {
					console.log(a[col], b[col]);
					if (a[col] < b[col]) {
						return 1;
					} else if (a[col] > b[col]) {
						return -1;
					} else {
						return 0;
					}
				});
				setTransactions(sorted);
				setOrderAmount("ASC");
			}
		}
	};

	// csv download
	const headers = [
		{ label: "Date", key: "date" },
		{ label: "Type", key: "type" },
		{ label: "Amount", key: "amount" },
		{
			label: "Description",
			key: "description",
		},
		{ label: "Balance", key: "balance" },
	];

	const csvReport = {
		data: transactions,
		headers: headers,
		filename: "transaction_report.csv",
	};

	return (
		<div className="trx-container">
			<h2>Recent Transactions</h2>
			<TransactionTable
				transactions={transactions}
				loading={loading}
				sorting={sortingNew}
			/>
			<Pagination
				transactionsPerPage={transactionsPerPage}
				totalTransactions={totalTransactions}
				currentPage={currentPage}
				paginate={paginate}
			/>
			<CSVLink {...csvReport}>
				<button className="btn submit-btn">Export to CSV</button>
			</CSVLink>
		</div>
	);
};

export default TransactionDetails;
