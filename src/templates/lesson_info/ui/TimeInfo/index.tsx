const TimeInfo = () => (
	<div className='w-full grid grid-cols-2'>
		<div className='flex flex-col gap-1'>
			<p className='font-medium text-sm'>9:30 - 10:30</p>
			<p className='font-light text-sm leading-0 text-gray-400'>Время</p>
		</div>
		<div className='flex flex-col gap-1'>
			<p className='font-medium text-sm'>10 мая - 20 июня</p>
			<p className='font-light text-sm leading-0 text-gray-400'>Дата</p>
		</div>
	</div>
)

export default TimeInfo
