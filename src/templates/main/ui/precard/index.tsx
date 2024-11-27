import { ILectureType } from '../../lib/types'

const PreCard = (props: { lecture: ILectureType }) => {
	const { time, lecture, type } = props.lecture
	return (
		<div className='w-full px-3 pt-4 flex flex-col justify-start items-start gap-3'>
			<div className='w-full px-3 flex flex-col justify-start items-start gap-1'>
				<p className='font-light text-xs text-gray-400'>{time?.title || '-'}</p>
				{time?.description && (
					<p className='font-light text-xs text-gray-400'>
						{time?.description}
					</p>
				)}
			</div>
			{lecture && (
				<div className='w-full gap-2 flex flex-col justify-start items-start bg-slate-700 px-5 py-3 rounded-3xl'>
					<div className='w-full flex justify-between items-center'>
						<p className='font-medium text-sm text-gray-300'>{type?.name}</p>
						<p className='font-medium text-sm text-gray-300'>
							{lecture.deadline}
						</p>
					</div>
					<p className='w-full text-lg font-normal leading-6'>
						{lecture.title}
					</p>
					<div>
						<p className='font-light text-sm leading-0 text-gray-400'>
							{lecture.teacher}
						</p>
					</div>
					<div>
						<p className='font-light text-sm leading-0 text-gray-400'>
							{lecture.audience}
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default PreCard
