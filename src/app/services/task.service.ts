import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';
import { Task } from '../components/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webRequestService: WebRequestService) {}

  getLists() {
    return this.webRequestService.get('lists');
  }
  createList(title: string) {
    return this.webRequestService.post('lists', { title });
  }
  getTasks(listId: string) {
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }
  createTask(title: string, listId: string) {
    return this.webRequestService.post(`lists/${listId}/tasks`, { title });
  }
  complete(task: Task) {
    return this.webRequestService.patch(
      `lists/${task._listId}/tasks/${task._id}`,
      {
        complete: !task.complete,
      }
    );
  }
}
