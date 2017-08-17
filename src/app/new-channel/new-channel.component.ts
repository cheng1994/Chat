import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../providers/chat.service';

@Component({
	selector: 'app-new-channel',
	templateUrl: './new-channel.component.html',
	styleUrls: ['./new-channel.component.css']
})
export class NewChannelComponent implements OnInit {

	users: any;

	constructor(private router: Router, private chatService: ChatService) { }

	ngOnInit() {
		this.chatService.users.subscribe(data => {
			this.users = data;
		})
	}

}
