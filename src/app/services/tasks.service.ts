import { Injectable } from '@angular/core';
import { TaskInterface } from '../task-interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  task: TaskInterface[] =
    [
      {
        Name: "Assigment",
        Description: "Angular to-do list project",
        Due_date: "2AM"
      },
      {
        Name: "Running",
        Description: "Go running",
        Due_date: "tomorrow"
      }
    ]

  constructor() { }

  Tdelete(i: number){
    this.task.splice(i, 1);
  }

  saveTask(name: any, dis: any, time: any){
    this.task.push({
      Name: name,
      Description: dis,
      Due_date: time})
  }

  updateTask(id: any, item:any){
    this.task[id] = item
  }
}
