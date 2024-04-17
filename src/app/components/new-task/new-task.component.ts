import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  constructor(private router: Router, private service: TasksService){

  }

  backHome(){
    this.router.navigate(['/'])
  }

  save(name: any, description: any, time: any){
    this.service.saveTask(name.value, description.value, time.value)
    this.router.navigate(["/"])
  }

}
