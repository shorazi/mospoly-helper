// import { useState } from 'react'
import { ReactNode } from 'react'
import { Dates, Lessons } from '../lib/data'
import CardDate from './card_date'
import Header from './header'
import './main.css'
import PreCard from './precard'

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

const Scrollabel = (props: { children: ReactNode }) => (
	<div className='scrollabel'>{props.children}</div>
)
