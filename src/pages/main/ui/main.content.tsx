import styles from './main.module.scss'

const MainPage = () => {
	return (
		<>
			<div className={styles.header}>
				<p>Группа 181-721</p>
			</div>
			<div className={styles.scrollabel}>
				<div className={styles.card_date}></div>
			</div>
			<p className={styles.text_today_info}>26 мая, 15 неделя</p>
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
			<p>Какая-то важная информация</p>
		</>
	)
}

export default MainPage
