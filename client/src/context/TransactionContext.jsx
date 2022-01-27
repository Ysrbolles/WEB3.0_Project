import React, { useEffect, useState } from "react";
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/Constants'

export const TransactionsContext = React.createContext()

const { ethereum } = window


const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

	console.log({ provider, signer, transactionsContract });
	return transactionsContract
}

export const TransactionProvider = ({ children }) => {
	const [currentAccount, setCurrentAccount] = useState("");
	const [formData, setFormData] = useState({
		adderssTo: '',
		amount: '',
		keyword: '',
		message: ''
	})
	const [isLoading, setIsLoading] = useState(false)
	const [transCount, setTransCount] = useState(localStorage.getItem('transactionCount'))

	const handleChange = (e, name) => {
		setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
	}

	const checkWalletConnected = async () => {
		try {
			if (!ethereum) return alert("please install metamask")

			const accounts = await ethereum.request({ method: 'eth_accounts' })


			if (accounts.length) {
				setCurrentAccount(accounts[0])

				//get all transactions
			} else {
				console.log("no account found");
			}
		} catch (error) {
			console.log(error);
			throw new Error("No ethereum object.1")
		}
	}

	useEffect(() => {
		checkWalletConnected()
	}, [])

	const connectWallet = async () => {
		try {
			if (!ethereum) return alert("please install metamask")

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
			setCurrentAccount(accounts[0])
		} catch (error) {
			console.log(error);
			throw new Error("No ethereum object.2")
		}
	}

	const sendTransaction = async () => {
		try {
			if (ethereum) {
				const { addressTo, amount, keyword, message } = formData
				const transactionsContract = getEthereumContract()
				const parsedAmount = ethers.utils.parseEther(amount);
				await ethereum.request({
					method: "eth_sendTransaction",
					params: [{
						from: currentAccount,
						to: addressTo,
						gas: "0x5208",
						value: parsedAmount._hex,
					}],
				});


				const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

				setIsLoading(true);
				console.log(`Loading - ${transactionHash.hash}`);
				await transactionHash.wait();
				console.log(`Success - ${transactionHash.hash}`);
				setIsLoading(false);

				const transactionsCount = await transactionsContract.getTransactionCount();
				setTransCount(transactionsCount.toNumber())
			}
		} catch (error) {
			console.log(error);
			throw new Error("No ethereum object.3")
		}
	}
	return (
		<TransactionsContext.Provider value={{ connectWallet, currentAccount, formData, sendTransaction, handleChange }}>
			{children}
		</TransactionsContext.Provider>
	)
}