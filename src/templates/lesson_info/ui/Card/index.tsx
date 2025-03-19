import Image from 'next/image'

const Card = (props: {
	title: string
	description?: string
	icon?: string
}) => {
	return (
		<div className='w-full flex justify-start items-center gap-3'>
			<div className='w-9 h-9 rounded-[50%] bg-gray-500 flex justify-center items-center'>
				{props?.icon && <Image src={props?.icon || ''} alt='' />}
			</div>
			<div className='flex flex-col gap-[2px]'>
				<p className='font-medium text-sm'>{props.title}</p>
				<p className='font-light text-xs text-gray-400'>{props?.description}</p>
			</div>
		</div>
	)
}

export default Card
