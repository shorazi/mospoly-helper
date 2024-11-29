import { ReactNode } from 'react'

interface HeaderProps {
	start: ReactNode
	end?: ReactNode
}

const UIHeader = (props: HeaderProps) => (
	<div className='w-full flex justify-between items-center py-4 px-6'>
		{/* <p className='font-semibold'>{props.start}</p>
		<button className='bg-transparent border-0'>
			{props?.end}
			<Image src={Icons.trontron} alt='logo' />
		</button> */}
		{props.start}
		{props?.end}
	</div>
)

export default UIHeader
