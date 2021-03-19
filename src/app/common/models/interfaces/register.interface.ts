export interface IRegister {
	inputs?: IInputs[];
	button?: string;
	terms?: string;
	enlace?: string;
}

export interface IInputs {
	label: string;
	placeholder: string;
	value: string;
	img: string;
}

export interface IOptionSelect {
	id: number;
	value: string;
}
