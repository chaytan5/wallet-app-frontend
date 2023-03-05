import React from "react";

/**
 * table
 *  table row
 *  table data
 */
const TransactionTable = ({ transactions, loading }) => {
	if (loading) {
		return <h3>Loading...</h3>;
	}

	return (
		<div className="table-container">
			<table className="transaction-table">
				<tr className="table-header">
					<th>Date</th>
					<th>Type</th>
					<th>Amount</th>
					<th>Balance</th>
				</tr>
				{transactions.map((item) => (
					<tr className="table-row" key={item.id}>
						<td className="table-cell">{item.title}</td>
					</tr>
				))}
			</table>
		</div>
	);
};

export default TransactionTable;
