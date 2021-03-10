import { newArray, stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ITask } from '../itask';

@Component({
  selector: 'app-grocery',
  templateUrl: './app.grocery.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class GroceryComponent {

  task:string = '';
  tasks: ITask[] = [];

  onClick(){
    this.tasks.push({name:this.task});
    this.task = '';
  }

}