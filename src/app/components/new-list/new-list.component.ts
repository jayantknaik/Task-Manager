import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
  createNewList(title: string) {
    this.taskService.createList(title).subscribe((res: any) => {
      console.log(res);
    });
  }
}
