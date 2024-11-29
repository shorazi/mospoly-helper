'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icons from '../../../../public/icons'

type PathType = '/' | '/profile' | '/features'

interface DataType {
	[key: string]: {
		active: string
		inactive: string
	}
}

const Data: DataType = {
	'/': {
		active: Icons.timer_active,
		inactive: Icons.timer,
	},
	'/profile': {
		active: Icons.triangle_active,
		inactive: Icons.triangle,
	},
	'/features': {
		active: Icons.more_active,
		inactive: Icons.more,
	},
}

const GetStatus = (currentpath: string, path: PathType) => {
	return currentpath === path ? Data[path].active : Data[path].inactive
}

const MobileBar = () => {
	const current_pathname = usePathname()
	return (
		<div className='max-w-md w-full fixed self-end px-7 h-12 flex justify-between items-center bg-slate-700'>
			<Link href='/'>
				<Image src={GetStatus(current_pathname, '/')} alt='Главная' />
			</Link>
			<Link href='/profile'>
				<Image src={GetStatus(current_pathname, '/profile')} alt='Профиль' />
			</Link>
			<Link href='/features'>
				<Image src={GetStatus(current_pathname, '/features')} alt='Еще' />
			</Link>
		</div>
	)
}

export default MobileBar
