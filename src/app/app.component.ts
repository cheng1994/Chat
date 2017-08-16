import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './providers/auth.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {

	loginForm: FormGroup;

	constructor(private fb: FormBuilder, private authService: AuthService){
		this.createForm();
	}
	createForm(){
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
			password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]]
		})
	}
	
	title = 'app';

	login(formData){
		this.authService.signInWithEmail(formData.email, formData.password);
	}

	createUser(formData){
		this.authService.createNewUser(formData.email, formData.password);
	}

}
