import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { AuthService } from './auth.service';

@Injectable()
export class ChatService {
	
	users: EventEmitter<any> = new EventEmitter();

	constructor(private db: AngularFireDatabase, private auth: AuthService) {
		this.db.list('/users').subscribe(data => {
			this.users.emit(data);
		});
	}

	get Users(){
		return this.auth.authenticated ? this.users : null; 
	}

	createChannel(channelName: string){
		let path = 'chats/';
		let data = {
			channelName: channelName,
			lastMessage: "",
			timestamp: new Date()
		};
		this.db.database.ref('chats');
		this.db.database.ref('chats').push(data)
			.then((data) => {
				console.log(data);
			})
			.catch(error => console.log(error));
	}
}
