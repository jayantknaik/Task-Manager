import { NewListComponent } from './../new-list/new-list.component';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  openNewList() {
    const dialogRef = this.dialog.open(NewListComponent);
  }
  openNewTask() {
    const dialogRef = this.dialog.open(NewTaskComponent);
  }
}
