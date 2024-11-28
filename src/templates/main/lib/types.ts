export interface ILectureType {
	id: number
	time: ITimeType
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

export interface ITimeType {
	textColor?: boolean
	status: number
	title: string
	description?: string
}
