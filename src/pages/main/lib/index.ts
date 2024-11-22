export interface IDateType {
	id: number
	value: string
	day: string
	fullDate: string
}

export const Dates: IDateType[] = [
	{
		id: 1,
		value: 'Пн',
		day: '24',
		fullDate: '24 мая, 15 неделя',
	},
	{
		id: 2,
		value: 'Вт',
		day: '25',
		fullDate: '25 мая, 15 неделя',
	},
	{
		id: 3,
		value: 'Ср',
		day: '26',
		fullDate: '26 мая, 15 неделя',
	},
	{
		id: 4,
		value: 'Чт',
		day: '27',
		fullDate: '27 мая, 15 неделя',
	},
	{
		id: 5,
		value: 'Пт',
		day: '28',
		fullDate: '28 мая, 15 неделя',
	},
	{
		id: 6,
		value: 'Сб',
		day: '29',
		fullDate: '29 мая, 15 неделя',
	},
	{
		id: 7,
		value: 'Вс',
		day: '30',
		fullDate: '30 мая, 15 неделя',
	},
	{
		id: 8,
		value: 'Пн',
		day: '31',
		fullDate: '31 мая, 15 неделя',
	},
]

export const Lessons: ILectureType[] = [
	{
		id: 1,
		time: {
			status: 1,
			title: '10:40 - 12:10',
		},
		type: {
			name: 'Лекция',
			id: 1,
		},
		lecture: {
			deadline: '1,5 мес',
			title: 'Интеллектуальные системы и технологии',
			teacher: 'Лазарева Ольга Юрьевна',
			audience: '(LMS) Обучение в LMS',
		},
	},
	{
		id: 2,
		time: {
			status: 2,
			title: 'Идет 30 мин., конец в 13:50',
		},
		type: {
			name: 'Лекция',
			id: 1,
		},
		lecture: {
			deadline: '1,5 мес',
			title: 'Цифровая обработка медиаданных',
			teacher: 'Лазарева Ольга Юрьевна',
			audience: '(LMS) Обучение в LMS',
		},
	},
	{
		id: 4,
		time: {
			status: 2,
			title: 'Большой перерыв',
			description: 'У вас будет 40 минут, чтобы перекусить или отдохнуть',
		},
	},
	{
		id: 3,
		time: {
			status: 3,
			title: '14:30 - 16:00',
		},
		type: {
			name: 'Зачет',
			id: 2,
		},
		lecture: {
			deadline: '26 мая',
			title: 'Физическая культура и спорт жи есть',
			teacher: 'Бодакин А. В.',
			audience: 'Спортивный зал (таги доми хамсоя да)',
		},
	},
]

export interface ILectureType {
	id: number
	time: {
		status: number
		title: string
		description?: string
	}
	type?: {
		name: string
		id: number
	}
	lecture?: {
		deadline: string
		title: string
		teacher: string
		audience: string
	}
}
