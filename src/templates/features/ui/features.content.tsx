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
		title: 'Настройки',
		icon: Icons.trontron,
	},
	{
		id: 2,
		title: 'Адреса',
		icon: Icons.trontron,
	},
	{
		id: 3,
		title: 'Дедлайны',
		icon: Icons.trontron,
	},
	{
		id: 4,
		title: 'Пропуск',
		icon: Icons.trontron,
	},
	{
		id: 5,
		title: 'О сайте',
		icon: Icons.trontron,
	},
]

const FeaturesPage = () => (
	<>
		<UIHeader start={<p className='font-semibold'>Полезности</p>} />
		<div className='w-full grid grid-cols-2 gap-3 px-3'>
			{data.map(item => (
				<Card key={item.id} value={item} />
			))}
		</div>
	</>
)

export default FeaturesPage

interface CardProps<T> {
	value: T
}

const Card = ({ value }: CardProps<CardType>) => (
	<div className='bg-slate-700 hover:bg-slate-600 min-h-12 px-5 py-3 rounded-xl flex flex-col gap-4 cursor-pointer text-gray-300 hover:text-white'>
		<Image src={value.icon} alt='' />
		<p className='w-full text-lg font-normal leading-6'>{value.title}</p>
	</div>
)
