import { Sponsor } from '../carousel';
import { Framework, ITeamLeaderItem } from '../interfaces/team-leader-item.interface';
import { IOptionSelect } from './../interfaces/register.interface';

export const TEAM_LEADER_ITEMS: ITeamLeaderItem[] = [
	{
		id: 1,
		leader_name: 'Anartz Mugika Ledo',
		image: 'assets/images/team-leaders/angular-anartz-mugika-ledo.jpg',
		type: Framework.Angular
	},
	{
		id: 2,
		leader_name: 'Bezael Perez',
		image: 'assets/images/team-leaders/angular-bezael-perez.jpg',
		type: Framework.Angular
	},
	{
		id: 3,
		leader_name: 'Diego Montoya',
		image: 'assets/images/team-leaders/angular-diego-montoya.jpg',
		type: Framework.Angular
	},
	{
		id: 4,
		leader_name: 'Mayra Rodríguez',
		image: 'assets/images/team-leaders/angular-mayra-rodriguez.jpg',
		type: Framework.Angular
	},
	{
		id: 5,
		leader_name: 'Nicolas Molina',
		image: 'assets/images/team-leaders/angular-nicolas-molina.jpg',
		type: Framework.Angular
	},
	{
		id: 6,
		leader_name: 'Alejandro Ñáñez Ortiz',
		image: 'assets/images/team-leaders/react-alejandro-ñañez-ortiz.jpg',
		type: Framework.React
	},
	{
		id: 7,
		leader_name: 'Diego Plascencia',
		image: 'assets/images/team-leaders/react-diego-plascencia.jpg',
		type: Framework.React
	},
	{
		id: 8,
		leader_name: 'Lara Diaz',
		image: 'assets/images/team-leaders/react-lara-diaz.jpg',
		type: Framework.React
	},
	{
		id: 9,
		leader_name: 'Lina María Montaño Ramírez',
		image: 'assets/images/team-leaders/react-lina-maria-montaño-ramirez.jpg',
		type: Framework.React
	},
	{
		id: 10,
		leader_name: 'Vanessa Marely',
		image: 'assets/images/team-leaders/react-vanessa-marely.jpg',
		type: Framework.React
	},
	{
		id: 11,
		leader_name: 'Manuel Muñoz',
		image: 'assets/images/team-leaders/svelte-manuel-muñoz.jpg',
		type: Framework.Svelte
	},
	{
		id: 12,
		leader_name: 'Marcos Rivas',
		image: 'assets/images/team-leaders/svelte-marcos-rivas.jpg',
		type: Framework.Svelte
	},
	{
		id: 13,
		leader_name: 'Oscar Barajas',
		image: 'assets/images/team-leaders/svelte-oscar-barajas.jpg',
		type: Framework.Svelte
	},
	{
		id: 14,
		leader_name: 'Silvestre Vivo',
		image: 'assets/images/team-leaders/svelte-silvestre-vivo.jpg',
		type: Framework.Svelte
	},
	{
		id: 15,
		leader_name: 'Svelte Mastery',
		image: 'assets/images/team-leaders/svelte-mastery-svelte.jpg',
		type: Framework.Svelte
	},
	{
		id: 16,
		leader_name: 'Cristopher Paniagua',
		image: 'assets/images/team-leaders/vue-cristopher-paniagua.jpg',
		type: Framework.Vue
	},
	{
		id: 17,
		leader_name: 'Fernando de la Rosa',
		image: 'assets/images/team-leaders/vue-fernando-de-la-rosa.jpg',
		type: Framework.Vue
	},
	{
		id: 18,
		leader_name: 'Ignacio Anaya',
		image: 'assets/images/team-leaders/vue-ignacio-anaya.jpg',
		type: Framework.Vue
	},
	{
		id: 19,
		leader_name: 'Manuel Ojeda',
		image: 'assets/images/team-leaders/vue-manuel-ojeda.jpg',
		type: Framework.Vue
	},
	{
		id: 20,
		leader_name: 'Noemi Leon',
		image: 'assets/images/team-leaders/vue-noemi-leon.jpg',
		type: Framework.Vue
	},
	{
		id: 21,
		leader_name: 'Nicolas Schurmann',
		image: 'assets/images/team-leaders/leaders2022-nicolas-schurmann.jpg',
		type: Framework.Leaders2022
	},
	{
		id: 22,
		leader_name: 'Sacha Lifszyc',
		image: 'assets/images/team-leaders/leaders2022-sacha-lifszyc.jpg',
		type: Framework.Leaders2022
	}
];

