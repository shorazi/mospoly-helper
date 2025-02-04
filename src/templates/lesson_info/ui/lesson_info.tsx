import { UIHeader } from '@/shared/ui'

const LessonInfo = () => {
	return (
		<div className='w-full h-dvh'>
			<Header />
			<div>
				<div></div>
				<div></div>
			</div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default LessonInfo

const Header = () => (
	<div className='w-full h-56 rounded-b-[3rem] bg-slate-700 hover:bg-slate-600'>
		<UIHeader start={'Back'} />
		<div>
			Lab Work Sience
			<p>date</p>
		</div>
	</div>
)
