import { Injectable } from '@angular/core';
import { IUserProfile } from '@team31/models/interfaces/user-profile.interface';

@Injectable({
	providedIn: 'root'
})
export class UserdataService {
	userProfileData: IUserProfile = <IUserProfile>{};

	set setUserProfileData(data: IUserProfile) {
		this.userProfileData = data;
	}

	get getUserProfileData(): IUserProfile {
		return this.userProfileData;
	}

	updateProfileData(data: IUserProfile, updateData: IUserProfile): IUserProfile {
		const demo = data;
		demo.profile = { ...demo.profile, ...updateData.profile };
		// if (demo.insignia !== undefined && updateData.insignia !== undefined) {
		// 	demo.insignia = [...demo.insignia, updateData.insignia];
		// }
		// const demo = <IUserProfile>Object.assign(data, updateData);
		// debugger;
		return demo;
	}
}
