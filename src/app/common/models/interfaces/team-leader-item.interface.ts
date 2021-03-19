export interface ITeamLeaderItem {
	id?: number;
	leader_name: string;
	image: string;
	type: Framework;
}

export enum Framework {
	Angular = 'assets/svg/framework-logos/angular-logo.svg',
	React = 'assets/svg/framework-logos/react-logo.svg',
	Svelte = 'assets/svg/framework-logos/svelte-logo.svg',
	Vue = 'assets/svg/framework-logos/vue-logo.svg',
	Leaders2022 = 'assets/svg/framework-logos/angular-logo.svg'
}
