export interface IEventRequest extends IEventUser {
	description: string;
}

export interface IEvent extends IEventUser {
	description: string;
	disabled: boolean;
}

export interface IEventUser {
	urlImage: string;
	name: string;
	id: number;
}

export interface IInsignia {
	urlImage: string;
	name: string;
	description: string;
	howToWin: string;
}
export interface IGroups {
	urlLogo: string;
	nameTechnology: string;
	nameGroup: string;
	description: string;
	members: Array<IMember>;
}

export interface IGroupUser {
	name: string;
	urlLogo: string;
	members: IGroupUserMember[];
}

export interface IGroupUserMember {
	name: string;
	level: string;
}

export interface IMember {
	name: string;
	level: string;
}
