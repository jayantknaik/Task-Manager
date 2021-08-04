import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  listId: string = '';
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
    });
  }
  createNewTask(title: string) {
    console.log('yolo');

    this.taskService.createTask(title, this.listId).subscribe((res: any) => {
      this.router.navigate(['/lists', this.listId]);
    });
  }
}
