import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {
	AREA_ITEMS,
	COUNTRY_ITEMS,
	GENDER_ITEMS
} from '@team31/models/constants/team-leader.const';
import { IUser, IUserProfile } from '@team31/models/interfaces/user-profile.interface';
import { AuthService } from '@team31/services/auth.service';
import { ChannelProfileService } from '@team31/services/channel-submenus.service';
import { MessageService } from '@team31/services/message.service';
import { ProfileService } from '@team31/services/profile.service';
import { UserdataService } from '@team31/services/userdata.service';
import { CustomValidatorsService } from 'src/app/pages/authentication/common/service/custom-validators.service';
import { Util } from './../../../static/util';

@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
	uidProfile = '';
	showVerifyPassword = false;
	showNewPassword = false;
	changePassword = false;
	hidePassword = true;
	hideNewPassword = true;
	hideConfirmPassword = true;
	isLoading = false;
	profileForm: FormGroup;
	passwordsForm: FormGroup;
	currentUser: IUserProfile = <IUserProfile>{};

	listGender = GENDER_ITEMS;
	listCountry = COUNTRY_ITEMS;
	listArea = AREA_ITEMS;
	constructor(
		private fb: FormBuilder,
		public authFirebase: AngularFireAuth,
		private _authService: AuthService,
		private customvalidators: CustomValidatorsService,
		private _messageService: MessageService,
		private userDataService: UserdataService,
		private channelProfileService: ChannelProfileService,
		private profileService: ProfileService
	) {
		if (this.userDataService.getUserProfileData) {
			this.currentUser = this.userDataService.getUserProfileData;
		}
		this.profileForm = this.createProfileForm();
		this.passwordsForm = this.createPasswordsForm();
	}

	ngOnInit(): void {
		this.loadProfileData();
	}

	loadProfileData(): void {
		if (Object.keys(this.currentUser).length > 0) {
			this.getProfileFormControl['nick'].setValue(this.currentUser.profile.nick);
			this.getProfileFormControl['email'].setValue(this.currentUser.profile.email);
			this.getProfileFormControl['idGender'].setValue(this.currentUser.profile.idGender || 0);

			if (this.currentUser.profile.dateB) {
				const dateB = new Date(this.currentUser.profile.dateB?.seconds * 1000);
				this.getProfileFormControl['dateB'].setValue(dateB);
				if (typeof this.currentUser.profile.dateB === 'string') {
					const dateString = formatDate(this.currentUser.profile.dateB, 'MM/dd/yyyy', 'EN');
					this.getProfileFormControl['dateB'].setValue(new Date(dateString));
				}
			}
			this.getProfileFormControl['idCountry'].setValue(this.currentUser.profile.idCountry || 0);
			this.getProfileFormControl['idArea'].setValue(this.currentUser.profile.idArea || 0);

			if (this.currentUser.profile.redSocial) {
				this.profileForm
					.get('redSocial')
					?.get('facebook')
					?.setValue(this.currentUser.profile.redSocial.facebook || '');
				this.profileForm
					.get('redSocial')
					?.get('github')
					?.setValue(this.currentUser.profile.redSocial.github || '');
				this.profileForm
					.get('redSocial')
					?.get('linkedin')
					?.setValue(this.currentUser.profile.redSocial.linkedin || '');
				this.profileForm
					.get('redSocial')
					?.get('twitter')
					?.setValue(this.currentUser.profile.redSocial.twitter || '');
			}

			this.getProfileFormControl['biography'].setValue(this.currentUser.profile.biography || '');
		}
	}

	async verifyPassword(): Promise<void> {
		try {
			const response = await this._authService.verifyPassword(
				this.getPasswordsFormControl['password'].value
			);
			if (response) {
				this.showNewPassword = !this.showNewPassword;
				this.showVerifyPassword = false;
			}
		} catch (error) {
			this._messageService.openError(error, 'end', 'top');
		}
	}

	saveProfile(): void {
		try {
			if (this.currentUser.profile.uid) {
				this.isLoading = true;
				this.profileService.updateProfileData(
					this.currentUser.profile.uid,
					<IUser>this.profileForm.value
				);

				if (this.showNewPassword) {
					void this._authService.updatePassword(
						this.getPasswordsFormControl['confirmPassword'].value
					);
				}

				const dataUserForm: IUser = this.profileForm.value as IUser;

				const dataservice = this.userDataService.getUserProfileData.profile;
				const dataUser = { ...dataservice, ...dataUserForm };
				this.userDataService.getUserProfileData.profile = dataUser;

				this.giveInsignia(dataUserForm);
				this._messageService.openInfo('Perfil actualizado exitosamente', 'end', 'top');
				this.isLoading = false;
			}
		} catch (error) {
			this.isLoading = false;
			this._messageService.openError(error, 'end', 'top');
		}
	}

	giveInsignia(data: IUser): void {
		if (!Util.propertiesEmpty(data)) {
			this.profileService.getInsigniaSociable().subscribe((data) => {
				const insignia = data[0];
				const uid = this.userDataService.getUserProfileData.profile.uid;
				const insigniasUser = [{ urlImage: insignia.urlImage, name: insignia.name }];
				this.profileService.updateInsigniasData(uid, insigniasUser);
				this.userDataService.getUserProfileData.insignia = insigniasUser;
			});
		}
	}

	toggleVerifyPassword(event: MatSlideToggleChange): void {
		this.showVerifyPassword = event.checked;
	}

	createProfileForm(): FormGroup {
		return this.fb.group({
			nick: ['', [Validators.required, Validators.minLength(4)]],
			idGender: [0],
			email: [{ value: '', disabled: true }],
			dateB: [''],
			idCountry: [0],
			idArea: [0],
			redSocial: this.fb.group({
				facebook: [''],
				github: [''],
				linkedin: [''],
				twitter: ['']
			}),
			biography: ['', [Validators.maxLength(140)]]
		});
	}

	createPasswordsForm(): FormGroup {
		return this.fb.group(
			{
				password: [''],
				newPassword: ['', [Validators.required, Validators.minLength(6)]],
				confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
			},
			{
				validator: this.customvalidators.MatchPassword('newPassword', 'confirmPassword')
			}
		);
	}

	backToProfile(): void {
		this.channelProfileService.showComponent('Mi Perfil');
	}

	get getProfileFormControl(): FormGroup['controls'] {
		return this.profileForm.controls;
	}

	get getPasswordsFormControl(): FormGroup['controls'] {
		return this.passwordsForm.controls;
	}
}
