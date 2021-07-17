import { NewListComponent } from './components/new-list/new-list.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './components/new-task/new-task.component';

const routes: Routes = [
  { path: '', component: TaskViewComponent },
  { path: 'new-list', component: NewListComponent },
  { path: 'new-task', component: NewTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
