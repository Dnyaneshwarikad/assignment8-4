import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
 {
    public str :string ="";
    public getdata (name:any)
    {
      this.str ="hello  "  +name;
    }
} 
