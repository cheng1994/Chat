import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { MessageComponent }   from './message/message.component';
import { NewChannelComponent }   from './new-channel/new-channel.component';
import { LoginComponent } from './login/login.component';
 
const appRoutes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'messages', component: MessageComponent },
    { path: 'new-channel', component: NewChannelComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}