'use client'
import { UIHeader } from '@/shared/ui'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Icons from '../../../../../public/icons'

const WorkInfoCard = () => {
	const router = useRouter()
	return (
		<div className='w-full h-52 flex flex-col justify-between items-start rounded-b-[3rem] bg-slate-700'>
			<UIHeader
				start={
					<div
						onClick={() => router.back()}
						className='w-8 h-8 rounded-[50%] bg-slate-600 hover:bg-slate-500 flex justify-center items-center'
					>
						<Image src={Icons.arrow_left} alt='' />
					</div>
				}
			/>
			<div className='w-full gap-2 flex flex-col justify-start items-start pb-4 px-6'>
				<p className='font-medium text-sm text-blue-300'>Лаб. работа</p>
				<p className='w-[60%] text-lg font-normal leading-6'>
					Интеллектуальные системы и технологии
				</p>
				<p className='w-full font-light text-sm text-end'>10 мая - 20 июня</p>
			</div>
		</div>
	)
}

export default WorkInfoCard
