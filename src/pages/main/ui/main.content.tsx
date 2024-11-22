// import { useState } from 'react'
import styles from './main.module.scss'

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
]

const MainPage = () => {
	// const [currentDate, setCurrentDate] = useState<IDateType>(Dates[0])

	return (
		<>
			<Header />
			<div className={styles.scrollabel}>
				{Dates?.map(item => <CardDate key={item.id} date={item} />)}
			</div>
			<div className='w-full text-end pr-5'>
				<p className='font-light text-xs leading-0 text-gray-500'>
					{Dates[0].fullDate}
				</p>
			</div>
			<PreCard />
			<PreCard />
			<div>
				<p>Большой перерыв</p>
				<span>У тебя будет 40 минут, чтобы перекусить или отдохнуть</span>
			</div>
		</>
	)
}

export default MainPage

const Header = () => (
	// <div className={styles.header}>
	<div className='w-full flex justify-start items-center py-4 px-5'>
		<p className='font-semibold'>Группа 181-721</p>
	</div>
)

const CardDate = (props: { date: IDateType; status?: boolean }) => (
	// <div className={styles.card_date}>
	<div className='w-14 h-16 flex flex-col justify-center items-center rounded-2xl cursor-pointer bg-slate-700 text-gray-300'>
		<p className='font-medium text-sm leading-0'>{props.date.day}</p>
		<p className='font-light text-xs leading-0'>{props.date.value}</p>
		<div className='flex justify-center items-center gap-1 mt-2'>
			<div className='w-1 h-1 rounded-[4px] bg-red-400 ' />
			{/* <div className='w-1 h-1 rounded-[4px] bg-orange-400 ' /> */}
			<div className='bg-orange-300 w-1 h-1 rounded-[50%]' />
			<div className='w-1 h-1 rounded-[4px] bg-blue-300 ' />
			<div className='bg-blue-600 w-1 h-1 rounded-[50%]' />
		</div>
	</div>
)

const PreCard = () => (
	<div className={styles.precard_lesson}>
		<p className='font-light text-xs leading-0 text-gray-400'>10:30 - 11:30</p>
		<div className={styles.card_lesson}>
			<div>
				<p className={styles.text_lesson_type}>Лекция</p>
				<p className={styles.text_lesson_deadline}>1,5 месяца</p>
			</div>
			<p className={styles.text_lesson_topic}>
				Интеллектуальные системы и технологии
			</p>
			<div className={styles.lesson_more_info}>
				<p>Иванова Ольга Теремкина</p>
			</div>
			<div className={styles.lesson_more_info}>
				<p>Обучение в LMS</p>
			</div>
		</div>
	</div>
)
