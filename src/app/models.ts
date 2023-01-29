export class Devoir {
	constructor(public _id: number, public name: string, public classe: string) {}
}

export class ResponseResult {
	constructor(public statusCode: number, public message: string) {}
}