export const SPONSOR_ITEMS: Sponsor[] = [
	{ photo: 'assets/images/sponsors/CodelyTV.jpg', name: 'Codely Tv' },
	{ photo: 'assets/images/sponsors/codigofacilito.jpg', name: 'Codigo facilito' },
	{ photo: 'assets/images/sponsors/DominiCode.jpg', name: 'Domini Code' },
	{ photo: 'assets/images/sponsors/Egghead.jpg', name: 'Egghead' },
	{ photo: 'assets/images/sponsors/FernandoHerrera.jpg', name: 'Fernando Herrera' },
	{ photo: 'assets/images/sponsors/huawei.jpg', name: 'Huawei' },
	{ photo: 'assets/images/sponsors/JoseDimasLujan.jpg', name: 'Jose Dimas Lujan' },
	{ photo: 'assets/images/sponsors/LatamDev.jpg', name: 'LatamDev' },
	{ photo: 'assets/images/sponsors/LeonidasEsteban.jpg', name: 'Leonidas Esteban' },
	{ photo: 'assets/images/sponsors/StacklyCode.jpg', name: 'StacklyCode' },
	{ photo: 'assets/images/sponsors/tekki.jpg', name: 'Tekki' }
];

export const GENDER_ITEMS: IOptionSelect[] = [
	{ id: 0, value: 'Seleccione género' },
	{
		id: 1,
		value: 'Masculino'
	},
	{
		id: 2,
		value: 'Femenino'
	},
	{
		id: 3,
		value: 'Otro'
	}
];

export const COUNTRY_ITEMS: IOptionSelect[] = [
	{ id: 0, value: 'Seleccione país' },
	{ id: 1, value: 'Argentina' },
	{ id: 2, value: 'Bolivia' },
	{ id: 3, value: 'Brasil' },
	{ id: 4, value: 'Chile' },
	{ id: 5, value: 'Colombia' },
	{ id: 6, value: 'Costa Rica' },
	{ id: 7, value: 'Cuba' },
	{ id: 8, value: 'Ecuador' },
	{ id: 9, value: 'El Salvador' },
	{ id: 10, value: 'Guatemala' },
	{ id: 11, value: 'Haití' },
	{ id: 12, value: 'Honduras' },
	{ id: 13, value: 'México' },
	{ id: 14, value: 'Nicaragua' },
	{ id: 15, value: 'Panamá' },
	{ id: 16, value: 'Paraguay' },
	{ id: 17, value: 'Perú' },
	{ id: 18, value: 'República Dominicana' },
	{ id: 19, value: 'Uruguay' },
	{ id: 20, value: 'Venezuela' }
];

export const AREA_ITEMS: IOptionSelect[] = [
	{ id: 0, value: 'Seleccione área' },
	{ id: 1, value: 'FronEnd' },
	{ id: 2, value: 'BackEnd' },
	{ id: 3, value: 'DevOps' },
	{ id: 4, value: 'Video Game Developers' },
	{ id: 5, value: 'UI/UX' },
	{ id: 6, value: 'Database Developer' },
	{ id: 7, value: 'Cloud Computing' }
];

export const LANGUAGES = ['Javascript', 'Typescript', 'Java', 'C#', 'Dart'];
