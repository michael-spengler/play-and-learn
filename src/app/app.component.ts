import { Component } from '@angular/core';

export interface IQAPair {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'play-and-learn';

  public qaPair: IQAPair = {
    question: '',
    answer: ''
  };

  public qaPairCollection: IQAPair[] = [];


  public clickSave() {
    this.qaPairCollection.push(this.qaPair);
    this.qaPair = {
      question: '',
      answer: ''
    };
  }

}
