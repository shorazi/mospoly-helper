import styles from './layout.module.scss'

const Layout = (
	props: Readonly<{
		children: React.ReactNode
	}>
) => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				{props.children}

				<div className={styles.mobile_bar}>
					<button>Главная</button>
					<button>Профиль</button>
					<button>Еще</button>
				</div>
			</div>
		</div>
	)
}

export default Layout
