import MobileBar from '../mobilebar'
import './layout.css'

const Layout = (
	props: Readonly<{
		children: React.ReactNode
	}>
) => {
	return (
		<div className='root'>
			<div className='w-full min-h-dvh flex flex-col justify-start items-center bg-slate-800'>
				<div className='max-w-md w-full min-h-dvh pb-16 flex flex-col justify-start items-center'>
					{props.children}
				</div>
			</div>
			<MobileBar />
		</div>
	)
}
export default Layout
