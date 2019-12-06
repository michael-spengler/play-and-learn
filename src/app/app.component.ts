import { Component } from '@angular/core';
import { IIndividualImpressumData } from 'german-impressum';

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

  public individualImpressumData: IIndividualImpressumData = {
    name: 'Michael Spengler',
    street: 'Zollhofgarten 8',
    extension: 'Wohnung 401',
    zipCode: '69115',
    city: 'Heidelberg',
    phoneNumber: '0049 67 83 38 69',
    eMail: 'michael@spengler.biz',
    textAlign: 'center',
    bgColor: 'inherit',
  };
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
