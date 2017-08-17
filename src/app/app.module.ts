import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MdInputModule, MdErrorDirective, MdButtonModule, MdIconModule, MdIconRegistry } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseInfo } from '../environments/firebase-info';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthService } from './providers/auth.service';
import { ChatService } from './providers/chat.service';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { NewChannelComponent } from './new-channel/new-channel.component'

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    LoginComponent,
    NewChannelComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    AngularFireModule.initializeApp(firebaseInfo.firebase, 'chat-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [MdErrorDirective, AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
