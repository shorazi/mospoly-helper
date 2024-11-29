import { UIHeader } from '@/shared/ui'
import Image from 'next/image'
import Icons from '../../../../public/icons'

interface CardType {
	id: number
	title: string
	icon: string
	navigate?: ''
}

export const data: CardType[] = [
	{
		id: 1,
		title: 'Авторизация',
		icon: Icons.trontron,
	},
	{
		id: 2,
		title: 'Информация',
		icon: Icons.trontron,
	},
	{
		id: 3,
		title: 'Оплата',
		icon: Icons.trontron,
	},
	{
		id: 4,
		title: 'Справки',
		icon: Icons.trontron,
	},
	{
		id: 5,
		title: 'Оценки',
		icon: Icons.trontron,
	},
	{
		id: 6,
		title: 'Электронная зачетная книжка',
		icon: Icons.trontron,
	},
	{
		id: 7,
		title: 'Диалоги',
		icon: Icons.trontron,
	},
	{
		id: 8,
		title: 'Одногруппники',
		icon: Icons.trontron,
	},
	{
		id: 9,
		title: 'Преподаватели',
		icon: Icons.trontron,
	},
	{
		id: 10,
		title: 'Студенты',
		icon: Icons.trontron,
	},
]

const ProfilePage = () => (
	<>
		<UIHeader start={<p className='font-semibold'>Профиль</p>} />
		<div className='w-full grid grid-cols-2 gap-3 px-3'>
			{data.map(item => (
				<Card key={item.id} value={item} />
			))}
		</div>
	</>
)

export default ProfilePage

interface CardProps<T> {
	value: T
}

const Card = ({ value }: CardProps<CardType>) => (
	<div className='bg-slate-700 hover:bg-slate-600 min-h-12 px-5 py-3 rounded-xl flex flex-col gap-4 cursor-pointer text-gray-300 hover:text-white'>
		<Image src={value.icon} alt='' />
		<p className='w-full text-lg font-normal leading-6'>{value.title}</p>
	</div>
)
