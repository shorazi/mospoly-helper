import styles from './layout.module.scss'

const Layout = (
	props: Readonly<{
		children: React.ReactNode
	}>
) => {
	return (
		<div className={styles.root}>
			<div className={styles.container + ' bg-slate-800'}>
				<div className={styles.outlet}>{props.children}</div>
			</div>
			<MobileBar />
		</div>
	)
}

export default Layout

const MobileBar = () => (
	<div className={styles.mobile_bar + ' bg-slate-700'}>
		<button>Главная</button>
		<button>Профиль</button>
		<button>Еще</button>
	</div>
)
