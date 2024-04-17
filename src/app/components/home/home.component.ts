import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public task_ser: TasksService, private router: Router){

  }

  delete(i: number){
    this.task_ser.Tdelete(i);
  }

  nav(){
    this.router.navigate(['/new-task'])
  }

  nav_to_update(id: number){
    this.router.navigate(['/update-task', id])
  }

}
