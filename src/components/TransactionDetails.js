import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import TransactionTable from "./TransactionTable";

/**
 * features in this  component:
 * sort by date and amount
 * pagination links
 * export csv file
 *
 */

const TransactionDetails = () => {
	const [transactions, setTransactions] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [transactionsPerPage] = useState(15);

	useEffect(() => {
		getTransactions();
	}, []);

	const getTransactions = async () => {
		setLoading(true);
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const json = await res.json();
		setLoading(false);

		setTransactions(json);
	};

	// get current transactions
	const indexOfLastTransaction = currentPage * transactionsPerPage;
	const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
	const currentTransactions = transactions.slice(
		indexOfFirstTransaction,
		indexOfLastTransaction
	);

	// pagination
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	console.log(transactions);
	return (
		<div className="trx-container">
			<h2>Recent Transactions</h2>
			<TransactionTable transactions={currentTransactions} loading={loading} />
			<Pagination
				transactionsPerPage={transactionsPerPage}
				totalTransactions={transactions.length}
				currentPage={currentPage}
				paginate={paginate}
			/>
		</div>
	);
};

export default TransactionDetails;
