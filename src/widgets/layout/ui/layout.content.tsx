import styles from './layout.module.scss'

const Layout = (
	props: Readonly<{
		children: React.ReactNode
	}>
) => {
	return (
		<div className={styles.root}>
			<div className='max-w-md w-full min-h-dvh flex flex-col relative bg-slate-800'>
				<div className='w-full grid grid-cols-1'>{props.children}</div>
			</div>
			<MobileBar />
		</div>
	)
}
// return (
// 	<div className={styles.root}>
// 		<div className={styles.container + ' bg-slate-800'}>
// 			<div className={styles.outlet}>{props.children}</div>
// 		</div>
// 		<MobileBar />
// 	</div>
// )

export default Layout

const MobileBar = () => (
	<div className='max-w-md w-full fixed self-end px-7 h-12 flex justify-between items-center bg-slate-700'>
		<button>Главная</button>
		<button>Профиль</button>
		<button>Еще</button>
	</div>
)
// <div className={styles.mobile_bar + ' bg-slate-700'}>
// </div>
