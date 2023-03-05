import React from "react";

const TransactionTable = ({ transactions, loading, sorting }) => {
	if (loading) {
		return <h3>Loading...</h3>;
	}

	return (
		<div className="table-container">
			<p>Click on Date or Amount heading to sort the data</p>
			<table className="transaction-table">
				<thead>
					<tr className="table-header">
						<th className="th-date" onClick={() => sorting("date")}>
							Date
						</th>
						<th>Type</th>
						<th className="th-amount" onClick={() => sorting("amount")}>
							Amount
						</th>
						<th>Balance</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((item) => (
						<tr className="table-row" key={item.id}>
							<td className="table-cell">
								{new Date(item?.date)?.toLocaleDateString()}
							</td>
							<td className="table-cell">{item.type}</td>
							<td className="table-cell">{item.amount}</td>
							<td className="table-cell">{item.balance}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TransactionTable;
