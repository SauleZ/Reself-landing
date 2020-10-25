import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CourseComponent} from './pages/course/course.component';
import {SharesComponent} from './pages/shares/shares.component';
import {ContactsComponent} from './pages/contacts/contacts.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CourseComponent
  },
  {
    path: 'shares',
    component: SharesComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
