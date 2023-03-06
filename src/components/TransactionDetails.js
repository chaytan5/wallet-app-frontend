import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import TransactionTable from "./TransactionTable";
import localData from "../data.json";
import { CSVLink } from "react-csv";
import { fetchTransactions } from "../utils/services";
/**
 * features in this component:
 * sort by date and amount
 * pagination links
 * export csv file
 */

const TransactionDetails = () => {
	const [transactions, setTransactions] = useState(localData);
	const [totalTransactions, setTotalTransactions] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [transactionsPerPage] = useState(10);
	const [order, setOrder] = useState("ASC");

	// get current transactions
	const indexOfLastTransaction = currentPage * transactionsPerPage;
	const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
	// const currentTransactions = transactions.slice(
	// 	indexOfFirstTransaction,
	// 	indexOfLastTransaction
	// );

	useEffect(() => {
		// getTransactions();
		const data = fetchTransactions(
			indexOfFirstTransaction,
			transactionsPerPage
		);

		setTotalTransactions(data.totalTransactions);

		// setTransactions(data.transactions);
	}, []);

	// const getTransactions = async () => {
	// 	setLoading(true);
	// 	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	// 	const json = await res.json();
	// 	setLoading(false);

	// setTransactions(json);
	// };

	// pagination
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	// sorting
	const sorting = (col) => {
		if (order === "ASC") {
			const sorted = [...transactions].sort((a, b) =>
				a[col] > b[col] ? 1 : -1
			);
			setTransactions(sorted);
			setOrder("DESC");
		}
		if (order === "DESC") {
			const sorted = [...transactions].sort((a, b) =>
				a[col] < b[col] ? 1 : -1
			);
			setTransactions(sorted);
			setOrder("ASC");
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
				sorting={sorting}
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
