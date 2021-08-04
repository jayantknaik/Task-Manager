import { TestComponent } from './components/test/test.component';
import { NewListComponent } from './components/new-list/new-list.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
  { path: 'lists', component: TaskViewComponent },
  { path: 'new-list', component: NewListComponent },
  { path: 'lists/:listId', component: TaskViewComponent },
  { path: 'lists/:listId/new-task', component: NewTaskComponent },
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
