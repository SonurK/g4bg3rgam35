import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  declarations: [
    FileSizePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FileSizePipe,
  ]
})
export class PipesModule { }

/* Lazy pipes, imported only on specific modules -> product.module */