import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{header}}</h1>
      <ul>
        <li *ngFor="let line of lines">
        {{line}}
        </li>
      </ul>
      <form>
        <div>
          <label for="new-color-input">New Color:</label>
          <input type="text" 
                 id="new-color-input" 
                 name="newColor"
                [(ngModel)]="newColor">
          <button type="button" (click)="addColor($)">Add color</button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public header: string = "app with new header";
  public lines : string[] = [
    "red", "white", "blue"
  ];
  public newColor: string = "";

  public addColor(): void {
    this.lines.push(this.newColor);
  }
}

