import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"
import { Loader } from "./"
import { TransactionsContext } from "../context/TransactionContext"
import { useContext } from "react"
import { shortenAddress } from "../utils/shortenAddress"

const Input = ({ name, value, type, placeholder, handleChange }) => (
	<input
		name={name}
		value={value}
		placeholder={placeholder}
		type={type}
		step="0.0001"
		onChange={(e) => handleChange(e, name)}
		className="my-2 w-full p-2 rounded-sm outline-none focus:border-blue-glassmorphism bg-transparent text-white border-none text-sm white-glassmorphism"
	/>
)

const Welcome = () => {
	const { connectWallet, currentAccount, formData, sendTransaction, handleChange } = useContext(TransactionsContext)

	/* Send transaction to blockchain */
	const handleSubmit = (e) => {
		e.preventDefault()
		const { addressTo, amount, keyword, message } = formData

		if (!addressTo || !amount || !keyword || !message) return

		sendTransaction()
	}

	return (
		<div className="flex w-full justify-center items-center">
			<div className="flex mf:flex-row flex-col items-start justify-between md:p-02 py-12 px-4">
				<div className="flex flex-1 justify-start flex-col mf:mr-10">
					<h1 className="text-3xl sm:text-5xl text-gradient text-white py-1">	Send crypto <br /> to anyone, anywhere.</h1>
					<p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
						Exchange, pay, and receive crypto in the most secure and convenient way.
					</p>
					{!currentAccount && <button
						type="button"
						onClick={connectWallet}
						className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
					>
						<p className="text-white text-base font-semibold ">Connect Wallet</p>
					</button>}
				</div>
				<div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-0">
					<div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
						<div className="flex justify-between flex-col w-full h-full">
							<div className="flex justify-between items-start">
								<div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
									<SiEthereum fontSize={21} color="white" />
								</div>
								<BsInfoCircle fontSize={17} color="white" />
							</div>
							<div>
								<p className="text-white font-light text-sm">
									{shortenAddress(currentAccount)}
								</p>
								<p className="text-white font-semibold text-lg mt-1" >
									Ethereum
								</p>
							</div>
						</div>
					</div>

					<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
						<Input name="addressTo" placeholder="Address to" type="text" handleChange={handleChange} />
						<Input name="amount" placeholder="Amount (ETH)" type="number" handleChange={handleChange} />
						<Input name="keyword" placeholder="Keyword (GIF)" type="text" handleChange={handleChange} />
						<Input name="message" placeholder="Your Message" type="text" handleChange={handleChange} />
						<div className="h-[1px] w-full bg-gray-400 my-2" />

						{false ? <Loader /> : <button
							type="button"
							className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
							onClick={handleSubmit}
						>Send Now</button>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Welcome