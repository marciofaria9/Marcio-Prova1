import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Time } from './time';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTime = {} as Time
  timeList: Time[] = []
  indice :number = 0

  saveData(form: NgForm) {
    this.timeList.push(this.newTime)
    this.newTime= {} as Time
    this.indice ++
    this.newTime.posicao = this.indice
    
    form.resetForm
  }

   


}
