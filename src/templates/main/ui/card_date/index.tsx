import { IDateType } from '../../lib'

const CardDate = (props: { date: IDateType; status?: boolean }) => (
	<div className='w-12 h-16 flex flex-col justify-center items-center rounded-2xl cursor-pointer bg-slate-700 hover:bg-slate-600 text-gray-300'>
		<p className='font-medium text-sm leading-0'>{props.date.day}</p>
		<p className='font-light text-xs leading-0'>{props.date.value}</p>
		<div className='flex justify-center items-center gap-1 mt-2'>
			<div className='bg-red-400 w-1 h-1 rounded-[4px] ' />
			<div className='bg-orange-400 w-1 h-1 rounded-[4px]' />
			{/* <div className='bg-orange-300 w-1 h-1 rounded-[4px]' /> */}
			<div className='bg-blue-300 w-1 h-1 rounded-[4px]' />
			<div className='bg-blue-600 w-1 h-1 rounded-[4px]' />
		</div>
	</div>
)

export default CardDate
