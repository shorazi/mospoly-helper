// import { useState } from 'react'
import { Dates, IDateType, ILectureType, Lessons } from '../lib'
import styles from './main.module.scss'

const MainPage = () => {
	return (
		<>
			<Header />
			<div className={styles.scrollabel}>
				{Dates?.map(item => <CardDate key={item.id} date={item} />)}
			</div>
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
	// <div className={styles.header}>
	<div className='w-full flex justify-start items-center py-4 px-6'>
		<p className='font-semibold'>Группа 181-721</p>
	</div>
)

const CardDate = (props: { date: IDateType; status?: boolean }) => (
	// <div className={styles.card_date}>
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
					<div className={styles.lesson_more_info}>
						<p className='font-light text-sm leading-0 text-gray-400'>
							{lecture.teacher}
						</p>
					</div>
					<div className={styles.lesson_more_info}>
						<p className='font-light text-sm leading-0 text-gray-400'>
							{lecture.audience}
						</p>
					</div>
				</div>
			)}
			{/* <p className='font-light text-xs text-gray-400'>10:30 - 11:30</p> */}
		</div>
	)
}
