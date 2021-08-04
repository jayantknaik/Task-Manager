import { WebRequestService } from './../../services/web-request.service';
import { NewListComponent } from './../new-list/new-list.component';
import { TaskService } from './../../services/task.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NewTaskComponent } from '../new-task/new-task.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  lists: any[] = [];
  tasks: any[] = [];
  ngOnInit(): void {
    //GET LISTS
    this.taskService.getLists().subscribe((res: any) => {
      this.lists = res;
    });

    //GET TASKS
    this.route.params.subscribe((params: Params) => {
      this.taskService.getTasks(params.listId).subscribe((res: any) => {
        this.tasks = res;
      });
    });
  }
  onTaskClick(task: any) {
    return this.taskService.complete(task).subscribe(() => {
      console.log('Task completed!');
      task.complete = !task.complete;
    });
  }
}
