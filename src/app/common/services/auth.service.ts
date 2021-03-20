import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HeaderService } from '@team31/services/header.service';
import firebase from 'firebase/app';

@Injectable()
export class AuthService {
	constructor(private _authService: AngularFireAuth, private headerService: HeaderService) {}

	singInWithEmailAndPassword(
		email: string,
		password: string
	): Promise<firebase.auth.UserCredential> {
		return this._authService.signInWithEmailAndPassword(email, password);
	}

	sendPasswordResetEmail(email: string): Promise<void> {
		return this._authService.sendPasswordResetEmail(email);
	}

	verifyPasswordresetCode(actionCode: string): Promise<string> {
		return this._authService.verifyPasswordResetCode(actionCode);
	}

	confirmPasswordReset(actioncode: string, newPassword: string): Promise<void> {
		return this._authService.confirmPasswordReset(actioncode, newPassword);
	}

	createUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
		return this._authService.createUserWithEmailAndPassword(email, password);
	}

	logout(): void {
		sessionStorage.clear();
		this.headerService.showMenu(false);
		void this._authService.signOut();
	}

	async verifyPassword(password: string): Promise<firebase.auth.UserCredential | undefined> {
		const currentUser = await this._authService.currentUser;
		if (currentUser && currentUser.email) {
			const validated = await currentUser.reauthenticateWithCredential(
				firebase.auth.EmailAuthProvider.credential(currentUser.email, password)
			);
			return validated;
		}
		return undefined;
	}

	async updatePassword(newPassword: string): Promise<void> {
		const currentUser = await this._authService.currentUser;
		return currentUser?.updatePassword(newPassword);
	}
}
