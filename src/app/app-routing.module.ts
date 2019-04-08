import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventCreateComponent } from './event-create/event-create.component';
import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'events/new', component: EventCreateComponent },
  { path: 'home', component: HomeComponent },
  { path: 'events/:id', component: EventDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
