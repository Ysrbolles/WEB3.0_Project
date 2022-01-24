import { AiFillAlipayCircle } from "react-icons/ai"
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"
import { Loader } from "./"


const Welcome = () => {
	const connectToWallet = () => {
	}

	return (
		<div className="flex w-full justify-center items-center">
			<div className="flex md:flex-row flex-col items-start justify-between md:p-02 py-12 px-4">
				<div className="flex flex-1 justify-start flex-col md:mr-10">
					<h1 className="text-3xl sm:text-5xl text-gradient text-white py-1">	Send crypto <br /> to anyone, anywhere.</h1>
					<p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
						Exchange, pay, and receive crypto in the most secure and convenient way.
					</p>
					<button
						type="button"
						onClick={connectToWallet}
						className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
					>
						<p className="text-white text-base font-semibold ">Connect Wallet</p>
					</button>
				</div>
				<div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-0">
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
									0xjjjk...sdsdsds
								</p>
								<p className="text-white font-semibold text-lg mt-1" >
									Ethereum
								</p>
							</div>
						</div>
					</div>

					<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">

					</div>
				</div>
			</div>
		</div>
	)
}

export default Welcome