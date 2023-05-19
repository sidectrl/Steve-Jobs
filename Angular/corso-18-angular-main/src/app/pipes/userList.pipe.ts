import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'userList'
})
export class UserListToPipe implements PipeTransform {

  transform(users: User[]): string[] {
    return users.map(user => `${user.name} ${user.surname}`);
  }

}