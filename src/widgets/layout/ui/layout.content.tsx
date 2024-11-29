import MobileBar from '../mobilebar'
import './layout.css'

const Layout = (
	props: Readonly<{
		children: React.ReactNode
	}>
) => {
	return (
		<div className='root'>
			<div className='max-w-md w-full min-h-dvh flex justify-start items-start  bg-slate-800'>
				<div className='w-full min-h-dvh flex flex-col pb-16'>
					{props.children}
				</div>
			</div>
			<MobileBar />
		</div>
	)
}
export default Layout
