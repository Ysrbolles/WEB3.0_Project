import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'

const ServicesCard = ({ color, title, icon, subtitle }) => (
	<div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
		<div className={`w-10 h-10  rounded-full flex justify-center items-center ${color}`}>
			{icon}
		</div>
		<div className='ml-5 flex flex-col flex-1'>
			<h3 className='text-white mt-2 text-lg'>{title}</h3>
			<p className='text-white mt-2 text-sm md:w-9/12 '>{subtitle}</p>
		</div>
	</div>
)

const Services = () => {
	return (
		<div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services'>
			<div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
				<div className='flex flex-1  flex-col jusitfy-start items-start'>
					<h1 className='text-white text-3xl sm:text-5xl p-2 text-gradient'>Services <br /></h1>
				</div>
			</div>
			<div className='flex flex-1 flex-col justify-start items-center'>
				<ServicesCard
					color="bg-[#2952E3]"
					title="Security Guaranteed"
					icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
					subtitle="Security is guaranted. We always maintain privacy and mainting the quality of our products."
				/>
				<ServicesCard
					color="bg-[#8945F8]"
					title="Best Exchange Rates "
					icon={<BiSearchAlt fontSize={21} className='text-white' />}
					subtitle="Security is guaranted. We always maintain privacy and mainting the quality of our products."
				/>
				<ServicesCard
					color="bg-[#F84550]"
					title="Fastets Transactions"
					icon={<RiHeart2Fill fontSize={21} className='text-white' />}
					subtitle="Security is guaranted. We always maintain privacy and mainting the quality of our products."
				/>
			</div>
		</div>
	)
}

export default Services