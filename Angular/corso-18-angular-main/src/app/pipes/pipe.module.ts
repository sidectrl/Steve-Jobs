import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserObjPipe } from './userObj.pipe';
import { UserListToPipe } from './userlist.pipe';

const pipes = [
  UserListToPipe,
  UserObjPipe
];

@NgModule({
  declarations: pipes,
  imports: [
    CommonModule
  ],
  exports: pipes
})
export class PipeModule { }
