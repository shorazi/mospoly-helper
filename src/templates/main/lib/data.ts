import { IDateType, ILectureType } from './types'

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
	{
		id: 9,
		value: 'Вт',
		day: '1',
		fullDate: '1 мая, 15 неделя',
	},
	{
		id: 10,
		value: 'Ср',
		day: '2',
		fullDate: '2 мая, 15 неделя',
	},
	{
		id: 11,
		value: 'Чт',
		day: '3',
		fullDate: '3 мая, 15 неделя',
	},
	{
		id: 12,
		value: 'Пт',
		day: '4',
		fullDate: '4 мая, 15 неделя',
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
			textColor: true,
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
			status: 7,
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
			title: 'Физическая культура и спорт',
			teacher: 'Бодакин А. В.',
			audience: 'Спортивный зал',
		},
	},
	{
		id: 5,
		time: {
			status: 4,
			title: '16:00 - 17:30',
		},
		type: {
			name: 'Зачет',
			id: 2,
		},
		lecture: {
			deadline: '26 мая',
			title: 'Экономика и экономическая эксплуатация',
			teacher: 'Тингулова А. А.',
			audience: 'Экономический зал',
		},
	},
	{
		id: 6,
		time: {
			status: 5,
			title: '17:30 - 19:00',
		},
		type: {
			name: 'Лекция',
			id: 1,
		},
		lecture: {
			deadline: '1,5 мес',
			title: 'Политика и гуманитарная деятельность',
			audience: '(Rails) Обучение в Rails',
			teacher: 'Кишенова А. В.',
		},
	},
	{
		id: 7,
		time: {
			status: 6,
			title: '19:00 - 20:30',
		},
		type: {
			name: 'Лекция',
			id: 1,
		},
		lecture: {
			deadline: '1,5 мес',
			title: 'Строительство и экономика',
			audience: '(Rails) Обучение в Rails',
			teacher: 'Кишенова А. В.',
		},
	},
]
