import { Component } from '@angular/core';

@Component({
  selector: 'app-tavakalkulaator',
  imports: [],
  templateUrl: './tavakalkulaator.html',
  styleUrl: './tavakalkulaator.css',
})
export class Tavakalkulaator {
    number1 = 0;
    operaator = "";
    number2 = 0;
    isResult = false;
    result = 0;

    muudaNumbrit(uusNumber: number) {
      if (this.operaator === "") {
        this.number1 = Number (this.number1.toString() + uusNumber.toString());
        return;
      }

      this.number2 = Number (this.number2.toString() + uusNumber.toString());

      this.arvutaVastus ();

    }

    muudaOperatorit (uusOperator: string) {
    this.operaator = uusOperator;
    this.arvutaVastus ();
    
    }

    showResult() {
      this.isResult = true;
      this.arvutaVastus();
    }

    reset() {
    this.number1 = 0;
    this.operaator = "";
    this.number2 = 0;
    this.isResult = false;
    this.result = 0;
    }


    // private - tähendab, et ei kasutata HTMLis
private arvutaVastus() {
      if (this.isResult === false) {
        return;
      }

      if (this.operaator === "*") {
        this.result = this.number1 * this.number2;
      }

       if (this.operaator === "/") {
        this.result = this.number1 / this.number2;
      }
      
      if (this.operaator === "-") {
        this.result = this.number1 - this.number2;
      }

       if (this.operaator === "+") {
        this.result = this.number1 + this.number2;
      }
  
}

}
