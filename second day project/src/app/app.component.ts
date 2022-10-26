import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day2';
  value : number = 11;
  array:string[] = ['red', 'green', 'blue'];
  
  ngOnInit() {
    this.title = 'changed from on Init';
  }
  
  
  onButtonClick(): void {
    this.value++;
  }
}
