import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'firstSample';
  isCustom = false;
  isCustom2 = () => true;
  submit = ($event: any) => {
    console.log('$event', $event);
    alert('click me nii-chan');
  };

  username = 'Default';
}
