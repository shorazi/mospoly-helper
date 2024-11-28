import { ILectureType, ITimeType } from '../../lib'

const colors: { [key: number]: string } = {
	1: 'red-400',
	2: 'orange-400',
	3: 'orange-300',
	4: 'blue-300',
	5: 'blue-600',
	6: 'green-600',
	7: 'gray-500',
}

const PreCard = (props: { lecture: ILectureType }) => {
	const { time, lecture, type } = props.lecture
	return (
		<div className='w-full px-3 pt-4 flex flex-col justify-start items-start gap-3'>
			<TimeInfo time={time} />
			{lecture && (
				<div className='w-full gap-2 flex flex-col justify-start items-start bg-slate-700 px-5 py-3 rounded-3xl'>
					<div className='w-full flex justify-between items-center'>
						<p className='font-medium text-sm text-gray-300'>{type?.name}</p>
						<p className='font-medium text-sm text-gray-300'>
							{lecture?.deadline}
						</p>
					</div>
					<p className='w-full text-lg font-normal leading-6'>
						{lecture?.title}
					</p>
					<div>
						<p className='font-light text-sm leading-0 text-gray-400'>
							{lecture?.teacher}
						</p>
					</div>
					<div>
						<p className='font-light text-sm leading-0 text-gray-400'>
							{lecture?.audience}
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default PreCard

const TimeInfo = ({ time }: { time: ITimeType }) => (
	<div className='w-full px-3 flex flex-col justify-start items-start'>
		<div className='w-full flex justify-start items-center gap-2'>
			<div className={`bg-${colors[time?.status]} w-2 h-2 rounded-lg`} />
			<div className='max-w-[60%]'>
				<p
					// className={`font-light text-xs ${time?.textColor ? `text-${colors[time?.status]}` : 'text-gray-400'}`}
					className={`font-light text-xs text-gray-400`}
				>
					{time?.title || '-'}
				</p>
				{time?.description && (
					<p className='font-light text-[11px] text-gray-500'>
						{time?.description}
					</p>
				)}
			</div>
		</div>
	</div>
)
