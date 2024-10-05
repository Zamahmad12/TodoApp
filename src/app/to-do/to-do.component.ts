import { Component } from '@angular/core';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [ CommonModule, NgZorroAntdModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.less'
})
export class ToDoComponent {
     allNotes :any [] = [ ];
addtask(item : string){
     this.allNotes.push({id :this.allNotes.length, name: item})
}
delete(index: number): void {
  this.allNotes.splice(index, 1);
}
}
