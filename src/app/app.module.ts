import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BryntumGanttModule } from '@bryntum/gantt-angular';
import { BryntumTaskBoardModule } from '@bryntum/taskboard-angular';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BryntumTaskBoardModule,
    BryntumGanttModule
  ],
  exports: []
})
export class AppModule { }