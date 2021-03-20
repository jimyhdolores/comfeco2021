import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {
	IEventRequest,
	IGroups,
	IGroupUser,
	IInsignia
} from '@team31/models/interfaces/profile-module.interface';
import {
	IUser,
	IUserInsignia,
	IUserProfile
} from '@team31/models/interfaces/user-profile.interface';
import { Observable } from 'rxjs';
import { IEventUser } from './../models/interfaces/profile-module.interface';
import { TypeAttributeDataUser } from './../models/types';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	constructor(private _fireStore: AngularFirestore, private _authService: AngularFireAuth) {}

	async loadProfileData(uid: string): Promise<IUserProfile> {
		const userDocument = await this._fireStore.collection('users').doc(uid).get().toPromise();
		return <IUserProfile>userDocument.data();
	}

	getEvents(): Observable<IEventRequest[]> {
		return this._fireStore.collection<IEventRequest>('events').valueChanges();
	}

	getGroups(): Observable<IGroups[]> {
		return this._fireStore.collection<IGroups>('groups').valueChanges();
	}

	getInsignias(): Observable<IInsignia[]> {
		return this._fireStore.collection<IInsignia>('insignia').valueChanges();
	}

	getInsigniaSociable(): Observable<IInsignia[]> {
		return this._fireStore
			.collection<IInsignia>('insignia', (ref) => ref.where('name', '==', 'Sociable'))
			.valueChanges();
	}

	updateProfileData(uid: string, data: IUser): void {
		this.updateDataUser(uid, 'profile', data);
	}

	updateEventsData(uid: string, data: IEventUser[]): void {
		this.updateDataUser(uid, 'events', data);
	}

	updateGroupsData(uid: string, data: IGroupUser): void {
		this.updateDataUser(uid, 'group', data);
	}

	updateActivitiesData(uid: string, data: string[]): void {
		this.updateDataUser(uid, 'activities', data);
	}

	updateInsigniasData(uid: string, data: IUserInsignia[]): void {
		this.updateDataUser(uid, 'insignia', data);
	}

	private updateDataUser<T>(uid: string, attribute: TypeAttributeDataUser, data: T): void {
		const profileData = this._fireStore.collection('users').doc(uid);
		void profileData.update({ [attribute]: data });
	}

	async createProfileData(username: string): Promise<void> {
		const currentUser = await this._authService.currentUser;
		void currentUser?.updateProfile({
			displayName: username
		});
		const uid = currentUser?.uid;
		const tutorialsRef = this._fireStore.collection('users').doc(uid);
		void tutorialsRef.set({
			profile: {
				uid,
				nick: username,
				email: currentUser?.email
			}
		});
	}
}
