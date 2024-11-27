// import { useState } from 'react'
import { ReactNode } from 'react'
import './main.css'

interface ILectureType {
	id: number
	time: {
		status: number
		title: string
		description?: string
	}
	type?: {
		name: string
		id: number
	}
	lecture?: {
		deadline: string
		title: string
		teacher: string
		audience: string
	}
}

interface IDateType {
	id: number
	value: string
	day: string
	fullDate: string
}

const Dates: IDateType[] = [
	{
		id: 1,
		value: 'Пн',
		day: '24',
		fullDate: '24 мая, 15 неделя',
	},
	{
		id: 2,
		value: 'Вт',
		day: '25',
		fullDate: '25 мая, 15 неделя',
	},
	{
		id: 3,
		value: 'Ср',
		day: '26',
		fullDate: '26 мая, 15 неделя',
	},
	{
		id: 4,
		value: 'Чт',
		day: '27',
		fullDate: '27 мая, 15 неделя',
	},
	{
		id: 5,
		value: 'Пт',
		day: '28',
		fullDate: '28 мая, 15 неделя',
	},
	{
		id: 6,
		value: 'Сб',
		day: '29',
		fullDate: '29 мая, 15 неделя',
	},
	{
		id: 7,
		value: 'Вс',
		day: '30',
		fullDate: '30 мая, 15 неделя',
	},
	{
		id: 8,
		value: 'Пн',
		day: '31',
		fullDate: '31 мая, 15 неделя',
	},
	{
		id: 9,
		value: 'Вт',
		day: '1',
		fullDate: '1 мая, 15 неделя',
	},
	{
		id: 10,
		value: 'Ср',
		day: '2',
		fullDate: '2 мая, 15 неделя',
	},
	{
		id: 11,
		value: 'Чт',
		day: '3',
		fullDate: '3 мая, 15 неделя',
	},
	{
		id: 12,
		value: 'Пт',
		day: '4',
		fullDate: '4 мая, 15 неделя',
	},
]
const Lessons: ILectureType[] = [
	{
		id: 1,
		time: {
			status: 1,
			title: '10:40 - 12:10',
		},
		type: {
			name: 'Лекция',
			id: 1,
		},
		lecture: {
			deadline: '1,5 мес',
			title: 'Интеллектуальные системы и технологии',
			teacher: 'Лазарева Ольга Юрьевна',
			audience: '(LMS) Обучение в LMS',
		},
	},
	{
		id: 2,
		time: {
			status: 2,
			title: 'Идет 30 мин., конец в 13:50',
		},
		type: {
			name: 'Лекция',
			id: 1,
		},
		lecture: {
			deadline: '1,5 мес',
			title: 'Цифровая обработка медиаданных',
			teacher: 'Лазарева Ольга Юрьевна',
			audience: '(LMS) Обучение в LMS',
		},
	},
	{
		id: 4,
		time: {
			status: 2,
			title: 'Большой перерыв',
			description: 'У вас будет 40 минут, чтобы перекусить или отдохнуть',
		},
	},
	{
		id: 3,
		time: {
			status: 3,
			title: '14:30 - 16:00',
		},
		type: {
			name: 'Зачет',
			id: 2,
		},
		lecture: {
			deadline: '26 мая',
			title: 'Физическая культура и спорт жи есть',
			teacher: 'Бодакин А. В.',
			audience: 'Спортивный зал (таги доми хамсоя да)',
		},
	},
]

const MainPage = () => {
	return (
		<>
			<Header />
			<Scrollabel>
				{Dates?.map(item => <CardDate key={item.id} date={item} />)}
			</Scrollabel>
			<div className='w-full text-end pr-4'>
				<p className='font-light text-xs leading-0 text-gray-500'>
					{Dates[0].fullDate}
				</p>
			</div>
			{Lessons?.map(lecture => <PreCard key={lecture.id} lecture={lecture} />)}
		</>
	)
}

export default MainPage

const Header = () => (
	<div className='w-full flex justify-start items-center py-4 px-6'>
		<p className='font-semibold'>Группа 181-721</p>
	</div>
)

const CardDate = (props: { date: IDateType; status?: boolean }) => (
	<div className='w-12 h-16 flex flex-col justify-center items-center rounded-2xl cursor-pointer bg-slate-700 text-gray-300'>
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

const Scrollabel = (props: { children: ReactNode }) => (
	<div className='scrollabel'>{props.children}</div>
)
