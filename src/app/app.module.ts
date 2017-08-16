import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MdInputModule, MdErrorDirective, MdButtonModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseInfo } from '../environments/firebase-info';

import { AppComponent } from './app.component';
import { ChannelsComponent } from './channels/channels.component';
import { ComponentComponent } from './component/component.component';

import { AuthService } from './providers/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    ChannelsComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule,
    AngularFireModule.initializeApp(firebaseInfo.firebase, 'chat-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [MdErrorDirective, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
