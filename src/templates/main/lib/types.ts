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

export interface IDateType {
	id: number
	value: string
	day: string
	fullDate: string
}
