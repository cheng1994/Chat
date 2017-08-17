import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

	authState: any = null;

	constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) { 
		this.afAuth.authState.subscribe(auth => {
			this.authState = auth;
		})
	}

	get authenticated(): boolean {
		return this.authState !== null;
	}

	get currentUser(): any {
		return this.authenticated ? this.authState: null;
	}

	get currentUserObservable(): any {
		return this.afAuth.authState;
	}

	get currentUserId(): string {
		return this.authenticated ? this.authState.uid: '';
	}

	get currentUserAnonymous(): boolean {
		return this.authenticated ? this.authState.isAnonymous: false;
	}

	get currentUserDisplayName(): string {
		if(!this.authState) { return 'Guest' }
		else if(this.currentUserAnonymous) { return 'Anonymous' }
		else { return this.authState['displayName'] || 'User without a Name' }
	}

	createNewUser(email: string, password: string){
		this.afAuth.auth.createUserWithEmailAndPassword(email, password)
		.then(user => {
			this.authState = user;
			this.updateUserData();
		})
		.catch(error => console.log(error))
	}

	signInWithEmail(email: string, password: string){
		this.afAuth.auth.signInWithEmailAndPassword(email, password)
		.then(user => {
			console.log(user);
			this.authState = user;
			this.updateUserData();
		})
		.catch(error => console.log(error))
	}

	oAuthSignIn(provider){
		this.afAuth.auth.signInWithPopup(provider)
			.then(credentials => {
				console.log(credentials);
				this.authState = credentials.user;
				this.updateUserData();
			})
			.catch(error => console.log(error))
	}

	googleLogin(){
		const provider = new firebase.auth.GoogleAuthProvider();
		return this.oAuthSignIn(provider)
	}

	//send password reset email
	resetPassword(email: string) {
		var auth = firebase.auth();
		return auth.sendPasswordResetEmail(email)
			.then(() => console.log("email sent"))
			.catch(error => console.log(error))
	}

	signOut(): void {
		this.afAuth.auth.signOut();
	}

	private updateUserData(): void {
		let path = 'users/' + this.currentUserId;
		let data = {
			email: this.authState.email,
			name: this.authState.displayName
		}
		this.db.object(path).update(data)
			.then((data) => {
				console.log(data);
				this.router.navigate(["messages"]);
			})
			.catch(error => console.log(error))
	}
}
