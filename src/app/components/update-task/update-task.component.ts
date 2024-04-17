import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent implements OnInit{

  id: any;
  Task: any;
  task_title: any;

  constructor(private router: ActivatedRoute, private taskService: TasksService, private route: Router){

  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')
    this.Task = this.taskService.task[this.id]
    this.task_title = this.taskService.task[this.id].Name
  }

  backHome(){
    this.route.navigate(['/'])
  }

  update(){
    this.taskService.updateTask(this.id, this.Task)
    this.route.navigate(['/'])
  }

}
