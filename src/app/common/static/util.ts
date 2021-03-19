import { TypeActivity } from '@team31/models/types';

export class Util {
	static getDescriptionActivity(nameActivity: string, typeActivity: TypeActivity): string {
		const activity = `Te has unido al ${typeActivity} ${nameActivity}`;
		return activity;
	}

	static propertiesEmpty<T>(obj: T): boolean {
		return Object.values(obj).some((x) => x === null || x === undefined || x === '');
	}
}
