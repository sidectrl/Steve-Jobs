import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'corso-18-angular';
  isCustom = true;
  username = 'Default';

  isCustom2 = () => true

  getTitle = () => this.title;

  submit = ($event: any) => {
    console.log('$event',$event);
    alert('clicked');
  }

  iterators = ['0','1','2'];
}
