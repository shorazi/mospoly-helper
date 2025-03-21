'use client'
import { useCallback, useRef, useState } from 'react'
import './drawer.css' // Импортируем стили для анимации

interface DrawerProps {
	direction: 'bottom' | 'top' | 'left' | 'right'
}

const Drawer = ({ direction }: DrawerProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const drawerRef = useRef<HTMLDivElement>(null)

	const toggleDrawer = useCallback(() => {
		setIsOpen(prevState => !prevState)
	}, [])

	const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
		if (
			drawerRef.current &&
			!drawerRef.current.contains(event.target as Node)
		) {
			setIsOpen(!isOpen)
		}
	}

	const translateClasses = {
		bottom: isOpen ? 'translate-y-0' : 'translate-y-full',
		top: isOpen ? 'translate-y-0' : '-translate-y-full',
		left: isOpen ? 'translate-x-0' : '-translate-x-full',
		right: isOpen ? 'translate-x-0' : 'translate-x-full',
	}

	return (
		<>
			<button
				onClick={toggleDrawer}
				className='fixed bottom-16 right-4 z-30 p-2 bg-blue-500 text-white rounded-full'
			>
				{isOpen ? 'Закрыть' : 'Открыть'}
			</button>
			<div
				id='drawer-root'
				className={`fixed inset-0 z-20 flex justify-center items-end transition-transform duration-300 ${translateClasses[direction]}`}
				onClick={handleClickOutside}
			>
				<div
					ref={drawerRef}
					className='w-full h-3/4 bg-gray-900 rounded-t-2xl p-4'
				>
					<button onClick={toggleDrawer} className='text-white'>
						Закрыть
					</button>
					{/* props.children */}
				</div>
			</div>
		</>
	)
}

export default Drawer
