import Image from 'next/image'
import Icons from '../../../../public/icons'
import './layout.css'

const Layout = (
	props: Readonly<{
		children: React.ReactNode
	}>
) => {
	return (
		<div className='root'>
			<div className='max-w-md w-full min-h-dvh flex justify-start items-start  bg-slate-800'>
				<div className='w-full min-h-dvh grid grid-cols-1 pb-16'>
					{props.children}
				</div>
			</div>
			<MobileBar />
		</div>
	)
}
export default Layout

const MobileBar = () => (
	<div className='max-w-md w-full fixed self-end px-7 h-12 flex justify-between items-center bg-slate-700'>
		<button className='bg-transparent border-0'>
			<Image src={Icons.calendar} alt='Главная' />
		</button>
		<button className='bg-transparent border-0'>
			<Image src={Icons.profile} alt='Профиль' />
		</button>
		<button className='bg-transparent border-0'>
			<Image src={Icons.more} alt='Еще' />
		</button>
	</div>
)
