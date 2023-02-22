import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onomatopoeiaList: Array<string>= ['Aoutch','Berk','Ha ha'];
  onReceiveNewOnomatopia(): void{
    console.log('New onomatopoeia received');
  }
}
