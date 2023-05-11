import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enterText = '';
  solved = false;
  
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.enterText = value;
    if (value === this.randomText) {
      this.solved = true;
    }
  }

  compare(randomLetter: string, enteredLetter: string) {
    if(!enteredLetter) {
      return 'pending';
    }

    return enteredLetter === randomLetter ? 'correct' : 'incorrect';
  }

}
