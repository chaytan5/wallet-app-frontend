import axios from "axios";

export const initializeWallet = async (formData) => {
	try {
		const response = await axios.post("https://api.xyz.com/setup", formData);
		if (response.data) {
			localStorage.setItem("walletId", response.data.id);
			return true;
		}
	} catch (err) {
		console.log(err);
	}
};

export const transact = async (transactionData) => {
	const response = await axios.post(
		"https://api.xyz.com/setup",
		transactionData
	);

	if (response.data) {
		return response.data.balance;
	}
};

export const getWallet = async (walletId) => {
	const response = await axios.get(`https://api.xyz.com/wallet/${walletId}`);
	return response.data;
};

export const fetchTransactions = async () => {};
