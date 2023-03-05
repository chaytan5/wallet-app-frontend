import React from "react";

const Pagination = ({
	transactionsPerPage,
	totalTransactions,
	paginate,
	currentPage,
}) => {
	const pageNumbers = [];

	for (let i = 1; i < Math.ceil(totalTransactions / transactionsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<li
						className={`page-number ${
							number === currentPage ? "selected-pagination" : ""
						}`}
						key={number}
						onClick={() => paginate(number)}
					>
						<span>{number}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pagination;
