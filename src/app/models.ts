export class Devoir {
	constructor(public _id: number, public name: string, public classe: string) {}
}

export class ResponseResult {
	constructor(public status: number, public message: string) {}
}