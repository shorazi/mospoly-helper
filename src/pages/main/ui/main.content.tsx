import styles from './main.module.scss'

const data = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const MainPage = () => {
	console.log(styles)

	return (
		<>
			<Header />
			<div className={styles.scrollabel}>
				{data.map(item => (
					<CardDate key={item} value={item} />
				))}
			</div>
			<p className={styles.text_today_info}>26 мая, 15 неделя</p>
			<PreCard />
			<PreCard />
			<div>
				<p>Большой перерыв</p>
				<span>У тебя будет 40 минут, чтобы перекусить или отдохнуть</span>
			</div>
		</>
	)
}

export default MainPage

const Header = () => (
	<div className={styles.header}>
		<p>Группа 181-721</p>
	</div>
)

const CardDate = (props: { value: string }) => (
	<div className={styles.card_date}>{props.value}</div>
)

const PreCard = () => (
	<div className={styles.precard_lesson}>
		<p>10:30 - 11:30</p>
		<div className={styles.card_lesson}>
			<div>
				<p className={styles.text_lesson_type}>Лекция</p>
				<p className={styles.text_lesson_deadline}>1,5 месяца</p>
			</div>
			<p className={styles.text_lesson_topic}>
				Интеллектуальные системы и технологии
			</p>
			<div className={styles.lesson_more_info}>
				<p>Иванова Ольга Теремкина</p>
			</div>
			<div className={styles.lesson_more_info}>
				<p>Обучение в LMS</p>
			</div>
		</div>
	</div>
)
