import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'userObj'
})
export class UserObjPipe implements PipeTransform {

  transform({name, surname}: User): string {
    return`${ name || 'No name'} - ${surname || 'No surname'}`;
  }

}
