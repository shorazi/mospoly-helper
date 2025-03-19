import { ReactNode } from 'react'
import Icons from '../../../../public/icons'
import Card from './Card'
import TimeInfo from './TimeInfo'
import WorkInfoCard from './WorkInfoCard'

const LessonInfo = () => {
	return (
		<div className='w-full h-dvh'>
			<WorkInfoCard />
			<ContentStack>
				<TimeInfo />
				<div className='w-full flex flex-col justify-start items-start gap-3'>
					<p className='font-medium text-sm'>Аудитории</p>
					<Card
						icon={Icons.buildings}
						title='Пр ВЦ 1 (2553)'
						description='Пряшникова , к. 2, этаж 2, ауд. 2553'
					/>
					<Card
						icon={Icons.buildings}
						title='Пр ВЦ 2 (1403)'
						description='Пряшникова , к. 1, этаж 4, ауд. 1403'
					/>
				</div>
				<div className='w-full flex flex-col justify-start items-start gap-3'>
					<p className='font-medium text-sm'>Преподаватели</p>
					<Card icon={Icons.teacher} title='Хуснулина Дария Рашитовна' />
					<Card icon={Icons.teacher} title='Тараcенкова Анастасия Сергеевна' />
				</div>
				<div className='w-full flex flex-col justify-start items-start gap-3'>
					<p className='font-medium text-sm'>Группы</p>
					<Card icon={Icons.profile} title='181 - 721' />
				</div>
			</ContentStack>
		</div>
	)
}

export default LessonInfo

const ContentStack = (props: { children: ReactNode }) => (
	<div className='flex flex-col justify-start items-start py-6 px-6 gap-5'>
		{props.children}
	</div>
)
