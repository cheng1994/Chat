import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}

	createNewChannel(){
		this.router.navigate(["new-channel"]);
	}

}
