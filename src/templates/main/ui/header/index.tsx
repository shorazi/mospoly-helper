import Image from 'next/image'
import Icons from '../../../../../public/icons'

const Header = () => (
	<div className='w-full flex justify-between items-center py-4 px-6'>
		<p className='font-semibold'>Группа 181-721</p>
		<button className='bg-transparent border-0'>
			<Image src={Icons.trontron} alt='logo' />
		</button>
	</div>
)

export default Header
